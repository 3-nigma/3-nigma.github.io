import {AmbientLight} from 'https://cdn.skypack.dev/three@0.129.0/src/lights/AmbientLight.js';
// import {DirectionalLight} from 'https://cdn.skypack.dev/three@0.129.0/src/lights/DirectionalLight.js';
import {PointLight} from 'https://cdn.skypack.dev/three@0.129.0/src/lights/PointLight.js';
import {PerspectiveCamera} from 'https://cdn.skypack.dev/three@0.129.0/src/cameras/PerspectiveCamera.js';
import {Scene} from 'https://cdn.skypack.dev/three@0.129.0/src/scenes/Scene.js';
import {WebGLRenderer} from 'https://cdn.skypack.dev/three@0.129.0/src/renderers/WebGLRenderer.js';
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import {Clock} from 'https://cdn.skypack.dev/three@0.129.0/src/core/Clock.js';
import {AxesHelper} from 'https://cdn.skypack.dev/three@0.129.0/src/helpers/AxesHelper.js';

// rgbencoding

/** Handles the 3D rendering and animation of the machine gltf model. */
class Model {

    /** Define vars for 3D Object subcomponents in the gltf hierarchy. */
    constructor(machine) {
        this.keys = [];
        this.lamps = [];
        this.rotors = [];
        this.rotorNames = [];
        this.pawls = [];
        this.basePlate = null; // key to pawl thingy

        this.materials = [];
        this.materialNames = [];
        this.rotorsAreOpaque = false;
        this.toggleRotate = false;
        this.metalness = 0.2;
        this.axesShown = false;

        var container = document.getElementById("model-canvas");
    
        this.camera = new PerspectiveCamera(3, window.innerWidth / window.innerHeight, 1, 20);
        this.camera.position.set(0, 5, 5);
    
        this.scene = new Scene();
        this.clock = new Clock();

        this.axesHelper = new AxesHelper(5);
    
        const light1 = new PointLight(0x404040, 0.7, 0, 1);
        light1.position.set(0.15, 0.15, 0.5);
        this.camera.add(light1);
        const light2 = new PointLight(0x404040, 0.0, 0, 1);
        light2.position.set(-0.15, 0.15, 0.5);
        this.camera.add(light2);
        const light = new AmbientLight(0x404040, 1);
        this.camera.add(light);
    
        this.scene.add(this.camera);

        this.machine = machine;
        this.translate(0, -0.15, -0.05);
    
        this.setMetalness(this.metalness);

        this.setOpacity(this.machine, 0.95);
    
        this.machine.traverse((object) => {
            if (object.material && !this.materialNames.includes(object.material.name)) {
                this.materials.push(object.material);
                this.materialNames.push(object.material.name);
            }
        });
        console.log(this.materials);

        this.machine.traverse((child) => {
            var partName = child.name;
            if (partName.includes("Rotor_Num_")) {
                let rotorExists = false;
                for (let i = 0; i < this.rotorNames.length; i++) {
                    let checkRotor = this.rotorNames[i].substring(0,11);
                    if (checkRotor === partName.substring(0,11)) {
                        rotorExists = true;
                        break;
                    }
                }
                
                if (!rotorExists) {
                    this.rotors.push(child);
                    this.rotorNames.push(child.name);
                }
            }

            if (partName === "Notch_Ring_4" || partName === "Notch_Ring_5") {
                child.children[0].material = this.materials[0];
            }

            if (partName.length == 2 && partName.substring(0, 1).match(/[A-Z]/i) && partName.charAt(1) === '1') {
                this.keys.push(child);
            }

            if (partName.includes("ALamp") || partName.includes("BLamp")) {
                if (!partName.includes("0")) {
                    this.lamps.push(child);
                }
            }
        });

        this.scene.add(this.machine);
    
        var renderer = new WebGLRenderer({antialias: true, alpha: true});
        renderer.setClearColor(0xFFFFFF, 1);
        renderer.setPixelRatio(window.devicePixelRatio); 
        renderer.setSize(2 * window.innerWidth / 3, 2 * window.innerHeight / 3);
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
        
            renderer.setSize(2 * window.innerWidth / 3, 2 * window.innerHeight / 3);
        }, false);

        setInterval(() => {renderer.render(this.scene, this.camera);}, 1000 / 120);
    }
    
    rotate(rotorNum) {
        var counter = 0;
        var interval = setInterval(() => {
            this.rotors[rotorNum].rotation.z += 0.02; // 0.2416
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
        this.rotorsAreOpaque = false;
        for (var i = 0; i < this.rotors.length; i++) {
            this.rotors[i].traverse((rotorPart) => {
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
            if (child.material) {
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
                    checkLamp.children[0].children[0].material.color = {r: 10, g: 10, b: 10};
                    counter += 1;
                    if (counter == 5) {
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

    pushPawls() {

    }

    rotateBasePlate() {

    }
}

export {Model};