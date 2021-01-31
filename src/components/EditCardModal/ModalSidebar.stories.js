import React from 'react';
import { mockLists } from '../../../.storybook/mocks';
import ModalSidebar from './ModalSidebar';

export default {
  title: 'Modal/ModalSidebar',
  component: ModalSidebar,
};

const Template = (args) => <ModalSidebar {...args} />;

export const Default = Template.bind({});

Default.args = {
  listId: mockLists.items[0]._id,
  cardId: mockLists.items[0].cards[0]._id,
};
