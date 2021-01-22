import { action } from '@storybook/addon-actions';
import React from 'react';
import { Provider } from 'react-redux';
import AddLabel from './index';

export default {
  title: 'Modal/AddLabel',
  component: AddLabel,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (args) => <AddLabel {...args} />;

export const Default = Template.bind({});
Default.args = {};

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
