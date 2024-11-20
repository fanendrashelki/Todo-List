import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const Todolist = ({ value, key, handelDeleteTodo }) => {
  return (
    <>
      <li key={key}>
        {value}
        <span>
          <IoMdCheckmarkCircle className="done" />
          <MdDelete
            className="delete"
            onClick={() => handelDeleteTodo(value)}
          />
        </span>
      </li>
    </>
  );
};
