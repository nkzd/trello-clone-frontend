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
  dueDate: 'Oct 9',
};

export const Three = Template.bind({});
Three.args = {
  descriptionStatus : true,
  dueDate: 'Oct 9',
  progressStatus: 'Not Started'
};

// export const Two = Template.bind({});
// Silver.args = {
//   size: '64',
//   color: '#DDDDDD',
// };

// export const All = Template.bind({});
