import TasksFilter from "./TasksFilter"

function Footer(props) {
    return (
        <footer className="footer">
        <span className="todo-count">{props.activeTasks} items left</span>
        <TasksFilter filter={props.filter} setFilter={props.setFilter}/>
        <button className="clear-completed" onClick={() => props.clearCompleted()}>Clear completed</button>
      </footer>
    )
}

export default Footer