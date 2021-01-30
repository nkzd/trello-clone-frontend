import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/App';
import { mockLabels, mockLists } from './mocks';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
const mockedStore = {
  getState: () => {
    return {
      lists: mockLists,
      labels: mockLabels,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export const decorators = [
  (Story) => (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Provider store={mockedStore}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </Provider>
    </div>
  ),
];
