import React from 'react';
import EditCard from './index';

export default {
  title: 'EditCard',
  component: EditCard
};

const Template = (args) => <EditCard {...args} />;

export const Primary = Template.bind({});