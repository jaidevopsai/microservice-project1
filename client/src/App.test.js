import { render, screen } from '@testing-library/react';
import App from './App';
 

test('renders microservice health status', () => {
  render(<App />);
  const healthElement = screen.getByText(/microservice health/i);
  expect(healthElement).toBeInTheDocument();
});
