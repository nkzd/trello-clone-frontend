import React from 'react';
import DueDateStatus from './index';

export default {
  title: 'Statuses/DueDateStatus',
  component: DueDateStatus
};

const Template = (args) => <DueDateStatus {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: '1603651162000',
};