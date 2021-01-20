import React from 'react';
import Statuses from './index';

export default {
  title: 'Statuses',
  component: Statuses,
  argTypes: {
    description: {
      control: {
        type: 'text',
      },
    },
    dueDate: {
      control: {
        type: 'text',
      },
    },
    progressStatus: {
      control: {
        type: 'select',
        options: [
          null,
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

const Template = (args) => <Statuses {...args} />;

export const One = Template.bind({});
One.args = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const Two = Template.bind({});
Two.args = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  dueDate: '1603651162',
};

export const Three = Template.bind({});
Three.args = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  dueDate: '1603651162',
  progressStatus: 'Not Started',
};
