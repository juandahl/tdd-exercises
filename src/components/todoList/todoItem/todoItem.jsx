import React from "react";

const TodoItem = ({ name, defaultChecked, onChange }) => {
  const [checked, setChecked] = React.useState(defaultChecked);

  const handleChange = () => {
    setChecked(prev => !prev);
    onChange();
  };

  return (
    <div>
      <label>
        <input data-testid="todo-item-checkbox" type="checkbox" checked={checked} onChange={handleChange}>
        </input>
          {name}
        </label>
    </div>
  );
}

export default TodoItem;
