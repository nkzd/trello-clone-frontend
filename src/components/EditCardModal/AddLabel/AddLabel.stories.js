import React from 'react';
import AddLabel from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal/AddLabel',
  component: AddLabel,
};

const Template = (args) => <AddLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  closePopup: action('closePopup'),
  patchChanges: action('patchChanges'),
};
