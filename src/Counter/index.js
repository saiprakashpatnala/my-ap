import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "../Slice"

const Counter=()=>{
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    return(
        <>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment(3))}>+</button>
        <button onClick={()=>dispatch(decrement(12))}>-</button>
        </>
    )
}

export default Counter