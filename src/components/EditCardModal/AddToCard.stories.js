import React from 'react';
import AddToCard from './AddToCard';
import { mockLists } from '../../../.storybook/mocks';

export default {
  title: 'Modal/AddToCard',
  component: AddToCard,
};

const Template = (args) => (
  <AddToCard
    {...args}
    lists={mockLists.items}
    listId='5f78411d5cd72c14cc947259'
    cardId='5f788feba88e353396e54dc3'
  />
);

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
