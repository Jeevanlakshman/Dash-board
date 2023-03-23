
import { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/Base";

import AddUser from "./AddUser";

export default function UserComponent({user, setUser}) {
 const history =useHistory();

  const deleteUser =(idx)=>{
    const alterList = user.filter((per,id) => per . id !==idx);
    setUser(alterList);
  }



    return(
        <BaseApp
        title="Vikram Movie Role Details">
            <div className="user-content">
               
                
            {user.map((person,idx)=>(
            <div key={idx} className="user-card">
                
                <h1>{person.name}</h1>
                <p>Batch : {person.batch}</p>
                <p>Email : {person.email}</p>
                <p>Exp   : {person.exeprience}</p>
               

                <div className="btn-group">
                    <button 
                    onClick={()=>history.push(`/edit/${person.id}`)}
                    
                    className = "btn edit-btn">✏️</button>

                    <button className = "btn view-btn"
                    
                    onClick={()=>history.push(`/user/${idx}`)}
                
                    >👁️⃤</button>

                    <button className= "btn del-btn"
                    onClick={()=>deleteUser(person.id)}
                    >🗑️</button>


            </div>
            </div>
            
            
            ))}

            </div>
        
        </BaseApp>
    )
}