import React from 'react';
import HeaderBar from './index';

export default {
  title: 'HeaderBar',
  component: HeaderBar,
};

const Template = (args) => <HeaderBar {...args} />;

export const Default = Template.bind({});
