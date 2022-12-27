import { useRef } from "react"

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current?.value

    if (enteredText?.trim().length === 0) {
      // throw an erroe
      return
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  )
}

export default NewTodo
