import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import Sidebar from './Sidebar';

describe('classNames', () => {
    test('check sidebar render', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('check expand/collapse logic', () => {
        ComponentRender(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');
        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
