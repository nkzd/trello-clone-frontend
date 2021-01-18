import React from 'react';
import LabelRectangle from './index';

export default {
  title: 'Modal/LabelRectangle',
  component: LabelRectangle,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <LabelRectangle {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'iksoks',
  color: '#16CEB1',
  checked: true
};