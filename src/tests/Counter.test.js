// import necessary react testing library helpers here
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/App';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const message = screen.getByText('Counter');
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const renderedCount = screen.getByTestId('count');

  expect(renderedCount.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const renderedCount = screen.getByTestId('count');
  expect(renderedCount.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
 fireEvent.click(decrementButton);
 const renderedCount = screen.getByTestId('count');
 expect(renderedCount.textContent).toBe('-1');
});
