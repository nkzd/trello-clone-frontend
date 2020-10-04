import React from 'react';
import Label from './index';

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Label {...args} />;

export const Mini = Template.bind({});
Mini.args = {
  color: '#333333',
};

export const Expanded = Template.bind({});
Expanded.args = {
  color: '#39CCCC',
  text: 'A new label for something',
  expand: true,
  height: '18px',
};
