import React from 'react';
import DueDateStatus from './index';

export default {
  title: 'DueDateStatus',
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
  unixTimestamp: '1603651162',
};

export const Silver = Template.bind({});
Silver.args = {
  size: '18',
  color: '#DDDDDD',
  unixTimestamp: '1603651162',
};
