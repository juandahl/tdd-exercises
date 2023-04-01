import { render, screen, cleanup } from '@testing-library/react';
import TodoList from '../../../../components/todoList/todoList';

describe('TODO LIST', () => {
  beforeEach(() => cleanup())

  it('initial value equals to 0', () => {
    render(<TodoList />);
  
    const title = screen.getByText(/todo list/i);
    expect(title).toBeInTheDocument();
  })
})
