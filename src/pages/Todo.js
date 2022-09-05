import React from "react";
import TodoInput from "../layouts/TodoInput";

const Todo = ({todo, setTodo}) => {
  return (
    <div className="panel">
      <h1>Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default Todo;
