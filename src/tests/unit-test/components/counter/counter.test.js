import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import Counter from '../../../../components/counter'

describe('counter', () => {
  beforeEach(() => cleanup())

  it('initial value equals to 0', () => {
    render(<Counter />);
  
    const initialCount = screen.getByText(/count/i);
    expect(initialCount).toHaveTextContent(0);
  })

  it('increment Button appears', () => {
    render(<Counter />);
  
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    expect(incrementButton).toBeInTheDocument();

    fireEvent.click(incrementButton);

    const initialCount = screen.getByText(/count/i);
    expect(initialCount).toHaveTextContent(1);
  })

  it('decrement Button appears', () => {
    render(<Counter />);
  
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    expect(decrementButton).toBeInTheDocument();

    fireEvent.click(decrementButton);

    const initialCount = screen.getByText(/count/i);
    expect(initialCount).toHaveTextContent(-1);
  })
})
