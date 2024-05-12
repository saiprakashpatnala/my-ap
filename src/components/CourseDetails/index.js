import { useParams } from "react-router-dom";
import CustomFetch from "../../CustomHooks";


const CourseDetails=()=>{
    const{id}=useParams()
    const arr=CustomFetch(`https://apis.ccbp.in/te/courses/${id}`)
    console.log(arr)
    return(
        <>
        <h1>kk</h1>
        </>
    )
}

export default CourseDetails