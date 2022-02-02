import {useState} from 'react'
import './App.css';
import { Form } from './components/Form/Form'
import { ListTask } from './components/ListTask/ListTask'

//Recuperación de tareas del local storage.
const GET_TASKS_TO_LS = JSON.parse(localStorage.getItem("SET_STATE"))
 
function App() {
  const [valueInput, setValueInput] = useState("")
  const [tasks, setTasks] = useState(GET_TASKS_TO_LS || [])

  //Declaración de nueva tarea.
  const NEW_TASK = {
    id: Math.floor(Math.random() * 50000),
    name: valueInput,
    hour: new Date().toLocaleString(),
    check: false
  }

  const saveValueTask = (e) => {
    const { value } = e.target
    setValueInput(value)
  }

  const sendNewTask = (e) => {
    e.preventDefault()
    const NEW_ARRAY_TASKS = [...tasks, NEW_TASK]
    setTasks(NEW_ARRAY_TASKS)
    setValueInput("")
  }

  const handleCheck = (id) => {
    const SET_CHECK = [...tasks].map(task => task.id === id ? {...task, check: !task.check} : {...task})
    setTasks(SET_CHECK)
    localStorage.setItem("SET_STATE", JSON.stringify(SET_CHECK))
  }

  const deleteTask = (id) => {
    const filteredTasks = [...tasks].filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <div className='app-content'>
        <Form 
          saveValueTask={saveValueTask} 
          valueInput={valueInput} 
          sendNewTask={sendNewTask}
        />
        <ListTask 
          tasks={tasks} 
          handleCheck={handleCheck} 
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
