/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js":
false,

/***/ "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DRACOLoader.js":
false,

/***/ "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js":
false,

/***/ "https://cdn.skypack.dev/three@0.129.0/src/cameras/PerspectiveCamera.js":
false,

/***/ "https://cdn.skypack.dev/three@0.129.0/src/core/Clock.js":
false,

/***/ "https://cdn.skypack.dev/three@0.129.0/src/lights/AmbientLight.js":
false,

/***/ "https://cdn.skypack.dev/three@0.129.0/src/lights/PointLight.js":
false,

/***/ "https://cdn.skypack.dev/three@0.129.0/src/renderers/WebGLRenderer.js":
false,

/***/ "https://cdn.skypack.dev/three@0.129.0/src/scenes/Scene.js":
false,

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js */ \"https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DRACOLoader.js */ \"https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DRACOLoader.js\");\n/* harmony import */ var _rotor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rotor.js */ \"./src/rotor.js\");\n/* harmony import */ var _machine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./machine.js */ \"./src/machine.js\");\n/* harmony import */ var _plugboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugboard.js */ \"./src/plugboard.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_skypack_dev_three_0_129_0_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_0__, https_cdn_skypack_dev_three_0_129_0_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_1__, _model_js__WEBPACK_IMPORTED_MODULE_5__]);\n([https_cdn_skypack_dev_three_0_129_0_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_0__, https_cdn_skypack_dev_three_0_129_0_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_1__, _model_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// import {DRACOLoader} from '../node_modules/three/examples/jsm/loaders/DRACOLoader.js';\n\n\n\n\n\n\nconst draco = new https_cdn_skypack_dev_three_0_129_0_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_1__.DRACOLoader();\ndraco.setDecoderPath('https://cdn.skypack.dev/three@0.129.0/three/examples/js/libs/draco/gltf/');\nconst loader = new https_cdn_skypack_dev_three_0_129_0_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader().setDRACOLoader(draco);\n\nvar machine;\nvar myModel;\nvar myMachine;\nloader.load('./models/compressed.gltf', function(gltf) {\n    machine = gltf.scene;\n    makeMachine();\n    myModel = new _model_js__WEBPACK_IMPORTED_MODULE_5__.Model(machine);\n    // console.log(myModel.materials[0].color);\n    myModel.materials[0].color = {r: 0.2, g: 0.4, b: 0.4};\n    console.log(myModel.materials);\n    // console.log(myModel.materials[0].fog);\n    myModel.materials[0].fog = false;\n    myModel.materials[0].metalness = 0;\n\n    myModel.materials[1] = myModel.materials[13];\n    myModel.materials[3] = myModel.materials[13];\n    myModel.materials[4] = myModel.materials[13];\n    \n    // myModel.rotate(0);\n    // myModel.rotate(1);\n    // myModel.rotate(2);\n    \n});\n\nfunction makeMachine() {\n    var movingI = new _rotor_js__WEBPACK_IMPORTED_MODULE_2__.Rotor(\"I\");\n    var movingII = new _rotor_js__WEBPACK_IMPORTED_MODULE_2__.Rotor(\"II\");\n    var movingIII = new _rotor_js__WEBPACK_IMPORTED_MODULE_2__.Rotor(\"III\");\n    var movingIV = new _rotor_js__WEBPACK_IMPORTED_MODULE_2__.Rotor(\"IV\");\n    var fixedBeta = new _rotor_js__WEBPACK_IMPORTED_MODULE_2__.Rotor(\"Beta\");\n    var fixedGamma = new _rotor_js__WEBPACK_IMPORTED_MODULE_2__.Rotor(\"Gamma\");\n    var reflectorB = new _rotor_js__WEBPACK_IMPORTED_MODULE_2__.Rotor(\"B\");\n    var reflectorC = new _rotor_js__WEBPACK_IMPORTED_MODULE_2__.Rotor(\"C\");\n\n    var allRotors = [movingI, movingII, movingIII, movingIV, fixedBeta, fixedGamma, reflectorB, reflectorC];\n    var emptyPlugboard = new _plugboard_js__WEBPACK_IMPORTED_MODULE_4__.Plugboard();\n\n    myMachine = new _machine_js__WEBPACK_IMPORTED_MODULE_3__.Machine(allRotors, 5, 3, emptyPlugboard);\n    var rotorSetup = [\"B\", \"Beta\", \"I\", \"II\", \"III\"];\n    myMachine.insertRotors(rotorSetup);\n    var rotorSettings = \"AAAA\";\n    myMachine.setRotors(rotorSettings);\n\n    // myMachine.plugboardSwap(\"A\", \"Q\");\n    // myMachine.plugboardSwap(\"E\", \"P\");\n    // var encrypted = myMachine.encryptMsg(\"HELLOWORLD\");\n    // console.log(encrypted);\n    // myMachine.setRotors(\"AAAA\");\n    // var decrypted = myMachine.encryptMsg(encrypted);\n    // console.log(decrypted);\n\n}\n\nvar allowed = true;\n\ndocument.addEventListener('keydown', keyDown);\nfunction keyDown(e) {\n    if (event.repeat != undefined) {\n        allowed = !event.repeat;\n    }\n    if (!allowed) return;\n    allowed = false;\n    var charCode = event.keyCode;\n    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {\n        let charInput = e.code.charAt(3);\n        let charOutput = myMachine.encryptChar(charInput, myModel);\n    }\n}\n\ndocument.addEventListener('keyup', keyUp);\nfunction keyUp(e) {\n    allowed = false;\n}\n\nlet opaqueButton = document.getElementById(\"checkbox2\");\nopaqueButton.addEventListener(\"change\", () => {\n\n    if (myModel.rotorsOpacity()) {\n        myModel.transparentRotors();\n    } else {\n        myModel.opaqueRotors();\n    }\n});\n\nlet metallicButton = document.getElementById(\"checkbox1\");\nmetallicButton.addEventListener(\"change\", () => {\n\n    if (myModel.metal() == 0.2) {\n        myModel.setMetalness(0.8);\n    } else {\n        myModel.setMetalness(0.2);\n    }\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://enigma/./src/index.js?");

