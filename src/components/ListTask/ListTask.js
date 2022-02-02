import { ItemTask } from "../ItemTask/ItemTask"
import { Message } from "../Message/Message"

const ListTask = ({tasks, handleCheck, deleteTask}) => {
    console.log("tareas desde listitems", tasks)

    return (
        <div className="container-list-task">
            {
                tasks.length > 0
                ?
                tasks.map(task => <ItemTask key={task.id} task={task} handleCheck={handleCheck} deleteTask={deleteTask}/>)
                : 
                <Message />
            }
        </div>
    )
}

export { ListTask }