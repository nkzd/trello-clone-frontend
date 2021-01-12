import React from 'react';
import DueDateStatus from './index';

export default {
  title: 'Statuses/DueDateStatus',
  component: DueDateStatus,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <DueDateStatus {...args} />;

export const Gray = Template.bind({});
Gray.args = {
  size: '18',
  color: '#AAAAAA',
  timestamp: '1603651162000',
};

export const Silver = Template.bind({});
Silver.args = {
  size: '18',
  color: '#DDDDDD',
  timestamp: '1603651162000',
};
