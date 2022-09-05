import { useState } from "react";
import "./App.css";
import Todo from "./pages/Todo";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <Todo todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
