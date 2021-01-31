import { action } from '@storybook/addon-actions';
import React from 'react';
import { mockLists } from '../../../.storybook/mocks';
import EditCardModal from './index';

export default {
  title: 'Modal/EditCardModal',
  component: EditCardModal,
};

const Template = (args) => <EditCardModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  listName: mockLists.items[0].name,
  listId: mockLists.items[0]._id,
  _id: mockLists.items[0].cards[0]._id,
  name: mockLists.items[0].cards[0].name,
  description: mockLists.items[0].cards[0].description,
  dueDate: mockLists.items[0].cards[0].dueDate,
  progressStatus: mockLists.items[0].cards[0].progressStatus,
  labels: mockLists.items[0].cards[0].labels,
  deleteCard: action('deleteCard'),
};