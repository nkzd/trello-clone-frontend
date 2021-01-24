import React from 'react';
import AddDate from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal/AddDate',
  component: AddDate,
};

const Template = (args) => <AddDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  closePopup: action('closePopup'),
  patchChanges: action('patchChanges')
};