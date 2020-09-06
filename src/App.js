import React from 'react';
import ToDoData from "./ToDoData.js"
import ToDo from "./ToDo.js"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        todos: ToDoData,
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(id) {
    this.setState(prevState => {
      const updatedToDos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedToDos,
      }
    })
  }

  render() {
    const tasks = ToDoData.map(item => <ToDo key={item.id} item={item} handleClick={this.handleClick} />)
    const counter = ToDoData.reduce((total, item) => total + (item.completed ? 1 : 0), 0)
    const remaining = ToDoData.reduce((total, item) => total + (item.completed ? 0 : 1), 0)

    return (
      <div>
        <h1>My Tasks</h1>
        {tasks}
        <p>Completed: {counter}, remaining: {remaining}, total: {tasks.length}</p>
      </div>
    )
  }
}

export default App;
