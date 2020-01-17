import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders sock collections link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sock collections/i);
  expect(linkElement).toBeInTheDocument();
});
