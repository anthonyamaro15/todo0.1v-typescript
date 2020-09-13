import React, { useState } from "react";
import AddForm from "./AddForm";
import DisplayTodos from "./DisplayTodos";

interface Todos {
  todo: string;
  complete: boolean;
}
const MainApp = () => {
  const [data, setData] = useState<Todos[]>([]);

  const addTodo = (todo: Todos) => {
    setData([...data, todo]);
  };

  return (
    <div>
      <AddForm addTodo={addTodo} />
      <DisplayTodos data={data} />
    </div>
  );
};

export default MainApp;
