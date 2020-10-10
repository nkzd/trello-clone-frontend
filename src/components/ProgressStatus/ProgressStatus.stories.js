import React from 'react';
import ProgressStatus from './index';

export default {
  title: 'ProgressStatus',
  component: ProgressStatus,
  argTypes: {
    progressStatus: {
      control: {
        type: 'select',
        options: [
          'Not Started',
          'In-Progress',
          'On-Hold',
          'Cancelled',
          'Complete',
        ],
      },
    },
  },
};

const Template = (args) => <ProgressStatus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progressStatus: 'Not Started',
};
