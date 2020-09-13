import React from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  todo: string;
  complete: boolean;
}

interface Props {
  addTodo: (obj: Inputs) => void;
}

const AddForm: React.FC<Props> = ({ addTodo }) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit = (values: Inputs) => {
    let newValues = { ...values, complete: false };
    addTodo(newValues);
    reset();
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add Todo"
            ref={register({ required: true })}
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddForm;
