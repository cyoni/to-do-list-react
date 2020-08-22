import React from 'react';
import ToDoData from "./ToDoData.js"
import ToDo from "./ToDo.js"

function App() {

  const tasks = ToDoData.map(item => <ToDo key={item.id} item={item}/>)
  return (
    <div>
       {tasks}
    </div>
  )
}

export default App;
