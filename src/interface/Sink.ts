/**
 * Interface representing a sink that handles writing entries and closing the sink.
 * @template T The type of entries the sink handles.
 */
export interface Sink<T> {
    /**
     * Writes an entry to the sink.
     * @param {T} entry The entry to write.
     * @returns {Promise<void>} A promise that resolves when the write is complete.
     */
    write(entry: T): Promise<void>;

    /**
     * Closes the sink.
     * @returns {Promise<void>} A promise that resolves when the sink is closed.
     */
    close(): Promise<void>;
}
