function Task(props) {
    const difference = Date.now() - props.created.getTime()
    const seconds = Math.floor(difference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    console.log("created:", props.created);
console.log("difference:", difference);
console.log("seconds:", seconds);
console.log("minutes:", minutes);
console.log("hours:", hours);

    let timeText

    if (seconds < 60) {
        timeText = `${seconds} seconds ago`
    } else if (minutes < 60) {
        timeText = `${minutes} minutes ago`
    } else {
        timeText = `${hours} hours ago`
    }
    return (
         <li className={props.completed ? 'completed': ''}>
          <div className="view">
            <input className='toggle' type="checkbox" checked={props.completed} readOnly/>
            <label>
              <span className="description">{props.description}</span>
              <span className="created">created {timeText}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
    )
}

export default Task