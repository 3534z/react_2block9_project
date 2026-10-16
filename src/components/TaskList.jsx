import Task from "./Task"

function TaskList(props) {
    return (
        <ul className="todo-list">{
            props.tasks.map((task) => {
                return <Task key={task.id} description={task.description}
                 completed={task.completed} created={task.created}
                  toggleTask={props.toggleTask} id={task.id}
                  deleteTask={props.deleteTask} editTask={props.editTask}/>
            })
        }
        </ul>
    )
}

export default TaskList