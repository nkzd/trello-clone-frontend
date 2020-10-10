import React from 'react';
import Status from './index';

export default {
  title: 'Status',
  component: Status,
  argTypes: {
    status: {
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

const Template = (args) => <Status {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: 'Not Started',
};
