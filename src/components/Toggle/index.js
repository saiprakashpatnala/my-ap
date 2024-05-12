import {useState} from "react"

const Toggle=()=>{
    const[toggle,setToggle]=useState(true)
    return(
        <>

        <h1>Toggle</h1>
        {toggle?<p>Show</p>:<p>Hide</p>}
        <button onClick={()=>setToggle(!toggle)}>Toggle Text</button>
        </>
    )

}

export default Toggle