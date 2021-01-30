import React from 'react';
import DueDate from './index';

export default {
  title: 'Attributes/DueDate',
  component: DueDate
};

const Template = (args) => <DueDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: '1603651162000',
};