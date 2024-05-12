import {useState,useEffect} from "react"
const FetchData=()=>{
    const[arr,setArr]=useState([])

    useEffect(()=>{

        const fff=async()=>{
            try{
                let response = await fetch(
                  "https://apis.ccbp.in/countries-data"
                );
                let data=await response.json()
                setArr(data)

            }

            catch(e){
                console.log(e)
            }

        }
        fff()

    },[])

console.log(arr)
    return(
        <>
        <h1>FetchData</h1>
        <ul>
            {arr.map(i=>
                <li key={i.index}>
                    <h1>{i.name}</h1>
               <img src={i.flag} alt={i.name}/>
               <p>{i.population}</p>
                </li>
            )}
        </ul>
        </>

    )
}

export default FetchData