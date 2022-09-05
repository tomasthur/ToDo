import React from "react";

const TodoInput = ({ todo, setTodo }) => {
  const makeTodo = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodo('');
  };

  return (
    <div id="addTodoPanel">
      <form onSubmit={makeTodo}>
        <input
          type="text"
          placeholder="Sem napis, co potrebujes urobit..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" id="plusButton">+</button>
      </form>
    </div>
  );
};

export default TodoInput;
