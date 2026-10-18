import { useState } from "react"

function NewTaskForm(props) {
    const [text, setText] = useState('')

    return (
       <input className="new-todo" placeholder="What needs to be done?"
        autoFocus value={text} onChange={(event) => {
            setText(event.target.value)
        }} onKeyDown={(event) => {

            if (event.key === 'Enter' && text.trim() !== '') {
                props.addTask(text.trim())
                setText('')
            }
        }}/>
    )
}

export default NewTaskForm