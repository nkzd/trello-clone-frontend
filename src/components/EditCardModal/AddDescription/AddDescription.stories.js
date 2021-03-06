import React from 'react';
import AddDescription from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal/AddDescription',
  component: AddDescription,
};

const Template = (args) => <AddDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
  closePopup: action('closePopup'),
  patchChanges: action('patchChanges')
};