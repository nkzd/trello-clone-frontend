import React from 'react';
import ColorCheckbox from './index';

export default {
  title: 'Modal/ColorCheckbox',
  component: ColorCheckbox,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <ColorCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'turquoise',
  checked: false,
};
