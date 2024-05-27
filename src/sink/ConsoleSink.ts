import { Sink } from '../interface/Sink';
import {Entry} from "../interface/Entry";

/**
 * Class to handle writing entries to the console.
 * This sink buffers all entries and outputs them all at once when closed.
 */
export class ConsoleSink implements Sink<Entry> {
    private buffer: Map<number, string> = new Map();
    private currentIndex: number = 0;

    /**
     * Writes an entry to the sink.
     * @param {Entry} entry The entry to write.
     * @returns {Promise<void>} A promise that resolves when to write is complete.
     */
    async write(entry: Entry): Promise<void> {
        this.buffer.set(this.currentIndex++, entry.serialize());
        return;
    }

    /**
     * Closes the sink and outputs all buffered entries to the console.
     * @returns {Promise<void>} A promise that resolves when the sink is closed.
     */
    async close(): Promise<void> {
        const serializedEntries = Array.from(this.buffer.values()).join('\n');
        console.log(`[SINK] ${serializedEntries}`);
    }
}