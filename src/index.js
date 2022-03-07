import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DRACOLoader.js';
// import {DRACOLoader} from '../node_modules/three/examples/jsm/loaders/DRACOLoader.js';

import {Rotor} from './rotor.js';
import {Machine} from './machine.js';
import {Plugboard} from './plugboard.js';
import {Model} from './model.js';

const draco = new DRACOLoader();
// draco.setDecoderPath('../node_modules/three/examples/js/libs/draco/gltf/');
draco.setDecoderConfig({ type: 'js' });
// draco.setDecoderPath('https://unpkg.com/three@0.114.0/examples/js/libs/draco/');
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

const loader = new GLTFLoader().setDRACOLoader(draco);

var machine;
var myModel;
var myMachine;
loader.load('./models/enigmaModel.gltf', function(gltf) {
    machine = gltf.scene;
    makeMachine();
    myModel = new Model(machine);
    myModel.materials[0].color = {r: 0.2, g: 0.5, b: 0.55};
    myModel.materials[1].color = {r: 0.0, g: 0.64, b: 0.64};
    myModel.materials[2].color = {r: 0.0, g: 0.3, b: 0.3};
    myModel.materials[3].color = {r: 0.0, g: 0.15, b: 0.15};
    myModel.materials[4].color = {r: 0.0, g: 0.36, b: 0.4};
    myModel.materials[7].color = {r: 0.1, g: 0.10, b: 0.15};
    myModel.materials[8].color = {r: 0.2, g: 0.6, b: 0.6};
    myModel.materials[11].color = {r: 0.1, g: 0.10, b: 0.13};

    // myModel.materials[0].color.setHex(0xFF6663);

    myModel.materials[0].fog = false;
    myModel.materials[0].metalness = 0;

    // myModel.materials[1] = myModel.materials[13];
    // myModel.materials[3] = myModel.materials[13];
    // myModel.materials[4] = myModel.materials[13];
    
});

function makeMachine() {
    var movingI = new Rotor("I");
    var movingII = new Rotor("II");
    var movingIII = new Rotor("III");
    var movingIV = new Rotor("IV");
    var fixedBeta = new Rotor("Beta");
    var fixedGamma = new Rotor("Gamma");
    var reflectorB = new Rotor("B");
    var reflectorC = new Rotor("C");

    var allRotors = [movingI, movingII, movingIII, movingIV, fixedBeta, fixedGamma, reflectorB, reflectorC];
    var emptyPlugboard = new Plugboard();

    myMachine = new Machine(allRotors, 5, 3, emptyPlugboard);
    var rotorSetup = ["B", "Beta", "I", "II", "III"];
    myMachine.insertRotors(rotorSetup);
    var rotorSettings = "AAAA";
    myMachine.setRotors(rotorSettings);

    // myMachine.plugboardSwap("A", "Q");
    // myMachine.plugboardSwap("E", "P");
    // var encrypted = myMachine.encryptMsg("HELLOWORLD");
    // console.log(encrypted);
    // myMachine.setRotors("AAAA");
    // var decrypted = myMachine.encryptMsg(encrypted);
    // console.log(decrypted);

}

var allowed = true;

document.addEventListener('keydown', keyDown);
function keyDown(e) {
    if (event.repeat != undefined) {
        allowed = !event.repeat;
    }
    if (!allowed) return;
    allowed = false;
    var charCode = event.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
        let charInput = e.code.charAt(3);
        let charOutput = myMachine.encryptChar(charInput, myModel);
    }
}

document.addEventListener('keyup', keyUp);
function keyUp(e) {
    allowed = false;
}

let opaqueButton = document.getElementById("checkbox2");
opaqueButton.addEventListener("change", () => {

    if (myModel.rotorsOpacity()) {
        myModel.transparentRotors();
    } else {
        myModel.opaqueRotors();
    }
});

/* <div class="checkbox">
<input type="checkbox" id="checkbox1">
<label for="checkbox1">Metallic</label>
</div> */

let metallicButton = document.getElementById("checkbox1");
metallicButton.addEventListener("change", () => {

    if (myModel.metal() == 0.2) {
        myModel.setMetalness(0.8);
    } else {
        myModel.setMetalness(0.2);
    }
})

let axesCheckBox = document.getElementById("checkbox4");
axesCheckBox.addEventListener("change", () => {
    myModel.toggleAxes();
});

let rainbowCheckBox = document.getElementById("checkbox3");
rainbowCheckBox.addEventListener("change", () => {
    myModel.toggleRainbow();
});

let wireframeCheckBox = document.getElementById("checkbox5");
wireframeCheckBox.addEventListener("change", () => {
    myModel.toggleWireframe();
});