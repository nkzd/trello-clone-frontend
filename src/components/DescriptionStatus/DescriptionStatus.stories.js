import React from 'react';
import DescriptionStatus from './index';

export default {
  title: 'DescriptionStatus',
  component: DescriptionStatus,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <DescriptionStatus {...args} />;

export const Gray = Template.bind({});
Gray.args = {
  size: '64',
  color: '#AAAAAA',
};

export const Silver = Template.bind({});
Silver.args = {
  size: '64',
  color: '#DDDDDD',
};
