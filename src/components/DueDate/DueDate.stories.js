import React from 'react';
import DueDate from './index';

export default {
  title: 'DueDate',
  component: DueDate,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <DueDate {...args} />;

export const Gray = Template.bind({});
Gray.args = {
  size: '18',
  color: '#AAAAAA',
  text: 'Oct. 9',
};

export const Silver = Template.bind({});
Silver.args = {
  size: '18',
  color: '#DDDDDD',
  text: 'Oct. 9',
};
