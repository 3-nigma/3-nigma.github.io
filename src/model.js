import {AmbientLight} from 'https://cdn.skypack.dev/three@0.129.0/src/lights/AmbientLight.js';
import {PointLight} from 'https://cdn.skypack.dev/three@0.129.0/src/lights/PointLight.js';
import {PerspectiveCamera} from 'https://cdn.skypack.dev/three@0.129.0/src/cameras/PerspectiveCamera.js';
import {Scene} from 'https://cdn.skypack.dev/three@0.129.0/src/scenes/Scene.js';
import {WebGLRenderer} from 'https://cdn.skypack.dev/three@0.129.0/src/renderers/WebGLRenderer.js';
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import {AxesHelper} from 'https://cdn.skypack.dev/three@0.129.0/src/helpers/AxesHelper.js';
import {MeshPhysicalMaterial} from 'https://cdn.skypack.dev/three@0.129.0/src/materials/MeshPhysicalMaterial.js';
import {RGBELoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/RGBELoader.js';
import {EquirectangularReflectionMapping} from 'https://cdn.skypack.dev/three@0.129.0/src/constants.js';

/** Handles the 3D rendering and animation of the machine gltf model. */
class Model {

    /** Define vars for 3D Object subcomponents in the gltf hierarchy. */
    constructor(machine) {
        this.keys = [];
        this.lamps = [];
        this.rotors = [];
        this.pawls = [];
        this.basePlate = null;

        this.materials = [];
        this.rotorsAreOpaque = true;
        this.toggleRotate = false;
        this.metalness = 0.0;
        this.axesShown = false;
        this.isRainbow = false;
        this.wireframe = false;

        const container = document.getElementById("model-canvas");
    
        this.camera = new PerspectiveCamera(3, window.innerWidth / window.innerHeight, 1, 20);
        this.camera.position.set(0, 5, 5);
    
        this.scene = new Scene();

        this.axesHelper = new AxesHelper(5);
    
        const light1 = new PointLight(0xFFFFFF, 0.4, 0, 1); // 0xFDF3C6
        light1.position.set(0.15, 0.15, 0.5);
        this.camera.add(light1);
        const light2 = new PointLight(0xFFFFFF, 0.1, 0, 1);
        light2.position.set(-0.15, 0.15, 0.5);
        this.camera.add(light2);
        const light3 = new AmbientLight(0xFFFFFF, 0.4);
        this.camera.add(light3);
    
        this.scene.add(this.camera);

        this.machine = machine;
        console.log(this.machine);
        this.translate(0, -0.15, -0.05);
        this.setMetalness(this.metalness);
        this.setOpacity(this.machine, 0.95);
    
        let materialNames = [];
        this.machine.traverse((object) => {
            if (object.material && !materialNames.includes(object.material.name)) {
                this.materials.push(object.material);
                materialNames.push(object.material.name);
            }
        });
        this.materials.push(this.materials[9].clone());
        this.materials[13].color = {r: 100, b: 100, g: 100};
        this.materials[13].transparent = true;

        const hdrEquirect = new RGBELoader().load(
            "/assets/lighting.hdr",
            () => {
              hdrEquirect.mapping = EquirectangularReflectionMapping;
            }
        );

        const glass = new MeshPhysicalMaterial({
            transmission: 1,
            thickness: 1.2,
            roughness: 0.01,
            envMap: hdrEquirect,
            envMapIntensity: 4,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
        });
        this.materials.push(glass);
        console.log(this.materials);

        // for (let i = 0; i < this.materials.length - 1; i++) {
        //     this.materials[i] = this.materials[14];
        // }

        let rotorNames = ["Rotor_Num_2", "Rotor_Num_3", "Rotor_Num_4", "Rotor_Num_5"];
        this.machine.traverse((subPart) => {
            let partName = subPart.name;
            if (rotorNames.includes(subPart.name)) {
                this.rotors.push(subPart);
            } else if (partName.length == 2 && partName.substring(0, 1).match(/[A-Z]/i) && partName.charAt(1) === '1') {
                this.keys.push(subPart);
            } else if (partName.match(/[A-Z]Lamp[0-9]*/g)) {
                this.lamps.push(subPart);
                subPart.traverse((lamp) => {
                    if (lamp.material) {
                        lamp.material = this.materials[14];
                    }
                });
            } else if (subPart.material && subPart.material.name.includes("Blue")) {
                subPart.material = this.materials[0];
            } else if (partName.includes("Axles") || partName.includes("BentHigh") || partName.includes("BlockPlate") || partName.includes("Bearing") || partName.includes("ReflectorLever") || partName.includes("ReflectorShaft") || partName.includes("RotorCover") || partName.includes("Trident")) {
                subPart.traverse((holderPart) => {
                    if (holderPart.material) {
                        holderPart.material = this.materials[4];
                    }
                });
            } else if (subPart.name === "KeyToRotorBase") {
                this.basePlate = subPart;
            } else if (subPart.name === "Keyboard") {
                subPart.traverse((keyboardPart) => {
                    if (keyboardPart.material) {
                        keyboardPart.material = this.materials[4];
                    }
                });

                subPart.traverse((keyboardPart) => {
                    if (keyboardPart.name.includes("Keys")) {
                        keyboardPart.traverse((key) => {
                            if (key.material) {
                                key.material = this.materials[1];
                            }
                        });
                    }
                });
            } else if (subPart.name.includes("Pillars")) {
                subPart.traverse((lampboardPart) => {
                    if (lampboardPart.material) {
                        lampboardPart.material = this.materials[3]; //100061_Socket_Bar_v81 100062_Isolator_v41 100049_Flange1
                    }
                });
            } else if (subPart.name === "LampHolder1") {
                subPart.traverse((lampboardPart) => {
                    if (lampboardPart.material) {
                        lampboardPart.material = this.materials[8]; //100061_Socket_Bar_v81 100062_Isolator_v41 100049_Flange1
                    }
                });
            } else if (subPart.name.includes("Patch_Panel")) {
                subPart.traverse((plugboard) => {
                    if (plugboard.material) {
                        plugboard.material = this.materials[4];
                    }
                });
            } else if (partName === "Notch_Ring_4" || partName === "Notch_Ring_5") {
                subPart.children[0].material = this.materials[0];
            } else {
                // do nothing
            }

        });

        this.scene.add(this.machine);
    
        var renderer = new WebGLRenderer({antialias: true, alpha: true});
        renderer.setClearColor(0xFFFFFF, 1);
        renderer.setPixelRatio(window.devicePixelRatio); 
        renderer.setSize(3 * window.innerWidth / 4, 3 * window.innerHeight / 4);
        renderer.outputEncoding = 3001;
        renderer.gammaOutput = true;
        renderer.sortObjects = false;
    
        container.prepend(renderer.domElement);

        this.controls = new OrbitControls(this.camera, renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.update();
    
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        
            renderer.setSize(3 * window.innerWidth / 4, 3 * window.innerHeight / 4);
        }, false);

        setInterval(() => {renderer.render(this.scene, this.camera);}, 1000 / 120);
    }
    
    rotate(rotorNum) {
        let counter = 0;
        const interval = setInterval(() => {
            this.rotors[rotorNum].rotation.z += 0.02013; // 0.2416
            counter += 1;
            if (counter == 12) {
                clearInterval(interval);
            }
        }, 1000 / 30);
    }

    rotorsOpacity() {
        return this.rotorsAreOpaque;
    }
    
    opaqueRotors() {
        this.rotorsAreOpaque = true;
        for (var i = 0; i < this.rotors.length; i++) {
            this.rotors[i].traverse((rotorPart) => {
                if (rotorPart.material && rotorPart.material.name.includes("Blue")) {
                    rotorPart.material = this.materials[0];
                }
            });
        }
    }
    
    transparentRotors() {
        // this.setOpacity(this.machine, 0.2);
        console.log(this.rotors);
        this.rotorsAreOpaque = false;
        for (var i = 0; i < this.rotors.length; i++) {
            this.rotors[i].children[1].traverse((rotorPart) => {
                if (rotorPart.material && rotorPart.material.name.includes("Steel")) {
                    rotorPart.material = this.materials[2];
                }
            });
            this.rotors[i].children[3].traverse((rotorPart) => {
                if (rotorPart.material && rotorPart.material.name.includes("Steel")) {
                    rotorPart.material = this.materials[2];
                }
            });
            this.rotors[i].children[2].children[0].children[0].traverse((rotorPart) => {
                if (rotorPart.material && rotorPart.material.name.includes("Steel")) {
                    rotorPart.material = this.materials[2];
                }
            });
            this.rotors[i].children[2].children[0].children[1].traverse((rotorPart) => {
                if (rotorPart.material && rotorPart.material.name.includes("Steel")) {
                    rotorPart.material = this.materials[2];
                }
            });
            this.rotors[i].children[2].children[0].children[3].traverse((rotorPart) => {
                if (rotorPart.material && rotorPart.material.name.includes("Steel")) {
                    rotorPart.material = this.materials[2];
                }
            });
            this.rotors[i].children[2].children[0].children[9].traverse((rotorPart) => {
                if (rotorPart.material && rotorPart.material.name.includes("Steel")) {
                    rotorPart.material = this.materials[2];
                }
            });
            this.rotors[i].children[0].traverse((rotorPart) => {
                if (rotorPart.material && rotorPart.material.name.includes("Steel")) {
                    rotorPart.material = this.materials[2];
                }
            });
        }
    }

    translate(deltaX, deltaY, deltaZ) {
        this.machine.position.x += deltaX;
        this.machine.position.y += deltaY;
        this.machine.position.z += deltaZ;
    }

    metal() {
        return this.metalness;
    }

    setMetalness(metalness) {
        this.metalness = metalness;
        this.machine.traverse(child => {
            if (child.material && !(child.material.name === "Steel - Satin")) {
                child.material.metalness = metalness;
            }
        });
    }

    setOpacity(object, opacity) {
        object.traverse((child) => {
            if (child.isMesh === true) {
                child.material.transparent = false;
                child.material.opacity = opacity;
            }
        });
    }

    keyPress(keyChar) {
        for (let i = 0; i < this.keys.length; i++) {
            let checkKey = this.keys[i];
            if (checkKey.name.includes(keyChar)) {
                let counter = 0;
                let down = setInterval(() => {
                    checkKey.position.y -= 4;
                    counter += 1;
                    if (counter == 5) {
                        clearInterval(down);
                        this.keyUp(checkKey);
                    }
                }, 1000 / 30);
            }
        }
    }

    keyUp(checkKey) {
        let counter = 0;
        let up = setInterval(() => {
            checkKey.position.y += 4;
            counter += 1;
            if (counter == 5) {
                clearInterval(up);
            }
        }, 1000 / 30);
    }
    
    lampOn(lampNum) {
        for (let i = 0; i < this.lamps.length; i++) {
            let checkLamp = this.lamps[i];
            if (parseInt(checkLamp.name.substring(5)) == lampNum) {
                let counter = 0;
                let on = setInterval(() => {
                    checkLamp.children[0].material = this.materials[13];
                    counter += 1;
                    if (counter == 10) {
                        checkLamp.children[0].material = this.materials[14];
                        clearInterval(on);
                    }
                }, 1000 / 30);
            }
        }
    }

    toggleAxes() {
        if (this.axesShown) {
            this.scene.remove(this.axesHelper);
            this.axesShown = false;
        } else {
            this.scene.add(this.axesHelper);
            this.axesShown = true;
        }
    }

    toggleRainbow() {
        if (this.isRainbow) {
            this.isRainbow = false;
            this.materials[0].color = {r: 0.2, g: 0.5, b: 0.55};
            this.materials[1].color = {r: 0.0, g: 0.64, b: 0.64};
            this.materials[2].color = {r: 0.0, g: 0.3, b: 0.3};
            this.materials[3].color = {r: 0.0, g: 0.15, b: 0.15};
            this.materials[4].color = {r: 0.0, g: 0.36, b: 0.4};
            this.materials[7].color = {r: 0.1, g: 0.10, b: 0.15};
            this.materials[11].color = {r: 0.1, g: 0.10, b: 0.13};
            this.materials[9].color = {r: 0.2, g: 0.6, b: 0.62};
            this.materials[5].color = {r: 0.2, g: 0.6, b: 0.62};
            this.materials[6].color = {r: 0.2, g: 0.6, b: 0.62};
            this.materials[8].color = {r: 0.0, g: 0.36, b: 0.4};;


        } else {
            this.isRainbow = true;
            this.materials[0].color = {r: Math.pow(253/255, 2.2), g: Math.pow(253 / 255, 2.2), b: Math.pow(151 / 255, 2.2)};
            this.materials[1].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};
            this.materials[2].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};
            this.materials[3].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};
            this.materials[4].color = {r: Math.pow(253/255, 2.2), g: Math.pow(253 / 255, 2.2), b: Math.pow(151 / 255, 2.2)};
            this.materials[8].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};
            this.materials[9].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};
            this.materials[5].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};
            this.materials[6].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};
            this.materials[7].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};
            this.materials[11].color = {r: Math.pow(1, 2.2), g: Math.pow(102 / 255, 2.2), b: Math.pow(99 / 255, 2.2)};

            this.materials[4].color = {r: Math.pow(254/255, 2.2), g: Math.pow(177 / 255, 2.2), b: Math.pow(68 / 255, 2.2)};
            this.materials[6].color = {r: Math.pow(253/255, 2.2), g: Math.pow(253 / 255, 2.2), b: Math.pow(151 / 255, 2.2)}
        }
        
        // this.materials[2].color = {r: Math.pow(158/255, 2.2), g: Math.pow(224 / 255, 2.2), b: Math.pow(158 / 255, 2.2)};
        // this.materials[1].color = {r: Math.pow(253/255, 2.2), g: Math.pow(253 / 255, 2.2), b: Math.pow(151 / 255, 2.2)};
        // this.materials[4].color = {r: Math.pow(158/255, 2.2), g: Math.pow(193 / 255, 2.2), b: Math.pow(207 / 255, 2.2)};
        // this.materials[7].color = {r: Math.pow(204/255, 2.2), g: Math.pow(153 / 255, 2.2), b: Math.pow(201 / 255, 2.2)};
    }

    toggleWireframe() {
        if (this.wireframe) {
            for (let i = 0; i < this.materials.length; i++) {
                this.materials[i].wireframe = false;
            }
        } else {
            for (let i = 0; i < this.materials.length; i++) {
                this.materials[i].wireframe = true;
            }
        }
        this.wireframe = !this.wireframe;
    }

    pushPawls() {

    }

    rotateBasePlate() {

        // let counter1 = 0;
        // let interval1 = setInterval(() => {
        //     this.basePlate.rotation.x += 0.02013; // 0.2416
        //     counter1 += 1;
        //     if (counter1 == 120) {
        //         clearInterval(interval1);
        //         let counter2 = 0;
        //         let interval2 = setInterval(() => {
        //             this.basePlate.rotation.x -= 0.02013; // 0.2416
        //             counter2 += 1;
        //             if (counter2 == 120) {
        //                 clearInterval(interval2);
        //             }
        //         }, 1000 / 30);
        //     }
        // }, 1000 / 30);

    }
}

export {Model};