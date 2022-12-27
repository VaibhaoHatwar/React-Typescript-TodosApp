import { useRef, useContext } from "react"
import { TodosContext } from "../context/todos-context"

import classes from "../styles/NewTodo.module.css"

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current!.value

    if (enteredText?.trim().length === 0) {
      // throw an erroe
      return
    }

    todosCtx.addTodo(enteredText)
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  )
}

export default NewTodo
