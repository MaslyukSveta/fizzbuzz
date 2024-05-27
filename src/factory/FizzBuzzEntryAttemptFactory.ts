import { FizzBuzzEntry } from '../entry/FizzBuzzEntry';
import {Entry} from "../interface/Entry";
import {EntryAttemptFactory} from "../interface/EntryAttemptFactory";

/**
 * Factory class for attempting to create a FizzBuzzEntry.
 * This factory creates a FizzBuzzEntry if the input number is divisible by both 3 and 5.
 */
export class FizzBuzzEntryAttemptFactory implements EntryAttemptFactory<number> {
    /**
     * Attempts to create a FizzBuzzEntry from the given input.
     * @param {number} input The input number to create an entry from.
     * @returns {Entry | null} The created FizzBuzzEntry or null if the input is not divisible by 15.
     */
    tryCreate(input: number): Entry | null {
        if (this.isFizzBuzz(input)) {
            return new FizzBuzzEntry();
        }
        return null;
    }

    /**
     * Determines if the given number should be a FizzBuzzEntry.
     * @param {number} input The input number to check.
     * @returns {boolean} True if the number is divisible by both 3 and 5, otherwise false.
     */
    private isFizzBuzz(input: number): boolean {
        return input % 15 === 0;
    }
}