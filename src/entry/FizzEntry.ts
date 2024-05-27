import { Entry } from '../interface/Entry';

/**
 * Represents an entry for "Fizz".
 * This entry is used when a number is divisible by 3.
 */
export class FizzEntry implements Entry {
    /**
     * Serializes the entry to a string.
     * @returns {string} The string "Fizz".
     */
    serialize() {
        return 'Fizz';
    }
}
