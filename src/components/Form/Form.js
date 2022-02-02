const Form = ({valueInput, saveValueTask, sendNewTask}) => {
    return (
        <form 
            type="submit" 
            onSubmit={(e) => {sendNewTask(e)}}>
          <input 
            type="text"
            value={valueInput}
            placeholder='Añade tarea'
            onChange={(e) => {saveValueTask(e)}} />
          <button>
              Add task
          </button>
        </form>
    )
}

export { Form };