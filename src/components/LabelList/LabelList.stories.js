import React from 'react';
import { mockLabels } from '../../../.storybook/mocks';
import LabelList from './index';

export default {
  title: 'LabelList',
  component: LabelList,
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <LabelList {...args} />;

export const Default = Template.bind({});
Default.args = {
  labels: [1, 2, 3, 4, 5],
  allLabels: mockLabels.items,
};
