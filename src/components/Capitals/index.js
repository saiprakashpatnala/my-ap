import {useState} from "react"

const capitals = [
  { id: 1, name: "London", country: "United Kingdom" },
  { id: 2, name: "Paris", country: "France" },
  { id: 3, name: "Berlin", country: "Germany" },
  { id: 4, name: "Madrid", country: "Spain" },
  { id: 5, name: "Rome", country: "Italy" },
];


const Capitals=()=>{

    const [cap,setCap]=useState("")
    
    console.log(cap)
    return (
      <>
        <select value={cap} onChange={(e) => setCap(e.target.value)}>
          {capitals.map((i) => (
            <option key={i.id} value={i.name}>
              {i.country}
            </option>
          ))}
        </select>
        <p>{cap}</p>
      </>
    );
}

export default Capitals