import { useState } from "react";
import { Todofrom } from "./Todoform";
import { Todolist } from "./Todolist";
import { TodoDateTime } from "./TodoDateTime";

const Todo = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (inputValue) => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return alert("Please enter a valid task!");
    if (data.includes(trimmedValue)) return alert("Task already exists!");

    // Update state with the new task
    setData((prev) => [...prev, trimmedValue]);
  };

  const handleDelete = (value) => {
    const updateData = data.filter((curVal) => curVal !== value);
    setData(updateData);
  };

  const handleClearAll = () => {
    setData([]);
  };

  return (
    <>
      <div className="todo">
        <h1>Todo list</h1>
        <TodoDateTime />

        <Todofrom onAddTodo={handleSubmit} />
        <ul>
          {data.map((value, index) => (
            <Todolist
              value={value}
              key={index}
              handelDeleteTodo={handleDelete}
            />
          ))}
        </ul>
        <div>
          <button className="btn" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
