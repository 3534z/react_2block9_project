import { useState } from "react"

function Task(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(props.description)

    const difference = Date.now() - props.created.getTime()
    const seconds = Math.floor(difference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

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
            <input className='toggle' type="checkbox" checked={props.completed}
             onChange={() => {
                props.toggleTask(props.id)
            }}/>
            <label>
              <span className="description">{isEditing ? <input type="text" value={editText} onChange={(event) => {
                setEditText(event.target.value)
              }} onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    props.editTask(props.id, editText)
                    setIsEditing(false)
                }
              }}/> : props.description}</span> 
              <span className="created">created {timeText}</span>
            </label>
            <button className="icon icon-edit" onClick={() => {
                setIsEditing(true)
            }}></button>
            <button className="icon icon-destroy" onClick={() => {
                props.deleteTask(props.id)
            }}></button>
          </div>
        </li>
    )
}

export default Task