import { FizzBuzzGenerator } from './generator/FizzBuzzGenerator';
import { FizzBuzzProcessor } from './processor/FizzBuzzProcessor';
import { ConsoleSink } from './sink/ConsoleSink';


const generator = new FizzBuzzGenerator(1, 100);
const processor = new FizzBuzzProcessor();
const sink = new ConsoleSink();


const observable = processor.process(generator.observable());
observable.subscribe({
    next: (entry) => sink.write(entry),
    complete: () => sink.close()
});