import { Entry } from '../interface/Entry';

/**
 * Represents an entry for a number.
 * This entry is used when a number is not divisible by 3 or 5.
 */
export class NumberEntry implements Entry {
    // Stores the number for this entry
    private number: number;

    /**
     * Constructor to initialize the number.
     * @param {number} number The number to be stored in this entry.
     */
    constructor(number: number) {
        this.number = number;
    }

    /**
     * Serializes the entry to a string representation of the number.
     * @returns {string} The string representation of the number.
     */
    serialize() {
        return this.number.toString();
    }
}
