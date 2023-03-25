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
   const[category, setCategory] = useState("");

   const addTeacherNewUser =()=>{
    const newUser = {
        id,
        name,
        email,
        batch,
        category,
        exeprience
    }
    
    setUser([...user,newUser]);
    history.push("/")




    setName("");
    setBatch("");
    setEmail("");
    setExeprience("");
    setId("");
    setCategory("");

   }


    return(
    <BaseApp
    title={addTeacherNewUser}
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

           <input placeholder="category"
           value={category}
           onChange={(event)=>setCategory(event.target.value)}
           />




           <input placeholder="batch"
           value={batch}
           onChange={(event)=>setBatch(event.target.value)}
           />



           <button
           onClick={addTeacherNewUser}>Add</button>
        
       
       
       
          </div>
    </BaseApp>
        

    )
}