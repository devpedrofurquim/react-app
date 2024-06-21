import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('repo-link');
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('website-link');
  expect(linkElement.href).toContain('devpedrofurquim.github.io')
});