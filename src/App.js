import { useState } from "react";
import "./App.css";
import Todo from "./pages/Todo";

function App() {

  const [todo, setTodo] = useState("");

  return (
    <div className="container">
      <Todo todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
