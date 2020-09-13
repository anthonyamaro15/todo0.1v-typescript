import React from "react";
import { MdDelete } from "react-icons/md";

interface Inputs {
  todo: string;
  complete: boolean;
}
interface Props {
  data: Inputs[];
  deleteTodo: (todo: Inputs) => void;
  toggleTodos: (todo: Inputs) => void;
}
const DisplayTodos: React.FC<Props> = ({ data, deleteTodo, toggleTodos }) => {
  return (
    <div className="DisplayTodos">
      <span className="todo-desc">
        {data.length
          ? "You can click on the todo description to mark it as completed or you can just delete"
          : ""}
      </span>
      {data.map((t, i) => (
        <p key={i}>
          <span
            onClick={() => toggleTodos(t)}
            className={t.complete ? "todo completed" : "todo"}
          >
            {t.todo}{" "}
          </span>

          <span className="icon" onClick={() => deleteTodo(t)}>
            <MdDelete />
          </span>
        </p>
      ))}
    </div>
  );
};

export default DisplayTodos;
