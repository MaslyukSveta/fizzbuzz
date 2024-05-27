import { Observable } from 'rxjs';

/**
 * Interface representing a processor that processes an observable sequence of input items
 * and produces an observable sequence of output items.
 * @template T The type of input items the processor accepts.
 * @template U The type of output items the processor produces.
 */
export interface Processor<T, U> {
    /**
     * Processes an observable sequence of input items and produces an observable sequence of output items.
     * @param {Observable<T>} obs The observable sequence of input items.
     * @returns {Observable<U>} The observable sequence of output items.
     */
    process(obs: Observable<T>): Observable<U>;
}
