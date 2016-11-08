import React from 'react';
import { render } from 'react-dom';
import Root from './components/root';
import configureStore from './store';

const store = window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  render(<Root store={store}/>, root);
});
