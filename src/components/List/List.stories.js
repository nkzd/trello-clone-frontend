import React from 'react';
import List from './index';
import { Three, Two, One } from '../Card/Card.stories.js';
import { DragDropContext } from 'react-beautiful-dnd';

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

export const Default = Template.bind({});
Default.args = {
  listId: '5f78411d5cd72c14cc947226',
  name: 'Work Work',
  cards: [Three.args, Two.args, One.args],
};

export const Secondary = Template.bind({});
Secondary.args = {
  listId: '5f78411d5cd72c14cc947238',
  name: 'In-Progress',
  cards: [One.args],
};

export const NoCards = Template.bind({});
NoCards.args = {
  listId: '5f78411d5cd72c14cc951259',
  name: 'Backend',
};