/***/ }),

/***/ "./src/machine.js":
/*!************************!*\
  !*** ./src/machine.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Machine\": () => (/* binding */ Machine)\n/* harmony export */ });\n/* harmony import */ var _rotor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotor.js */ \"./src/rotor.js\");\n\n\n/** Represents a complete functional Enigma machine. */\nclass Machine {\n\n    /** A new Enigma machine with NUMROTORS rotor slots and empty plugboard, ALLROTORS contains all available rotors. */\n    constructor(allRotors, numRotors, numPawls, plugboard) {\n        this.allRotors = allRotors;\n        this.numRotors = numRotors;\n        this.numPawls = numPawls;\n        this.plugboard = plugboard;\n        this.myRotors = [];\n    }\n\n    /** Set my rotor slots from my set of available rotors. */\n    insertRotors(rotorNames) {\n        for (var i = 0; i < this.numRotors; i++) {\n            var foundRotor = false;\n            for (var checkName of this.allRotors) {\n                if (rotorNames[i] === checkName.getName()) {\n                    this.myRotors[i] = checkName;\n                    foundRotor = true;\n                }\n                for (var j = 0; j < i; j++) {\n                    if (rotorNames[i] === rotorNames[j]) {\n                        console.log(\"Duplicate rotor name\");\n                    }\n                }\n            }\n            if (!foundRotor) {\n                console.log(\"Bad rotor name\");\n            }\n        }\n    }\n\n    /** Set the initial settings of my rotors according to string SETTING */\n    setRotors(setting) {\n        for (var i = 1; i < this.numRotors; i++) {\n            var charPos = setting.charAt(i - 1);\n            var intPos = _rotor_js__WEBPACK_IMPORTED_MODULE_0__.alphabet.indexOf(charPos);\n            this.myRotors[i].setSetting(intPos);\n        }\n    }\n\n    /** Create a plugboard hotswap for this machine. */\n    plugboardSwap(char1, char2) {\n        this.plugboard.makeSwap(char1, char2);\n    }\n\n    /** Before a key press input is fed through the rotors, advance moving rotors if conditions allow. */\n    makeRotations(model) {\n        var willRotate = [];\n        for (var i = 0; i < this.numRotors; i++) {\n            willRotate.push(false);\n        }\n\n        for (var i = 1; i < this.numRotors; i++) {\n            if (this.myRotors[i].rotates()) {\n                if (i == this.numRotors - 1) {\n                    willRotate[i] = true;\n                } else {\n                    if (this.myRotors[i + 1].atNotch()) {\n                        willRotate[i] = true;\n                        willRotate[i + 1] = true;\n                    }\n                }\n            }\n        }\n\n        for (var i = 1; i < this.numRotors; i++) {\n            if (willRotate[i]) {\n                this.myRotors[i].advance();\n                model.rotate(i - 1);\n            }\n        }\n    }\n\n    /** Encrypts a single input character C, represented as either a CHAR or INT. */\n    encryptChar(c, model) {\n        let steps = [c];\n\n        let inputChar = c;\n\n        model.keyPress(c);\n\n        this.makeRotations(model);\n\n        c = this.plugboard.permute(c);\n\n        for (var i = this.numRotors - 1; i >= 0; i--) {\n            c = this.myRotors[i].permute(c);\n            steps.push(c);\n        }\n        for (var i = 1; i < this.numRotors; i++) {\n            c = this.myRotors[i].invert(c);\n            steps.push(c);\n        }\n\n        c = this.plugboard.permute(c);\n\n        let lampChar = this.myRotors[0].toInt(c);\n        model.lampOn(lampChar);\n\n        addRow(steps);\n        addText(steps);\n\n        return c;\n    }\n\n    /** Returns the encoding / decoding of MSG, updating the state of the rotors accordingly. */\n    encryptMsg(msg) {\n        var encrypted = \"\";\n        for (var i = 0; i < msg.length; i++) {\n            if (msg.charAt(i) === \"\\n\") {\n                encrypted += \"\\n\";\n            } else {\n                var currChar = msg.charAt(i);\n                var encryptedChar = this.encryptChar(currChar, null);\n                encrypted += encryptedChar;\n            }\n        }\n\n        return encrypted;\n    }\n\n}\n\n\n\n//# sourceURL=webpack://enigma/./src/machine.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Model\": () => (/* binding */ Model)\n/* harmony export */ });\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_src_lights_AmbientLight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/src/lights/AmbientLight.js */ \"https://cdn.skypack.dev/three@0.129.0/src/lights/AmbientLight.js\");\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_src_lights_PointLight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/src/lights/PointLight.js */ \"https://cdn.skypack.dev/three@0.129.0/src/lights/PointLight.js\");\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_src_cameras_PerspectiveCamera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/src/cameras/PerspectiveCamera.js */ \"https://cdn.skypack.dev/three@0.129.0/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_src_scenes_Scene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/src/scenes/Scene.js */ \"https://cdn.skypack.dev/three@0.129.0/src/scenes/Scene.js\");\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_src_renderers_WebGLRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/src/renderers/WebGLRenderer.js */ \"https://cdn.skypack.dev/three@0.129.0/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js */ \"https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var https_cdn_skypack_dev_three_0_129_0_src_core_Clock_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.129.0/src/core/Clock.js */ \"https://cdn.skypack.dev/three@0.129.0/src/core/Clock.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_skypack_dev_three_0_129_0_src_lights_AmbientLight_js__WEBPACK_IMPORTED_MODULE_0__, https_cdn_skypack_dev_three_0_129_0_src_lights_PointLight_js__WEBPACK_IMPORTED_MODULE_1__, https_cdn_skypack_dev_three_0_129_0_src_cameras_PerspectiveCamera_js__WEBPACK_IMPORTED_MODULE_2__, https_cdn_skypack_dev_three_0_129_0_src_scenes_Scene_js__WEBPACK_IMPORTED_MODULE_3__, https_cdn_skypack_dev_three_0_129_0_src_renderers_WebGLRenderer_js__WEBPACK_IMPORTED_MODULE_4__, https_cdn_skypack_dev_three_0_129_0_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_5__, https_cdn_skypack_dev_three_0_129_0_src_core_Clock_js__WEBPACK_IMPORTED_MODULE_6__]);\n([https_cdn_skypack_dev_three_0_129_0_src_lights_AmbientLight_js__WEBPACK_IMPORTED_MODULE_0__, https_cdn_skypack_dev_three_0_129_0_src_lights_PointLight_js__WEBPACK_IMPORTED_MODULE_1__, https_cdn_skypack_dev_three_0_129_0_src_cameras_PerspectiveCamera_js__WEBPACK_IMPORTED_MODULE_2__, https_cdn_skypack_dev_three_0_129_0_src_scenes_Scene_js__WEBPACK_IMPORTED_MODULE_3__, https_cdn_skypack_dev_three_0_129_0_src_renderers_WebGLRenderer_js__WEBPACK_IMPORTED_MODULE_4__, https_cdn_skypack_dev_three_0_129_0_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_5__, https_cdn_skypack_dev_three_0_129_0_src_core_Clock_js__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n// import {DirectionalLight} from 'https://cdn.skypack.dev/three@0.129.0/src/lights/DirectionalLight.js';\n\n\n\n\n\n\n\n// import AmbientLight from '../node_modules/three/src/lights/AmbientLight.js';\n// import AxesHelper from '../node_modules/three/src/helpers/AxesHelper.js';\n// import DirectionalLight from '../node_modules/three/src/lights/DirectionalLight.js';\n// import PointLight from '../node_modules/three/src/lights/PointLight.js';\n// import PerspectiveCamera from '../node_modules/three/src/cameras/PerspectiveCamera.js';\n// import Scene from '../node_modules/three/src/scenes/Scene.js';\n// import WebGLRenderer from '../node_modules/three/src/renderers/WebGLRenderer.js';\n// import OrbitControls from '../node_modules/three/examples/jsm/controls/OrbitControls.js';\n// import Clock from '../node_modules/three/src/core/Clock.js';\n\n// rgbencoding\n\n/** Handles the 3D rendering and animation of the machine gltf model. */\nclass Model {\n\n    /** Define vars for 3D Object subcomponents in the gltf hierarchy. */\n    constructor(machine) {\n        this.keys = [];\n        this.lamps = [];\n        this.rotors = [];\n        this.rotorNames = [];\n        this.pawls = [];\n        this.basePlate = null; // key to pawl thingy\n\n        this.materials = [];\n        this.materialNames = [];\n        this.rotorsAreOpaque = false;\n        this.toggleRotate = false;\n        this.metalness = 0.2\n\n        var container = document.getElementById(\"model-canvas\");\n    \n        this.camera = new https_cdn_skypack_dev_three_0_129_0_src_cameras_PerspectiveCamera_js__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(3, window.innerWidth / window.innerHeight, 1, 20);\n        this.camera.position.set(0, 5, 5);\n    \n        this.scene = new https_cdn_skypack_dev_three_0_129_0_src_scenes_Scene_js__WEBPACK_IMPORTED_MODULE_3__.Scene();\n        this.clock = new https_cdn_skypack_dev_three_0_129_0_src_core_Clock_js__WEBPACK_IMPORTED_MODULE_6__.Clock();\n    \n        const light1 = new https_cdn_skypack_dev_three_0_129_0_src_lights_PointLight_js__WEBPACK_IMPORTED_MODULE_1__.PointLight(0x404040, 0.7, 0, 1);\n        light1.position.set(0.15, 0.15, 0.5);\n        this.camera.add(light1);\n        const light2 = new https_cdn_skypack_dev_three_0_129_0_src_lights_PointLight_js__WEBPACK_IMPORTED_MODULE_1__.PointLight(0x404040, 0.0, 0, 1);\n        light2.position.set(-0.15, 0.15, 0.5);\n        this.camera.add(light2);\n        const light = new https_cdn_skypack_dev_three_0_129_0_src_lights_AmbientLight_js__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0x404040, 1);\n        this.camera.add(light);\n    \n        this.scene.add(this.camera);\n        // this.scene.add(new AxesHelper(5));\n\n        this.machine = machine;\n        console.log(this.machine);\n        this.translate(0, -0.15, -0.05);\n    \n        this.setMetalness(this.metalness);\n\n        this.setOpacity(this.machine, 1);\n    \n        this.machine.traverse((object) => {\n            if (object.material && !this.materialNames.includes(object.material.name)) {\n                this.materials.push(object.material);\n                this.materialNames.push(object.material.name);\n            }\n        });\n\n        this.machine.traverse((child) => {\n            var partName = child.name;\n            // if (partName.includes(\"Roll\") && partName.includes(\"Assembly\") && !partName.includes(\"Retainer\")) {\n            if (partName.includes(\"Rotor_Num_\")) {\n                let rotorExists = false;\n                for (let i = 0; i < this.rotorNames.length; i++) {\n                    let checkRotor = this.rotorNames[i].substring(0,11);\n                    if (checkRotor === partName.substring(0,11)) {\n                        rotorExists = true;\n                        break;\n                    }\n                }\n                \n                if (!rotorExists) {\n                    this.rotors.push(child);\n                    this.rotorNames.push(child.name);\n                }\n            }\n\n            if (partName === \"Notch_Ring_4\" || partName === \"Notch_Ring_5\") {\n                child.children[0].material = this.materials[0];\n            }\n\n            if (partName.length == 2 && partName.substring(0, 1).match(/[A-Z]/i) && partName.charAt(1) === '1') {\n                this.keys.push(child);\n            }\n\n            if (partName.includes(\"ALamp\") || partName.includes(\"BLamp\")) {\n                if (!partName.includes(\"0\")) {\n                    this.lamps.push(child);\n                }\n            }\n        });\n        console.log(this.rotors);\n        console.log(this.keys);\n        console.log(this.lamps);\n\n        // this.machine.position.x -= 0.08;\n        // this.machine.position.z -= 0.06;\n\n        // this.mixer = new AnimationMixer(this.machine);\n\n        this.scene.add(this.machine);\n    \n        var renderer = new https_cdn_skypack_dev_three_0_129_0_src_renderers_WebGLRenderer_js__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({antialias: true, alpha: true});\n        // renderer.setClearColor(0x88D1F1, 1);\n        renderer.setClearColor(0xFFFFFF, 1);\n        renderer.setPixelRatio(window.devicePixelRatio); \n        renderer.setSize(2 * window.innerWidth / 3, 2 * window.innerHeight / 3);\n        renderer.outputEncoding = 3001;\n        renderer.gammaOutput = true;\n        renderer.sortObjects = false;\n    \n        container.prepend(renderer.domElement);\n\n        this.controls = new https_cdn_skypack_dev_three_0_129_0_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(this.camera, renderer.domElement);\n        this.controls.target.set(0, 0, 0);\n        this.controls.update();\n    \n        window.addEventListener('resize', () => {\n            this.camera.aspect = window.innerWidth / window.innerHeight;\n            this.camera.updateProjectionMatrix();\n        \n            renderer.setSize(2 * window.innerWidth / 3, 2 * window.innerHeight / 3);\n        }, false);\n\n        setInterval(() => {renderer.render(this.scene, this.camera);}, 1000 / 120);\n    }\n    \n    rotate(rotorNum) {\n        var counter = 0;\n        var interval = setInterval(() => {\n            this.rotors[rotorNum].rotation.z += 0.02; // 0.2416\n            counter += 1;\n            if (counter == 12) {\n                clearInterval(interval);\n            }\n        }, 1000 / 30);\n    }\n\n    rotorsOpacity() {\n        return this.rotorsAreOpaque;\n    }\n    \n    opaqueRotors() {\n        this.setOpacity(this.machine, 1);\n        this.rotorsAreOpaque = true;\n        // for (var i = 0; i < this.rotors.length; i++) {\n        //     this.rotors[i].traverse((rotorPart) => {\n        //         if (rotorPart.material) {\n        //             rotorPart.material = this.materials[7];\n        //         }\n        //     });\n        // }\n    }\n    \n    transparentRotors() {\n        this.setOpacity(this.machine, 0.2);\n        this.rotorsAreOpaque = false;\n        // for (var i = 0; i < this.rotors.length; i++) {\n        //     this.rotors[i].traverse((rotorPart) => {\n        //         if (rotorPart.material && rotorPart.material.name.includes(\"246\")) {\n        //             rotorPart.material = this.materials[5];\n        //         }\n        //     });\n        // }\n    }\n\n    translate(deltaX, deltaY, deltaZ) {\n        this.machine.position.x += deltaX;\n        this.machine.position.y += deltaY;\n        this.machine.position.z += deltaZ;\n    }\n\n    metal() {\n        return this.metalness;\n    }\n\n    setMetalness(metalness) {\n        this.metalness = metalness;\n        this.machine.traverse(child => {\n            if (child.material) {\n                child.material.metalness = metalness;\n            }\n        });\n    }\n\n    setOpacity(object, opacity) {\n        object.traverse((child) => {\n            if (child.isMesh === true) {\n                child.material.transparent = false;\n                child.material.opacity = opacity;\n            }\n        });\n    }\n\n    keyPress(keyChar) {\n        for (let i = 0; i < this.keys.length; i++) {\n            let checkKey = this.keys[i];\n            if (checkKey.name.includes(keyChar)) {\n                let counter = 0;\n                let down = setInterval(() => {\n                    checkKey.position.y -= 4;\n                    counter += 1;\n                    if (counter == 5) {\n                        clearInterval(down);\n                        this.keyUp(checkKey);\n                    }\n                }, 1000 / 30);\n            }\n        }\n    }\n\n    keyUp(checkKey) {\n        let counter = 0;\n        let up = setInterval(() => {\n            checkKey.position.y += 4;\n            counter += 1;\n            if (counter == 5) {\n                clearInterval(up);\n            }\n        }, 1000 / 30);\n    }\n    \n    lampOn(lampNum) {\n        for (let i = 0; i < this.lamps.length; i++) {\n            let checkLamp = this.lamps[i];\n            if (parseInt(checkLamp.name.substring(5)) == lampNum) {\n                let counter = 0;\n                let on = setInterval(() => {\n                    checkLamp.children[0].children[0].material.color = {r: 10, g: 10, b: 10};\n                    counter += 1;\n                    if (counter == 5) {\n                        clearInterval(on);\n                    }\n                }, 1000 / 30);\n            }\n        }\n    }\n}\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://enigma/./src/model.js?");

