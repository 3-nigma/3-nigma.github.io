import { alphabet } from './rotor.js';

/** Represents a complete functional Enigma machine. */
class Machine {

    /** A new Enigma machine with NUMROTORS rotor slots and empty plugboard, ALLROTORS contains all available rotors. */
    constructor(allRotors, numRotors, numPawls, plugboard) {
        this.allRotors = allRotors;
        this.numRotors = numRotors;
        this.numPawls = numPawls;
        this.plugboard = plugboard;
        this.myRotors = [];
    }

    /** Set my rotor slots from my set of available rotors. */
    insertRotors(rotorNames) {
        for (var i = 0; i < this.numRotors; i++) {
            var foundRotor = false;
            for (var checkName of this.allRotors) {
                if (rotorNames[i] === checkName.getName()) {
                    this.myRotors[i] = checkName;
                    foundRotor = true;
                }
                for (var j = 0; j < i; j++) {
                    if (rotorNames[i] === rotorNames[j]) {
                        console.log("Duplicate rotor name");
                    }
                }
            }
            if (!foundRotor) {
                console.log("Bad rotor name");
            }
        }
    }

    /** Set the initial settings of my rotors according to string SETTING */
    setRotors(setting) {
        for (var i = 1; i < this.numRotors; i++) {
            var charPos = setting.charAt(i - 1);
            var intPos = alphabet.indexOf(charPos);
            this.myRotors[i].setSetting(intPos);
        }
    }

    /** Create a plugboard hotswap for this machine. */
    plugboardSwap(char1, char2) {
        this.plugboard.makeSwap(char1, char2);
    }

    /** Before a key press input is fed through the rotors, advance moving rotors if conditions allow. */
    makeRotations(model) {
        var willRotate = [];
        for (var i = 0; i < this.numRotors; i++) {
            willRotate.push(false);
        }

        for (var i = 1; i < this.numRotors; i++) {
            if (this.myRotors[i].rotates()) {
                if (i == this.numRotors - 1) {
                    willRotate[i] = true;
                } else {
                    if (this.myRotors[i + 1].atNotch()) {
                        willRotate[i] = true;
                        willRotate[i + 1] = true;
                    }
                }
            }
        }

        for (var i = 1; i < this.numRotors; i++) {
            if (willRotate[i]) {
                this.myRotors[i].advance();
                model.rotate(i - 1);
            }
        }
    }

    /** Encrypts a single input character C, represented as either a CHAR or INT. */
    encryptChar(c, model) {
        let steps = [c];

        let inputChar = c;

        model.keyPress(c);

        this.makeRotations(model);

        c = this.plugboard.permute(c);

        for (var i = this.numRotors - 1; i >= 0; i--) {
            c = this.myRotors[i].permute(c);
            steps.push(c);
        }
        for (var i = 1; i < this.numRotors; i++) {
            c = this.myRotors[i].invert(c);
            steps.push(c);
        }

        c = this.plugboard.permute(c);

        let lampChar = this.myRotors[0].toInt(c);
        model.lampOn(lampChar);

        addRow(steps);
        addText(steps);

        return c;
    }

    /** Returns the encoding / decoding of MSG, updating the state of the rotors accordingly. */
    encryptMsg(msg) {
        var encrypted = "";
        for (var i = 0; i < msg.length; i++) {
            if (msg.charAt(i) === "\n") {
                encrypted += "\n";
            } else {
                var currChar = msg.charAt(i);
                var encryptedChar = this.encryptChar(currChar, null);
                encrypted += encryptedChar;
            }
        }

        return encrypted;
    }

}

export {Machine};