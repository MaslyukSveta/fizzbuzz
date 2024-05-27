import { BuzzEntry } from '../entry/BuzzEntry';
import {Entry} from "../interface/Entry";
import {EntryAttemptFactory} from "../interface/EntryAttemptFactory";


/**
 * Factory class for attempting to create a BuzzEntry.
 * This factory creates a BuzzEntry if the input number is divisible by 5 but not by 3.
 */
export class BuzzEntryAttemptFactory implements EntryAttemptFactory<number> {
    /**
     * Attempts to create a BuzzEntry from the given input.
     * @param {number} input The input number to create an entry from.
     * @returns {Entry | null} The created BuzzEntry or null if the input is not divisible by 5 or is divisible by 3.
     */
    tryCreate(input: number): Entry | null {
        if (this.isBuzz(input)) {
            return new BuzzEntry();
        }
        return null;
    }

    /**
     * Determines if the given number should be a BuzzEntry.
     * @param {number} input The input number to check.
     * @returns {boolean} True if the number is divisible by 5 but not by 3, otherwise false.
     */
    private isBuzz(input: number): boolean {
        return input % 5 === 0 && input % 3 !== 0;
    }
}