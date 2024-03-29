import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../core/Base";


export function UserDetails({user}){
    const {id} =useParams();
    const person = user[id];
    return(
        <BaseApp
        title={"User details"}
        >
            <div className="user-content">
                <div className="user-card">
                   <h1>{person.name}</h1>
                   <p>Batch : {person.batch}</p>
                   <p>Email : {person.email}</p>
                   <p>category:{person.category}</p>
                   <p>Exp : {person.exeprience}</p> 
                </div>
            </div>

        </BaseApp>
    )
}