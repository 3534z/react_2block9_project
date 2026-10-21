function TasksFilter(props) {
    return (
        <ul className="filters">
          <li>
            <button className={props.filter === 'all' ? 'selected' : ''} onClick={() => props.setFilter('all')}>All</button>
          </li>
          <li>
            <button className={props.filter === 'active' ? 'selected' : ''} onClick={() => props.setFilter('active')}>Active</button>
          </li>
          <li>
            <button className={props.filter === 'completed' ? 'selected' : ''} onClick={() => props.setFilter('completed')}>Completed</button>
          </li>
        </ul>
    )
}

export default TasksFilter