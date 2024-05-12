import { useState,useEffect } from "react"

const CustomFetch=(url)=>{
    const[arr,setArr]=useState([])
    useEffect(()=>{
        const getData=async()=>{
            try{
            const response=await fetch(url)
            const data=await response.json()
            setArr(data)
            }
            catch(e){
                console.log(e)
            }
        }
        getData()
    },[url])

    return [arr]

}


export default CustomFetch