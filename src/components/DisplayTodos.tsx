import React from "react";

interface Inputs {
  todo: string;
  complete: boolean;
}
interface Props {
  data: Inputs[];
}
const DisplayTodos: React.FC<Props> = ({ data }) => {
  console.log("from display ", data);
  return (
    <div className="DisplayTodos">
      {data.map((t, i) => (
        <p key={i}>{t.todo}</p>
      ))}
    </div>
  );
};

export default DisplayTodos;
