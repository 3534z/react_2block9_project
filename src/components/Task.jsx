import { useState } from "react"
import { formatDistanceToNow } from "date-fns"

function Task({
  id,
  description,
  completed = false,
  created,
  toggleTask,
  deleteTask,
  editTask}) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(description)

    const timeText = formatDistanceToNow(created)

    return (
         <li className={completed ? 'completed': ''}>
          <div className="view">
            <input className='toggle' type="checkbox" checked={completed}
             onChange={() => {
                toggleTask(id)
            }}/>
            <label>
              <span className="description">{isEditing ? <input type="text" value={editText} onChange={(event) => {
                setEditText(event.target.value)
              }} onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    editTask(id, editText)
                    setIsEditing(false)}}}/> : description}</span> 
              <span className="created">created {timeText} ago</span>
            </label>
            <button className="icon icon-edit" onClick={() => {
                setIsEditing(true)
            }}></button>
            <button className="icon icon-destroy" onClick={() => {
                deleteTask(id)
            }}></button>
          </div>
        </li>
    )
}

export default Task