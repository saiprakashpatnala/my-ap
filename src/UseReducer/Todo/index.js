import { useReducer } from "react";
import {v4 as uuidv4} from "uuid"

const reducer = (state, action) => {
  if (action.type === "text") {
    return {
      ...state,
      text: action.payload,
    };
  } else if (action.type === "add") {
    return {
      ...state,
      arr: action.payload,
    };
  }
  else if(action.type==="delete"){
    return{
        ...state,
        arr:action.payload
    }
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, { text: "", arr: [] });

  const addTodo=(e)=>{
    e.preventDefault()

    let newTodo={
        id:uuidv4(),
        text:state.text
    }
    let kk=[...state.arr,newTodo]
    dispatch({
        payload:kk,
        type:"add"
    })

    dispatch({
        payload:"",
        type:"text"
    })

  }

  const deleteTodo=(id)=>{
  let filteredArr=state.arr.filter(i=>i.id!==id)
  dispatch({payload:filteredArr,type:"delete"})
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={state.text}
          onChange={(e) => dispatch({ payload: e.target.value, type: "text" })}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.arr.map(i=>
            <li key={i.id}>
              <p>{i.text}</p>
              <button onClick={()=>deleteTodo(i.id)}>Delete</button>
            </li>
        )}
      </ul>
    </>
  );
};

export default Todo;