/***/ }),

/***/ "./src/plugboard.js":
/*!**************************!*\
  !*** ./src/plugboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Plugboard\": () => (/* binding */ Plugboard)\n/* harmony export */ });\n/* harmony import */ var _rotor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotor.js */ \"./src/rotor.js\");\n\n\n/** Models the char hotswapping behavior of the plugboard */\nclass Plugboard {\n\n    /** Selects rotor by NAME, retrieves its substitution mapping, and sets up rotational positions. */\n    constructor() {\n        this.swaps = _rotor_js__WEBPACK_IMPORTED_MODULE_0__.alphabet;\n    }\n\n    /** Sets up the plugboard permutations based on given SWAPSSTRING. */\n    makeSwap(char1, char2) {\n        var char1Int = this.toInt(char1);\n        var char2Int = this.toInt(char2);\n\n        this.swaps = this.replaceChar(this.swaps, char1Int, char2);\n        this.swaps = this.replaceChar(this.swaps, char2Int, char1);        \n    }\n\n    /** Replaces the char at position INDEX in STR with REPLACECHAR. */\n    replaceChar(str, index, replaceChar) {\n        return str.substr(0, index) + replaceChar + str.substr(index + 1);\n    }\n\n    /** Returns the index of CHAR in the alphabet. */\n    toInt(char) {\n        return _rotor_js__WEBPACK_IMPORTED_MODULE_0__.alphabet.indexOf(char);\n    }\n\n    /** Returns character number INDEX in the alphabet. */\n    toChar(index) {\n        return _rotor_js__WEBPACK_IMPORTED_MODULE_0__.alphabet.charAt(index);\n    }\n\n    /** Make the character swap if plugboard swap exists, otherwise return same char. */\n    permute(char) {\n        if (typeof char === \"string\") {\n            var alphaIndex = this.toInt(char);\n            var swappedChar = this.swaps.charAt(alphaIndex);\n            return swappedChar;\n        } else {\n            var swappedChar = this.swaps.charAt(char);\n            var swappedIndex = this.toInt(swappedChar);\n            return swappedIndex;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://enigma/./src/plugboard.js?");

