import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../core/Base";

const EditUser =({user,setUser}) => {
    const[name,setName]=useState("");
    const[idx, setIdx]=useState("");
    const[email, setEmail] = useState("");
    const[exeprience, setExeprience]=useState("");
    const[batch, setBatch] = useState("");

    const {id}= useParams();
    const history = useHistory()
    const selectedUser = user.find((per ,index)=>per.id === id);

    useEffect(() =>{
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setEmail(selectedUser.email)
        setExeprience(selectedUser.exeprience)
        setBatch(selectedUser.batch)
    },[]);
        
     const updateUser =() =>{
        const editIndex = user.findIndex(per => per.id === id)
        const editedData ={
            id : idx,
            name,
            email,
            exeprience,
            batch
        }
        user[editIndex] = editedData;
        setUser([...user]);
        history.push("/");
        
     }
    return (
        <BaseApp
        title={"Edit the Vikram Movie user details"}
        >
    
    <div>
               
               <input
                placeholder="id"
               value={idx}
               onChange={(event)=>setIdx(event.target.value)}
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
               onClick={updateUser}
               >✏️</button>
            
           
           
           
              </div>
        </BaseApp>
    )
}

export default EditUser