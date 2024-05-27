import { Entry } from '../interface/Entry';

/**
 * Represents an entry for "FizzBuzz".
 * This entry is used when a number is divisible by both 3 and 5.
 */
export class FizzBuzzEntry implements Entry {
    /**
     * Serializes the entry to a string.
     * @returns {string} The string "FizzBuzz".
     */
    serialize() {
        return 'FizzBuzz';
    }
}
