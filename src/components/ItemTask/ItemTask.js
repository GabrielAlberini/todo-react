const ItemTask = ({task, handleCheck, deleteTask}) => {
    const { name, id, hour, check } = task;

    return (
        <div className="container-item-task">
                <p><b>Task ID: </b>{id}</p>
                <p><b>Task: </b>{name}</p>
                <p><b>Registered hour: {hour}</b></p>
                <input 
                    type="checkbox"
                    checked={check}
                    onChange={() => {handleCheck(id)}} 
                />
                <span style={check ? {color: "green"} : null}> TAREA REALIZADA</span><br/>
                <button onClick={()=> {deleteTask(id)}}>Borrar tarea</button>
        </div>
    )
}

export { ItemTask }