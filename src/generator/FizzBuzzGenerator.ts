import { Observable, from } from 'rxjs';
import { Generator } from '../interface/Generator';

/**
 * Class to generate numbers in a range for the FizzBuzz problem.
 */
export class FizzBuzzGenerator implements Generator<number> {
    private start: number;
    private end: number;

    /**
     * Constructor to initialize the start and end of the range.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     */
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }

    /**
     * Creates an observable sequence of numbers from start to end.
     * @returns {Observable<number>} An observable sequence of numbers.
     */
    observable(): Observable<number> {
        return from(Array.from({ length: this.end - this.start + 1 }, (_, i) => i + this.start));
    }
}