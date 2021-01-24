import React from 'react';
import AddProgres from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal/AddProgres',
  component: AddProgres,
};

const Template = (args) => <AddProgres {...args} />;

export const Default = Template.bind({});
Default.args = {
  closePopup: action('closePopup'),
  patchChanges: action('patchChanges'),
};
