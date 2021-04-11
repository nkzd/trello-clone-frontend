import React from 'react';
import ListName from './index';

export default {
  title: 'ListName',
  component: ListName,
};

const Template = (args) => <ListName {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Lorem ipsum"
}
