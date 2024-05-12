import {useReducer} from "react"


const GitHubUser=()=>{

    const reducer=(state,action)=>{
        if(action.type==="user"){
            return{
                ...state,
                text:action.payload
            }

        }
        else if(action.type==="getData"){
            return{
                ...state,
                data:action.payload
            }
        }
    }

    let getData=async(e)=>{
        
        try{

            let response=await fetch(`https://api.github.com/users/${state.text}`)
            let data=await response.json()

            dispatch({type:"getData",payload:data})

        }

        catch(e){
            console.log(e)
        }
    
    }

    getData()
    

    const[state,dispatch]=useReducer(reducer,{text:"",data:null})
    console.log(state.data)
    return (
      <>
        <input
          type="search"
          value={state.text}
          onKeyDown={()=>getData()}
        />
      </>
    );
}

export default GitHubUser