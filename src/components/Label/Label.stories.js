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

export const Primary = Template.bind({});
Primary.args = {
  color: '#333333',
};

