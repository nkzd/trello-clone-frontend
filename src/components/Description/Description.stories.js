import React from 'react';
import Description from './index';

export default {
  title: 'Description',
  component: Description,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Description {...args} />;

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
