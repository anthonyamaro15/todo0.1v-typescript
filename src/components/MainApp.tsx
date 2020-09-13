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

  const deleteTodo = (todo: Todos) => {
    let filtered = data.filter((t) => t.todo !== todo.todo);
    setData(filtered);
  };

  const toggleTodos = (todo: Todos) => {
    let isCompleted = data.map((t) => {
      if (todo.todo === t.todo) {
        return {
          ...t,
          complete: !t.complete,
        };
      }
      return t;
    });
    setData(isCompleted);
  };

  return (
    <div className="MainApp">
      <AddForm addTodo={addTodo} />
      <DisplayTodos
        data={data}
        deleteTodo={deleteTodo}
        toggleTodos={toggleTodos}
      />
    </div>
  );
};

export default MainApp;
