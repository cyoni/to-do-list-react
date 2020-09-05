import React from 'react';
import ToDoData from "./ToDoData.js"
import ToDo from "./ToDo.js"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        todos: ToDoData,
        completed: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(id) {
    let completed
    this.setState(prevState => {
      completed = prevState.completed
      const updatedToDos = prevState.todos.map(todo => {
        if (todo.id === id) {
          const status = !todo.completed
          todo.completed = status
          if (status)
            completed++
          else
            completed--
        }
        return todo
      })
      return {
        todos: updatedToDos,
        completed: completed
      }
    })
  }


  render() {
    const tasks = ToDoData.map(item => <ToDo key={item.id} item={item} handleClick={this.handleClick} />)

    return (
      <div>
        <h1>My Tasks</h1>
        {tasks}
        <p>Completed: {this.state.completed}, remaining: 100, total: {tasks.length}</p>
      </div>
    )
  }
}

export default App;
