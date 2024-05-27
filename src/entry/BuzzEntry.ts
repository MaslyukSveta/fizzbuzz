import { Entry } from '../interface/Entry';

/**
 * Represents an entry for "Buzz".
 * This entry is used when a number is divisible by 5.
 */
export class BuzzEntry implements Entry {
    /**
     * Serializes the entry to a string.
     * @returns {string} The string "Buzz".
     */
    serialize() {
        return 'Buzz';
    }
}
