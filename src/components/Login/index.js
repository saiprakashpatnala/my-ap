import {useState} from "react"


const Login=()=>{
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")

    const bankLogin=async(e)=>{
        e.preventDefault()
       
       const userDetails = { user_id: name, password };
       const url = "https://apis.ccbp.in/ebank/login";

       const options = {
         method: "POST",
         body: JSON.stringify(userDetails),
       };
       const response = await fetch(url, options);
       const data = await response.json();
       if (response.ok === true) {
         console.log(data)
       } else {
        console.log("Failed")
       }
    }
    return (
      <form onSubmit={bankLogin}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
}

export default Login