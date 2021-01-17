import React from 'react';
import DatePicker from './index';

export default {
  title: 'Modal/DatePicker',
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  closePopup: () => {},
};
