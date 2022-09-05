import React from "react";
import TodoInput from "../layouts/TodoInput";
import TodosContainer from "../layouts/TodosContainer";

const Todo = ({todo, setTodo, todos, setTodos}) => {
  return (
    <div className="panel">
      <h1>Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}/>
      <TodosContainer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
