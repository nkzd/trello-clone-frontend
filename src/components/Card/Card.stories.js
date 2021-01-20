import React from 'react';
import Card from './index';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
// A super-simple mock of a redux store
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
export default {
  title: 'Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ margin: '5em' }}>
        <Provider store={store}>{<Story />}</Provider>
      </div>
    ),
  ],
};

const Template = (args) => <Card {...args} />;

export const One = Template.bind({});
One.args = {
  _id: '5f788feba88e353396e55ec1',
  name: 'Markoooo',
};

export const Two = Template.bind({});
Two.args = {
  _id: '5f788feba88e353396e52ec2',
  name: 'With labels',
  labels: [1, 2, 3, 4, 5],
};

export const Three = Template.bind({});
Three.args = {
  _id: '5f788feba88e353396e54dc3',
  name: 'With labels',
  labels: [1, 2, 3, 4, 5],
  description: 'Lorem ipsum description',
  dueDate: '1603651162',
  progressStatus: 'Not Started',
};

export const Four = Template.bind({});
Four.args = {
  _id: '5f788feba88e353396e54dc4',
  name: 'With labels',
  labels: [1, 2, 3, 4, 5],
  description: 'Lorem ipsum description',
  dueDate: '1603651162',
  progressStatus: 'Not Started',
};
