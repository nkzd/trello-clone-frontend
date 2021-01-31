import React from 'react';
import { mockLabels } from '../../../../../.storybook/mocks';
import ChooseLabels from './index';

export default {
  title: 'Modal/ChooseLabels',
  component: ChooseLabels,
};

const Template = (args) => <ChooseLabels {...args} />;

export const Default = Template.bind({});
Default.args = {
  allLabels: mockLabels.items,
};
