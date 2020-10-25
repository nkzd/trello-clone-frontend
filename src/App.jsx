import React, { useEffect } from 'react';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import MainPage from './pages/MainPage';
import { fetchPosts } from './reducers/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const App = () => {
  useEffect(() => {
    store.dispatch(fetchPosts());
  }, []);

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
