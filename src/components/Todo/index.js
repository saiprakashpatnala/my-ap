import {useState} from "react"
import {v4 as uuidv4} from "uuid"
import TodoItem from "./Item"


const Todo=()=>{
    const[text,setText]=useState("")
    const[arr,setArr]=useState([])

    const enterTodo=(e)=>{

        e.preventDefault()

        let newTodo={
            id:uuidv4(),
            text
        }

        setArr([...arr,newTodo])

        setText('')

    }

    const deleteTask=(id)=>{
        let filteredTasks=arr.filter((i)=>i.id!==id)

        setArr(filteredTasks)
    }
    return (
      <>
        <h1>Tasks</h1>
        <form onSubmit={enterTodo}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
            {arr.map(i=>
                <TodoItem data={i} key={i.id} deleteTask={deleteTask}/>
            )}
        </ul>
      </>
    );
}

export default Todo