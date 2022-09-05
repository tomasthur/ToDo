import React from 'react'

const TodosContainer = ({todos, setTodos}) => {
  return (
    <div className='todosContainer'>
        {todos.map(todo => (
            <h1>{todo.text}</h1>
        ))}
    </div>
  )
}

export default TodosContainer