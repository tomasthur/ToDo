import React from "react";

const TodoInput = ({ todo, setTodo, todos, setTodos }) => {
  const makeTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: todo, completed: false, id: Math.random()* 1000}]);
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
