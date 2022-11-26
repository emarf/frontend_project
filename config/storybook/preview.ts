import { addDecorator } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/storyDecorators/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/storyDecorators/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/storyDecorators/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
