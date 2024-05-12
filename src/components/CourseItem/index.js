
import { Link } from "react-router-dom";


const CourseItem=(props)=>{
    const{data}=props
    const{id,logo_url,name}=data
    return(
        <li>
            <Link to={`/courses/${id}`}>
                <img src={logo_url} alt={name}/>
                <p>{name}</p>
            </Link>
        </li>
    )

}

export default CourseItem