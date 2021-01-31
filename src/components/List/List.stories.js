import React from 'react';
import List from './index';
import { Three, Two, One } from '../Card/Card.stories.js';
import { DragDropContext } from 'react-beautiful-dnd';
import { mockLists } from '../../../.storybook/mocks';

export default {
  title: 'List',
  component: List,
  decorators: [
    (Story) => (
      <DragDropContext>
        <Story />
      </DragDropContext>
    ),
  ],
};

const Template = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  listId: mockLists.items[0]._id,
  name: mockLists.items[0].name,
  cards: mockLists.items[0].cards,
};

export const Secondary = Template.bind({});
Secondary.args = {
  listId: mockLists.items[1]._id,
  name: mockLists.items[1].name,
  cards: mockLists.items[1].cards,
};
