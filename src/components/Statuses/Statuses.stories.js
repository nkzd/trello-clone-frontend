import React from 'react';
import Statuses from './index';

export default {
  title: 'Statuses',
  component: Statuses,
  argTypes: {
    descriptionStatus: {
      control: {
        type: 'boolean'
      }
    },
    dueDate: {
      control: {
        type: 'text'
      }
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
  descriptionStatus : true
};

export const Two = Template.bind({});
Two.args = {
  descriptionStatus : true,
  dueDate: '1603651162',
};

export const Three = Template.bind({});
Three.args = {
  descriptionStatus : true,
  dueDate: '1603651162',
  progressStatus: 'Not Started'
};