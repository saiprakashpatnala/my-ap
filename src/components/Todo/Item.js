const TodoItem=(props)=>{
    const { data, deleteTask } = props;
    const{id,text}=data

    const ok=()=>{
        deleteTask(id)
    }
    return(
        <li>
        <p>{text}</p>
        <button onClick={ok}>Delete</button>
        </li>
    )
}

export default TodoItem