/***/ }),

/***/ "./src/rotor.js":
/*!**********************!*\
  !*** ./src/rotor.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rotorWirings\": () => (/* binding */ rotorWirings),\n/* harmony export */   \"rotorNotches\": () => (/* binding */ rotorNotches),\n/* harmony export */   \"alphabet\": () => (/* binding */ alphabet),\n/* harmony export */   \"Rotor\": () => (/* binding */ Rotor)\n/* harmony export */ });\nvar rotorWirings = {\n    \"I\": \"EKMFLGDQVZNTOWYHXUSPAIBRCJ\",\n    \"II\": \"AJDKSIRUXBLHWTMCQGZNPYFVOE\",\n    \"III\": \"BDFHJLCPRTXVZNYEIWGAKMUSQO\",\n    \"IV\": \"ESOVPZJAYQUIRHXLNFTGKDCMWB\",\n    \"V\": \"VZBRGITYUPSDNHLXAWMJQOFECK\",\n    \"VI\": \"VZBRGITYUPSDNHLXAWMJQOFECK\",\n    \"VII\": \"NZJHGRCXMYSWBOUFAIVLPEKQDT\",\n    \"VIII\": \"FKQHTLXOCBJSPDZRAMEWNIUYGV\",\n    \"Beta\": \"LEYJVCNIXWPBQMDRTAKZGFUHOS\",\n    \"Gamma\": \"FSOKANUERHMBTIYCWLQPZXVGJD\",\n    \"B\": \"ENKQAUYWJICOPBLMDXZVFTHRGS\",\n    \"C\": \"RDOBJNTKVEHMLFCWZAXGYIPSUQ\"\n};\n\nvar rotorNotches = {\n    \"I\": \"Q\",\n    \"II\": \"E\",\n    \"III\": \"V\",\n    \"IV\": \"J\",\n    \"V\": \"Z\",\n    \"VI\": \"ZM\",\n    \"VII\": \"ZM\",\n    \"VIII\": \"ZM\",\n    \"Beta\": \"\",\n    \"Gamma\": \"\",\n    \"B\": \"\",\n    \"C\": \"\"\n};\n\nvar alphabet = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n\n/** Models the encrypting behavior of the moving rotors, fixed rotors, and reflector. */\nclass Rotor {\n\n    /** Selects rotor by NAME, retrieves its substitution mapping, and sets up rotational positions. */\n    constructor(name) {\n        this.name = name;\n        this.permutation = rotorWirings[name];\n        this.notches = rotorNotches[name];\n        this.setting = 0;\n        this.ringstellung = 0;\n    }\n\n    /** Returns the index of CHAR in the alphabet. */\n    toInt(char) {\n        return alphabet.indexOf(char);\n    }\n\n    /** Returns character number INDEX in the alphabet. */\n    toChar(index) {\n        return alphabet.charAt(index);\n    }\n\n    /** Right contact to left contact substitution, handles char and int inputs. */\n    substituteForward(char) {\n        if (typeof char === \"string\") {\n            var alphaIndex = this.toInt(char);\n            var substitutedChar = this.permutation.charAt(alphaIndex);\n            return substitutedChar;\n        } else {\n            var substitutedChar = this.permutation.charAt(char);\n            var substitutedIndex = this.toInt(substitutedChar);\n            return substitutedIndex;\n        }\n    }\n\n    /** Left contact to right contact reverse substitution, handles char and int inputs. */\n    substituteBackward(char) {\n        if (typeof char === \"string\") {\n            var leftIndex = this.permutation.indexOf(char);\n            var reversedChar = alphabet.charAt(leftIndex);\n            return reversedChar;\n        } else {\n            var alphaChar = this.toChar(char);\n            var leftIndex = this.permutation.indexOf(alphaChar);\n            var reversedChar = alphabet.charAt(leftIndex);\n            var reversedIndex = this.toInt(reversedChar);\n            return reversedIndex;\n        }\n    }\n\n    /** Turn the alphabet ring to int position RINGSETTING. */\n    setRing(ringSetting) {\n        if (typeof ringSetting === \"number\") {\n            this.ringstellung = ringSetting;\n        } else {\n            var pos = this.toInt(ringSetting);\n            this.ringstellung = pos;\n        }\n    }\n\n    /** Turn the entire rotor to int position POSITION. */\n    setSetting(position) {\n        if (typeof position === \"number\") {\n            this.setting = position;\n        } else {\n            var intPos = this.toInt(position);\n            this.setting = intPos;\n        }\n    }\n\n    /** Returns true for rotors I - VIII and false for fixed rotors and reflectors. */\n    rotates() {\n        return this.name.includes(\"I\") || this.name.includes(\"V\");\n    }\n\n    /** Complete right to left rotor encryption of a char represented as an INT. */\n    permute(pos) {\n        var inputIsString = false;\n        if (typeof pos === \"string\") {\n            inputIsString = true;\n            pos = this.toInt(pos);\n        }\n\n        var contactEntered = (pos + this.setting - this.ringstellung + 26) % 26;\n        var contactExited = this.substituteForward(contactEntered);\n        var posExit = (contactExited - this.setting + this.ringstellung + 26) % 26;\n\n        if (!inputIsString) {\n            return posExit;\n        } else {\n            var char = this.toChar(posExit);\n            return char;\n        }\n    }\n\n    /** Complete left to right rotor reverse encryption of a char represented as an INT. */\n    invert(pos) {\n        var inputIsString = false;\n        if (typeof pos === \"string\") {\n            inputIsString = true;\n            pos = this.toInt(pos);\n        }\n\n        var contactEntered = (pos + this.setting - this.ringstellung + 26) % 26;\n        var contactExited = this.substituteBackward(contactEntered);\n        var posExit = (contactExited - this.setting + this.ringstellung + 26) % 26;\n\n        if (!inputIsString) {\n            return posExit;\n        } else {\n            var char = this.toChar(posExit);\n            return char;\n        }\n    }\n\n    /** Return true iff I am positioned to allow the rotor to my left to advance. */\n    atNotch() {\n        if (!this.rotates()) {\n            console.log(\"This method should not be called on a fixed rotor or reflector.\");\n        } else {\n            var rotorCharSetting = this.toChar(this.setting);\n            var atNotch = this.notches.indexOf(rotorCharSetting) != -1;\n            return atNotch;\n        }\n    }\n\n    /** Advance my setting one position, conditions for stepping handled by machine. */\n    advance() {\n        if (!this.rotates()) {\n            console.log(\"This method should not be called on a fixed rotor or reflector.\");\n        } else {\n            var currSetting = this.setting;\n            var newSetting = (currSetting + 1) % 26;\n            this.setSetting(newSetting);\n        }\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    /** Prints info about this rotor and its current state. */\n    printInfo() {\n        console.log(\"Rotor name: \" + this.name);\n        console.log(\"Rotor r->l permutation string: \" + this.permutation);\n        console.log(\"Notches: \" + this.rotorNotches);\n        console.log(\"Rotational setting: \" + this.setting);\n        console.log(\"At Notch: \" + this.atNotch());\n        console.log(\"Ringstellung setting: \" + this.ringstellung);\n    }\n\n    /** Tests char substitution mappings and complete permuting / inverting for correctness. */\n    testRotor() {\n        console.log(\"Rotor name: \" + this.name);\n        console.log(\"Substitution string: \" + this.permutation);\n\n        console.log(\"Forward char substitutions: \");\n        for (let index = 0; index < alphabet.length; index++) {\n            let char = alphabet.charAt(index);\n            let substitutedChar = this.substituteForward(char);\n            console.log(substitutedChar + \" <- \" + char);\n        }\n\n        console.log(\"Backward char substitutions: \");\n        for (let index = 0; index < alphabet.length; index++) {\n            let leftChar = this.permutation.charAt(index);\n            let reversedChar = this.substituteBackward(leftChar);\n            console.log(leftChar + \" -> \" + reversedChar);\n        }\n\n        console.log(\"Forward int substitutions: \");\n        for (let index = 0; index < alphabet.length; index++) {\n            let substitutedInt = this.substituteForward(index);\n            console.log(substitutedInt + \" <- \" + index);\n            let permutedIndex = this.permute(index);\n            console.log(permutedIndex + \" <- \" + index);\n        }\n\n        console.log(\"Backward int substitutions: \");\n        for (let index = 0; index < alphabet.length; index++) {\n            let reversedInt = this.substituteBackward(index);\n            console.log(index + \" -> \" + reversedInt);\n            let invertedIndex = this.invert(index);\n            console.log(index + \" -> \" + invertedIndex);\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://enigma/./src/rotor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;