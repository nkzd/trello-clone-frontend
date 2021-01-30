import React, { useEffect } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import MainPage from './containers/MainPage';
import { fetchLists, fetchLabels } from './reducers/thunks';
import { ThemeProvider } from 'styled-components';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

const App = () => {
  useEffect(() => {
    store.dispatch(fetchLabels());
    store.dispatch(fetchLists());
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
};

export const theme = {
  modalTextGrey: '#5e6c84',
  listBackgroundLight: '#ebecf0',
};

export default App;
