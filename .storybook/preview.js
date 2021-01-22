import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
const mockedStore = {
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
export const decorators = [
  (Story) => (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Provider store={mockedStore}>
        <Story />
      </Provider>
    </div>
  ),
];
