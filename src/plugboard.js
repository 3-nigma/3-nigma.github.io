import {alphabet} from './rotor.js';

/** Models the char hotswapping behavior of the plugboard */
class Plugboard {

    /** Selects rotor by NAME, retrieves its substitution mapping, and sets up rotational positions. */
    constructor() {
        this.swaps = alphabet;
    }

    /** Sets up the plugboard permutations based on given SWAPSSTRING. */
    makeSwap(char1, char2) {
        var char1Int = this.toInt(char1);
        var char2Int = this.toInt(char2);

        this.swaps = this.replaceChar(this.swaps, char1Int, char2);
        this.swaps = this.replaceChar(this.swaps, char2Int, char1);        
    }

    /** Replaces the char at position INDEX in STR with REPLACECHAR. */
    replaceChar(str, index, replaceChar) {
        return str.substr(0, index) + replaceChar + str.substr(index + 1);
    }

    /** Returns the index of CHAR in the alphabet. */
    toInt(char) {
        return alphabet.indexOf(char);
    }

    /** Returns character number INDEX in the alphabet. */
    toChar(index) {
        return alphabet.charAt(index);
    }

    /** Make the character swap if plugboard swap exists, otherwise return same char. */
    permute(char) {
        if (typeof char === "string") {
            var alphaIndex = this.toInt(char);
            var swappedChar = this.swaps.charAt(alphaIndex);
            return swappedChar;
        } else {
            var swappedChar = this.swaps.charAt(char);
            var swappedIndex = this.toInt(swappedChar);
            return swappedIndex;
        }
    }
}

export {Plugboard};