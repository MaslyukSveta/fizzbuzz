import {Entry} from "./Entry";

/**
 * Factory interface for creating an Entry.
 * @template T The type of input the factory accepts.
 */
export interface EntryFactory<T> {
    /**
     * Creates an Entry from the given input.
     * @param {T} input The input to create an Entry from.
     * @returns {Entry} The created Entry.
     */
    create(input: T): Entry;
}