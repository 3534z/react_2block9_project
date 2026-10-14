import TasksFilter from "./TasksFilter"

function Footer(props) {
    return (
        <footer className="footer">
        <span className="todo-count">{props.activeTasks} items left</span>
        <TasksFilter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
}

export default Footer