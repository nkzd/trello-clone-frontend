import { action } from '@storybook/addon-actions';
import React from 'react';
import EditCardModal from './index';

export default {
  title: 'Modal/EditCardModal',
  component: EditCardModal,
};

const Template = (args) => <EditCardModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  listName: '5f78411d5cd72c14cc947259',
  listId: '5f78411d5cd72c14cc947259',
  _id: '5f788feba88e353396e54dc3',
  name: 'With labels',
  description: 'Some description',
  dueDate: '1603651162',
  progressStatus: 'Not Started',
  labels: [1, 2, 3, 4, 5],
  deleteCard: action('deleteCard'),
};
