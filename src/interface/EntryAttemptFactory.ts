import {Entry} from "./Entry";

/**
 * Factory interface for attempting to create an Entry.
 * Returns null if it cannot create an Entry for the given input.
 * @template T The type of input the factory accepts.
 */
export interface EntryAttemptFactory<T> {
    /**
     * Attempts to create an Entry from the given input.
     * @param {T} input The input to create an Entry from.
     * @returns {Entry | null} The created Entry or null if creation fails.
     */
    tryCreate(input: T): Entry | null;
}