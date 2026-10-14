import Task from "./Task"

function TaskList(props) {
    return (
        <ul className="todo-list">{
            props.tasks.map((task) => {
                return <Task key={task.id} description={task.description} completed={task.completed} created={task.created}/>
            })
        }
        </ul>
    )
}

export default TaskList