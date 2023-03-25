import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title , styles ,children}) {

    const history = useHistory();
    return(
     <div> 
        <div>
       
      <div className="nav-styles">
         <span>
            <button 
            className="nav-button"
            onClick={()=>history.push("/add/user")}
            >Add user</button>
         </span>
         <span>
            <button 
            className="nav-button"
            onClick={()=>history.push("/add/Teacher/user")}
            >Add Teacher user</button>
         </span>
         <span>
            <button 
            className="nav-button"
            onClick={()=>history.push("/")}
            >Dashboard</button>
         </span>
       </div>
      <div className="title">{title}</div>
      </div>


      <div className="children"> 
      {children}
      
      <footer>
           <h1>Here We To Help(❁´◡`❁)</h1>
           <div className="dot">Contact US
           <div>email: vikram@gmail.com</div>
           <div>phone : 860****806</div>
           <div>insta : Vikram_Movie </div>
           </div>

      </footer>
      
      
      </div>



     </div>
    )
}