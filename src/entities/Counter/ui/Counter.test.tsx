import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import Counter from './Counter';

describe('Counter.test', () => {
    test('increment', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const button = screen.getByTestId('increment-btn');
        fireEvent.click(button);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });
    test('decrement', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const button = screen.getByTestId('decrement-btn');
        fireEvent.click(button);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
