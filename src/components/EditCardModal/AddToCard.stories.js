import React from 'react';
import AddToCard from './AddToCard';

export default {
  title: 'AddToCard',
  component: AddToCard,
};

const Template = (args) => <AddToCard {...args} />;

export const Labels = Template.bind({});
Labels.args = {
  type: 'labels',
};

export const DueDate = Template.bind({});
DueDate.args = {
  type: 'duedate',
};

export const ProgressStatus = Template.bind({});
ProgressStatus.args = {
  type: 'progress',
};
export const Description = Template.bind({});
Description.args = {
  type: 'description',
};