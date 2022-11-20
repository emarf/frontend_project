import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import Sidebar from './Sidebar';

describe('classNames', () => {
    test('check sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('check expand/collapse logic', () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');
        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
