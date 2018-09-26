import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store';

const createStore = () => {
  let store;

  if (window.currentUser) {
    const { currentUser } = window;
    const preloadedState = { session: { currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  return store;
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = createStore();

  ReactDOM.render(<Root store={store} />, root);
});
