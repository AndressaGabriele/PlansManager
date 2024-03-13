import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Plano de Férias 2024/i);
  expect(headerElement).toBeInTheDocument();
});
