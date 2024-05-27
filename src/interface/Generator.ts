import { Observable } from 'rxjs';

/**
 * Interface representing a generator that produces an observable sequence of items.
 * @template T The type of items generated.
 */
export interface Generator<T> {
    /**
     * Creates an observable sequence of items.
     * @returns {Observable<T>} An observable sequence of items.
     */
    observable(): Observable<T>;
}