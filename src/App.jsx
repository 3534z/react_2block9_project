import TaskList from "./components/TaskList"
import NewTaskForm from "./components/NewTaskForm"
import Footer from "./components/Footer"

const tasks = [{id:0, description : 'Изучить JS', completed : true, created : new Date()},
    {id:1, description : 'Изучить React', completed : false, created : new Date()},
    {id:2, description : 'Изучить Node', completed : false, created : new Date()}
 ]

 const activeTasks = tasks.filter((task) => {
  return !task.completed
 })

function App() {
  return (
    <section className="todoapp">
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm />
    </header>
    <section className="main">
      <TaskList tasks={tasks}/>
      <Footer activeTasks={activeTasks.length}/>
    </section>
  </section>
  )
}

export default App

