import {useState} from 'react'
import TaskList from "./components/TaskList"
import NewTaskForm from "./components/NewTaskForm"
import Footer from "./components/Footer"


function App() {
  const [tasks, setTasks] = useState([{id:0, description : 'Изучить JS', completed : true, created : new Date()},
    {id:1, description : 'Изучить React', completed : false, created : new Date()},
    {id:2, description : 'Изучить Node', completed : false, created : new Date()}
 ])

  const activeTasks = tasks.filter((task) => {
  return !task.completed
 })

 function toggleTask(id) {
    setTasks(tasks.map((task) => {
    if (task.id === id) {
      return {...task, completed: !task.completed}
    }
    return task
  }))
 }

 function deleteTask(id) {
  setTasks(tasks.filter((task) => {
    return task.id !== id
  }))
 }

 function editTask(id, newText) {
  setTasks(tasks.map((task) => {
    if (task.id === id) {
      return {...task, description: newText}
    }
    return task
  }))
 }

  return (
    <section className="todoapp">
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm />
    </header>
    <section className="main">
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask}/>
      <Footer activeTasks={activeTasks.length}/>
    </section>
  </section>
  )
}

export default App

