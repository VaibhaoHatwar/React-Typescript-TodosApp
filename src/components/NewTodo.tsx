const NewTodo = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add todo</button>
    </form>
  )
}

export default NewTodo
