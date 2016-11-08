import React from 'react';
import { render } from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  render(<Root />, root);
});
