import { useState } from "react";

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 25,
    email: "alice@example.com",
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      country: "USA",
    },
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    email: "bob@example.com",
    address: {
      street: "789 Oak St",
      city: "Chicago",
      country: "USA",
    },
  },
];


const UsersList=()=>{
    const[name,setName]=useState("")
    let filteredUsers=users.filter(i=>i.name.toLowerCase().includes(name.toLowerCase()))
    return (
      <div>
        <input
          type="search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {filteredUsers.length === users.length ? (
          ""
        ) : (
          <ul>
            {filteredUsers.map((i) => (
              <li key={i.id}>
                <h1>{i.name}</h1>
                <p>{i.age}</p>
                <p>{i.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}


export default UsersList