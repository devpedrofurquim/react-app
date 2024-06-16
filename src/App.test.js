import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('access-link');
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('access-link');
  expect(linkElement.href).toContain('devpedrofurquim.github.io')
});