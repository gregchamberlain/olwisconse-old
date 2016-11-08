import React from 'react';
import { render } from 'react-dom';
import Root from './components/root';
import configureStore from './store';

const initialState = { session: { currentUser: window.currentUser }};
const store = window.store = configureStore(initialState);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  render(<Root store={store}/>, root);
});
