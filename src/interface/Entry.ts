/**
 * Represents an entry that can be serialized to a string.
 */
export interface Entry {
    /**
     * Serializes the entry to a string.
     * @returns {string} The serialized string representation of the entry.
     */
    serialize(): string;
}
