import { counterReducers } from 'entities/Counter';
import { CounterSchema } from '../types/counterSchema';
import { counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('increase state value', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducers(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('decrease state value', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducers(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('should work with empty state ', () => {
        expect(counterReducers(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
