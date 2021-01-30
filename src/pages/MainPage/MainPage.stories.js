import React from 'react';
import MainPage from './index';
import { mockLists } from '../../../.storybook/mocks';

export default {
  title: 'MainPage',
  component: MainPage,
};

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  lists: mockLists.items,
};
