import { FizzEntry } from '../entry/FizzEntry';
import {Entry} from "../interface/Entry";
import {EntryAttemptFactory} from "../interface/EntryAttemptFactory";

/**
 * Factory class for attempting to create a FizzEntry.
 * This factory creates a FizzEntry if the input number is divisible by 3 but not by 5.
 */
export class FizzEntryAttemptFactory implements EntryAttemptFactory<number> {
    /**
     * Attempts to create a FizzEntry from the given input.
     * @param {number} input The input number to create an entry from.
     * @returns {Entry | null} The created FizzEntry or null if the input is not divisible by 3 or is divisible by 5.
     */
    tryCreate(input: number): Entry | null {
        if (this.isFizz(input)) {
            return new FizzEntry();
        }
        return null;
    }

    /**
     * Determines if the given number should be a FizzEntry.
     * @param {number} input The input number to check.
     * @returns {boolean} True if the number is divisible by 3 but not by 5, otherwise false.
     */
    private isFizz(input: number): boolean {
        return input % 3 === 0 && input % 5 !== 0;
    }
}