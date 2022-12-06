import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/storyDecorators/ThemeDecorator';

import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal {...args} />
);

export const PrimaryModal = Template.bind({});
PrimaryModal.args = {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ducimus quod doloremque vel nobis impedit eaque dolore!
    Debitis perferendis quasi illo.`,
    isModalOpen: true,
};
PrimaryModal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryModalDark = Template.bind({});
PrimaryModalDark.args = {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ducimus quod doloremque vel nobis impedit eaque dolore!
    Debitis perferendis quasi illo.`,
    isModalOpen: true,
};
PrimaryModalDark.decorators = [ThemeDecorator(Theme.DARK)];
