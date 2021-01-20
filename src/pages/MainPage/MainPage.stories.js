import React from 'react';
import MainPage from './index';
import { One, Two, Three, Four } from '../../components/Card/Card.stories';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

export default {
  title: 'MainPage',
  component: MainPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
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

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  lists: [
    {
      _id: '5f78411d5cd72c14cc947259',
      name: 'First list',
      cards: [Three.args, Two.args, One.args],
      __v: 26,
    },
    {
      _id: '5f787eb99d84c024bfa2bacc',
      name: 'Second list',
      cards: [Four.args],
      __v: 0,
    },
  ],
};
