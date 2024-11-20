import { useState } from "react";

export const Todofrom = ({ onAddTodo }) => {
  const [inputValue, setinputValue] = useState("");
  const handleonChange = (value) => {
    setinputValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setinputValue(" ");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => handleonChange(event.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
