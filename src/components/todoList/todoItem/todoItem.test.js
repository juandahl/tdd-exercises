import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import TodoItem from './todoItem';

const name = 'TODO item 1';
const handleChange = jest.fn();

describe('TODO LIST', () => {
  beforeEach(() => cleanup())
  
  it('initial value equals to name', () => {
    render(<TodoItem name={name} />);
  
    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();
  })

  it('add change state of checkbox', () => {
    let defaultChecked = false;

    render(<TodoItem name={name} defaultChecked={defaultChecked} onChange={handleChange} />);
  
    const checkboxElement = screen.getByTestId(/todo-item-checkbox/i);
    fireEvent.click(checkboxElement);

    expect(checkboxElement.checked).toEqual(!defaultChecked);
    expect(handleChange).toBeCalled();
  })
})
