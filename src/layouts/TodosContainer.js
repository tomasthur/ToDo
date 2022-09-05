import React, { useState } from "react";

const TodosContainer = ({ todos, setTodos }) => {

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const doneSwitcher = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todosContainer">
      {todos.map((todo) => (
        <div className="card">
          <h3 className={todo.completed ? "green" : ""}>{todo.text}</h3>
          <button onClick={() => doneSwitcher(todo.id)}>Hotovo!</button>
          <button onClick={() => deleteTodo(todo.id)}>Vymazat ulohu</button>
        </div>
      ))}
    </div>
  );
};

export default TodosContainer;
