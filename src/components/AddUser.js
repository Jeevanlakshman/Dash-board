import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/Base";

export default function AddUser({user, setUser}){
  const history =useHistory()

   const[name,setName]=useState("");
   const[id, setId]=useState("");
   const[email, setEmail] = useState("");
   const[exeprience, setExeprience]=useState("");
   const[batch, setBatch] = useState("");

   const addNewUser =()=>{
    const newUser = {
        id,
        name,
        email,
        batch,
        exeprience
    }
    
    setUser([...user,newUser]);
    history.push("/")




    setName("");
    setBatch("");
    setEmail("");
    setExeprience("");
    setId("");

   }


    return(
    <BaseApp
    title={"Add A New User"}
    >

<div>
           
           <input placeholder="id"
           value={id}
           onChange={(event)=>setId(event.target.value)}
           />


           <input placeholder="name"
           value={name}
           onChange={(event)=>setName(event.target.value)}

           />


           <input placeholder="email"
           value={email}
           onChange={(event)=>setEmail(event.target.value)}
           />



           <input placeholder="exeprience"
           value={exeprience}
           onChange={(event)=>setExeprience(event.target.value)}
           />



           <input placeholder="batch"
           value={batch}
           onChange={(event)=>setBatch(event.target.value)}
           />



           <button
           onClick={addNewUser}>Add</button>
        
       
       
       
          </div>
    </BaseApp>
        

    )
}