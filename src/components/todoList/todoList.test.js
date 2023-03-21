import { render, screen, cleanup } from '@testing-library/react';
import TodoList from './todoList';

describe('TODO LIST', () => {
  beforeEach(() => cleanup())

  it('initial value equals to 0', () => {
    render(<TodoList />);
  
    const title = screen.getByText(/todo list/i);
    expect(title).toBeInTheDocument();
  })
})
