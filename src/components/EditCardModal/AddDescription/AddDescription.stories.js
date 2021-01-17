import React from 'react';
import AddDescription from './index';

export default {
  title: 'Modal/AddDescription',
  component: AddDescription,
};

const Template = (args) => <AddDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
  closePopup: () => {},
};