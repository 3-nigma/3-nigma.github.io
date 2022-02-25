var rotorWirings = {
    "I": "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
    "II": "AJDKSIRUXBLHWTMCQGZNPYFVOE",
    "III": "BDFHJLCPRTXVZNYEIWGAKMUSQO",
    "IV": "ESOVPZJAYQUIRHXLNFTGKDCMWB",
    "V": "VZBRGITYUPSDNHLXAWMJQOFECK",
    "VI": "VZBRGITYUPSDNHLXAWMJQOFECK",
    "VII": "NZJHGRCXMYSWBOUFAIVLPEKQDT",
    "VIII": "FKQHTLXOCBJSPDZRAMEWNIUYGV",
    "Beta": "LEYJVCNIXWPBQMDRTAKZGFUHOS",
    "Gamma": "FSOKANUERHMBTIYCWLQPZXVGJD",
    "B": "ENKQAUYWJICOPBLMDXZVFTHRGS",
    "C": "RDOBJNTKVEHMLFCWZAXGYIPSUQ"
};

var rotorNotches = {
    "I": "Q",
    "II": "E",
    "III": "V",
    "IV": "J",
    "V": "Z",
    "VI": "ZM",
    "VII": "ZM",
    "VIII": "ZM",
    "Beta": "",
    "Gamma": "",
    "B": "",
    "C": ""
};

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** Models the encrypting behavior of the moving rotors, fixed rotors, and reflector. */
class Rotor {

    /** Selects rotor by NAME, retrieves its substitution mapping, and sets up rotational positions. */
    constructor(name) {
        this.name = name;
        this.permutation = rotorWirings[name];
        this.notches = rotorNotches[name];
        this.setting = 0;
        this.ringstellung = 0;
    }

    /** Returns the index of CHAR in the alphabet. */
    toInt(char) {
        return alphabet.indexOf(char);
    }

    /** Returns character number INDEX in the alphabet. */
    toChar(index) {
        return alphabet.charAt(index);
    }

    /** Right contact to left contact substitution, handles char and int inputs. */
    substituteForward(char) {
        if (typeof char === "string") {
            var alphaIndex = this.toInt(char);
            var substitutedChar = this.permutation.charAt(alphaIndex);
            return substitutedChar;
        } else {
            var substitutedChar = this.permutation.charAt(char);
            var substitutedIndex = this.toInt(substitutedChar);
            return substitutedIndex;
        }
    }

    /** Left contact to right contact reverse substitution, handles char and int inputs. */
    substituteBackward(char) {
        if (typeof char === "string") {
            var leftIndex = this.permutation.indexOf(char);
            var reversedChar = alphabet.charAt(leftIndex);
            return reversedChar;
        } else {
            var alphaChar = this.toChar(char);
            var leftIndex = this.permutation.indexOf(alphaChar);
            var reversedChar = alphabet.charAt(leftIndex);
            var reversedIndex = this.toInt(reversedChar);
            return reversedIndex;
        }
    }

    /** Turn the alphabet ring to int position RINGSETTING. */
    setRing(ringSetting) {
        if (typeof ringSetting === "number") {
            this.ringstellung = ringSetting;
        } else {
            var pos = this.toInt(ringSetting);
            this.ringstellung = pos;
        }
    }

    /** Turn the entire rotor to int position POSITION. */
    setSetting(position) {
        if (typeof position === "number") {
            this.setting = position;
        } else {
            var intPos = this.toInt(position);
            this.setting = intPos;
        }
    }

    /** Returns true for rotors I - VIII and false for fixed rotors and reflectors. */
    rotates() {
        return this.name.includes("I") || this.name.includes("V");
    }

    /** Complete right to left rotor encryption of a char represented as an INT. */
    permute(pos) {
        var inputIsString = false;
        if (typeof pos === "string") {
            inputIsString = true;
            pos = this.toInt(pos);
        }

        var contactEntered = (pos + this.setting - this.ringstellung + 26) % 26;
        var contactExited = this.substituteForward(contactEntered);
        var posExit = (contactExited - this.setting + this.ringstellung + 26) % 26;

        if (!inputIsString) {
            return posExit;
        } else {
            var char = this.toChar(posExit);
            return char;
        }
    }

    /** Complete left to right rotor reverse encryption of a char represented as an INT. */
    invert(pos) {
        var inputIsString = false;
        if (typeof pos === "string") {
            inputIsString = true;
            pos = this.toInt(pos);
        }

        var contactEntered = (pos + this.setting - this.ringstellung + 26) % 26;
        var contactExited = this.substituteBackward(contactEntered);
        var posExit = (contactExited - this.setting + this.ringstellung + 26) % 26;

        if (!inputIsString) {
            return posExit;
        } else {
            var char = this.toChar(posExit);
            return char;
        }
    }

    /** Return true iff I am positioned to allow the rotor to my left to advance. */
    atNotch() {
        if (!this.rotates()) {
            console.log("This method should not be called on a fixed rotor or reflector.");
        } else {
            var rotorCharSetting = this.toChar(this.setting);
            var atNotch = this.notches.indexOf(rotorCharSetting) != -1;
            return atNotch;
        }
    }

    /** Advance my setting one position, conditions for stepping handled by machine. */
    advance() {
        if (!this.rotates()) {
            console.log("This method should not be called on a fixed rotor or reflector.");
        } else {
            var currSetting = this.setting;
            var newSetting = (currSetting + 1) % 26;
            this.setSetting(newSetting);
        }
    }

    getName() {
        return this.name;
    }

    /** Prints info about this rotor and its current state. */
    printInfo() {
        console.log("Rotor name: " + this.name);
        console.log("Rotor r->l permutation string: " + this.permutation);
        console.log("Notches: " + this.rotorNotches);
        console.log("Rotational setting: " + this.setting);
        console.log("At Notch: " + this.atNotch());
        console.log("Ringstellung setting: " + this.ringstellung);
    }

    /** Tests char substitution mappings and complete permuting / inverting for correctness. */
    testRotor() {
        console.log("Rotor name: " + this.name);
        console.log("Substitution string: " + this.permutation);

        console.log("Forward char substitutions: ");
        for (let index = 0; index < alphabet.length; index++) {
            let char = alphabet.charAt(index);
            let substitutedChar = this.substituteForward(char);
            console.log(substitutedChar + " <- " + char);
        }

        console.log("Backward char substitutions: ");
        for (let index = 0; index < alphabet.length; index++) {
            let leftChar = this.permutation.charAt(index);
            let reversedChar = this.substituteBackward(leftChar);
            console.log(leftChar + " -> " + reversedChar);
        }

        console.log("Forward int substitutions: ");
        for (let index = 0; index < alphabet.length; index++) {
            let substitutedInt = this.substituteForward(index);
            console.log(substitutedInt + " <- " + index);
            let permutedIndex = this.permute(index);
            console.log(permutedIndex + " <- " + index);
        }

        console.log("Backward int substitutions: ");
        for (let index = 0; index < alphabet.length; index++) {
            let reversedInt = this.substituteBackward(index);
            console.log(index + " -> " + reversedInt);
            let invertedIndex = this.invert(index);
            console.log(index + " -> " + invertedIndex);
        }
    }
}

export {rotorWirings, rotorNotches, alphabet, Rotor};