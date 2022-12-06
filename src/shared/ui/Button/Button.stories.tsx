import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/storyDecorators/ThemeDecorator';

import Button, { ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <div style={{ padding: '20px' }}>
        <Button {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    theme: ButtonTheme.PRIMARY,
};
Primary.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...Primary.args} size={ButtonSize.M} />
            <Button {...Primary.args} size={ButtonSize.L} />
            <Button {...Primary.args} size={ButtonSize.XL} />
        </div>
    ),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'PrimaryDark',
    theme: ButtonTheme.PRIMARY,
};
PrimaryDark.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...PrimaryDark.args} size={ButtonSize.M} />
            <Button {...PrimaryDark.args} size={ButtonSize.L} />
            <Button {...PrimaryDark.args} size={ButtonSize.XL} />
        </div>
    ),
    ThemeDecorator(Theme.DARK),
];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
    theme: ButtonTheme.CLEAR,
};
Clear.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...Clear.args} size={ButtonSize.M} />
            <Button {...Clear.args} size={ButtonSize.L} />
            <Button {...Clear.args} size={ButtonSize.XL} />
        </div>
    ),
];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'ClearDark',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...ClearDark.args} size={ButtonSize.M} />
            <Button {...ClearDark.args} size={ButtonSize.L} />
            <Button {...ClearDark.args} size={ButtonSize.XL} />
        </div>
    ),
    ThemeDecorator(Theme.DARK),
];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Clear invert',
    theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInverted.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...ClearInverted.args} size={ButtonSize.M} />
            <Button {...ClearInverted.args} size={ButtonSize.L} />
            <Button {...ClearInverted.args} size={ButtonSize.XL} />
        </div>
    ),
];

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
    children: 'ClearInvertedDark',
    theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInvertedDark.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...ClearInvertedDark.args} size={ButtonSize.M} />
            <Button {...ClearInvertedDark.args} size={ButtonSize.L} />
            <Button {...ClearInvertedDark.args} size={ButtonSize.XL} />
        </div>
    ),
    ThemeDecorator(Theme.DARK),
];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...Outline.args} size={ButtonSize.M} />
            <Button {...Outline.args} size={ButtonSize.L} />
            <Button {...Outline.args} size={ButtonSize.XL} />
        </div>
    ),
];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'OutlineDark',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...OutlineDark.args} size={ButtonSize.M} />
            <Button {...OutlineDark.args} size={ButtonSize.L} />
            <Button {...OutlineDark.args} size={ButtonSize.XL} />
        </div>
    ),
    ThemeDecorator(Theme.DARK),
];

export const Background = Template.bind({});
Background.args = {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND,
};
Background.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...Background.args} size={ButtonSize.M} />
            <Button {...Background.args} size={ButtonSize.L} />
            <Button {...Background.args} size={ButtonSize.XL} />
        </div>
    ),
    ThemeDecorator(Theme.DARK),
];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'BackgroundInverted',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInverted.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...BackgroundInverted.args} size={ButtonSize.M} />
            <Button {...BackgroundInverted.args} size={ButtonSize.L} />
            <Button {...BackgroundInverted.args} size={ButtonSize.XL} />
        </div>
    ),
];

export const Square = Template.bind({});
Square.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};
Square.decorators = [
    () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
        }}
        >
            <Button {...Square.args} size={ButtonSize.M} />
            <Button {...Square.args} size={ButtonSize.L} />
            <Button {...Square.args} size={ButtonSize.XL} />
        </div>
    ),
];
