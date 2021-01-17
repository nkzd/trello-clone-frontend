import React from 'react';
import AddProgres from './index';

export default {
  title: 'Modal/AddProgres',
  component: AddProgres,
};

const Template = (args) => <AddProgres {...args} />;

export const Default = Template.bind({});
Default.args = {
  closePopup: () => {},
};
