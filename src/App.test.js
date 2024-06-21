import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render repository button', () => {
    render(<App />);
    const linkElement = screen.getByTestId('repo-link');
    expect(linkElement).toBeInTheDocument();
  });

  it('should render website button', () => {
    render(<App />);
    const linkElement = screen.getByTestId('website-link');
    expect(linkElement.href).toContain('devpedrofurquim.github.io')
  });
})