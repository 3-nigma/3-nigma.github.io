import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DRACOLoader.js';
// import {DRACOLoader} from '../node_modules/three/examples/jsm/loaders/DRACOLoader.js';

import {Rotor} from './rotor.js';
import {Machine} from './machine.js';
import {Plugboard} from './plugboard.js';
import {Model} from './model.js';

const draco = new DRACOLoader();
draco.setDecoderPath('../node_modules/three/examples/js/libs/draco/gltf/');
const loader = new GLTFLoader().setDRACOLoader(draco);

// const loader = new GLTFLoader();

var machine;
var myModel;
var myMachine;
loader.load('./models/compressed.gltf', function(gltf) {
    machine = gltf.scene;
    makeMachine();
    myModel = new Model(machine);
    // console.log(myModel.materials[0].color);
    myModel.materials[0].color = {r: 0.2, g: 0.4, b: 0.4};
    console.log(myModel.materials);
    // console.log(myModel.materials[0].fog);
    myModel.materials[0].fog = false;
    myModel.materials[0].metalness = 0;

    myModel.materials[1] = myModel.materials[13];
    myModel.materials[3] = myModel.materials[13];
    myModel.materials[4] = myModel.materials[13];
    
    // myModel.rotate(0);
    // myModel.rotate(1);
    // myModel.rotate(2);
    
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

let metallicButton = document.getElementById("checkbox1");
metallicButton.addEventListener("change", () => {

    if (myModel.metal() == 0.2) {
        myModel.setMetalness(0.8);
    } else {
        myModel.setMetalness(0.2);
    }
});