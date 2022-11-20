import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('classNames', () => {
    test('just show button in DOM', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('check classnames and default clear class', () => {
        render(<Button className="red">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('red clear');
        screen.debug();
    });
});
