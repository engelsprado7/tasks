// src/App.test.tsx
// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation buttons', () => {
  render(
    <App />
  );

  // Check that the "Tasks" navigation button/link is in the document
  expect(screen.getByText(/Tasks/i)).toBeInTheDocument();

  // Check that the "Listado" navigation button/link is in the document
  expect(screen.getByText(/Listado/i)).toBeInTheDocument();
});

