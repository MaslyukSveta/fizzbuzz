import {EntryFactory} from "../interface/EntryFactory";
import {Entry} from "../interface/Entry";
import {NumberEntry} from "../entry/NumberEntry";


/**
 * Factory class for creating a NumberEntry.
 * This factory creates a NumberEntry for any given input number.
 */
export class NumberEntryFactory implements EntryFactory<number> {
    /**
     * Creates a NumberEntry from the given input.
     * @param {number} input The input number to create an entry from.
     * @returns {Entry} The created NumberEntry.
     */
    create(input: number): Entry {
        return new NumberEntry(input);
    }
}