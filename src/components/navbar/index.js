import {Link} from "react-router-dom"


const Navbar=()=>{
    return (
      <nav>
        <Link to="/">
          <p>Home</p>
        </Link>
      </nav>
    );
}

export default Navbar