import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Processor } from '../interface/Processor';
import {Entry} from "../interface/Entry";
import { FizzBuzzEntryAttemptFactory } from '../factory/FizzBuzzEntryAttemptFactory';
import { FizzEntryAttemptFactory } from '../factory/FizzEntryAttemptFactory';
import { BuzzEntryAttemptFactory } from '../factory/BuzzEntryAttemptFactory';
import { NumberEntryFactory } from '../factory/NumberEntryFactory';


/**
 * Class to process numbers and produce entries for the FizzBuzz problem.
 * This processor uses a series of entry attempt factories to create entries based on the input numbers.
 */
export class FizzBuzzProcessor implements Processor<number, Entry> {
    private factories = [
        new FizzBuzzEntryAttemptFactory(),
        new FizzEntryAttemptFactory(),
        new BuzzEntryAttemptFactory()
    ];
    private defaultFactory = new NumberEntryFactory();

    /**
     * Processes an observable sequence of numbers and produces an observable sequence of entries.
     * @param {Observable<number>} obs The observable sequence of numbers.
     * @returns {Observable<Entry>} The observable sequence of entries.
     */
    process(obs: Observable<number>): Observable<Entry> {
        return obs.pipe(
            map((num) => {
                for (let factory of this.factories) {
                    const entry = factory.tryCreate(num);
                    if (entry) return entry;
                }
                return this.defaultFactory.create(num);
            })
        );
    }
}