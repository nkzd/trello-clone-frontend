import React from 'react';
import List from './index';
import { Three, Two, One } from '../Card/Card.stories.js';
import { DragDropContext } from 'react-beautiful-dnd';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

export default {
  title: 'List',
  component: List,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <DragDropContext>
          <Story />
        </DragDropContext>
      </Provider>
    ),
  ],
};

const store = {
  getState: () => {
    return {
      labels: {
        items: [
          { _id: 1, name: 'Whatever', color: 'lightcoral' },
          { _id: 2, name: 'A', color: 'lightblue' },
          { _id: 3, color: 'lightgreen' },
          {
            _id: 4,
            name: 'quick brown fox jumps over a lazy dog',
            color: 'lightgray',
          },
          { _id: 5, name: 'bo problemo', color: 'lightpink' },
        ],
        isFetching: false,
      },
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
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
