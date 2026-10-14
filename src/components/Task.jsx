function Task(props) {
    return (
         <li className={props.completed ? 'completed': ''}>
          <div className="view">
            <input className='toggle' type="checkbox" checked={props.completed} />
            <label>
              <span className="description">{props.description}</span>
              {/* <span className="created">created 17 seconds ago</span> */}
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
    )
}

export default Task