import { useState } from "react";

function Learn(){
   const[name,Setname]=useState("");
   const[inputs,Setinput]=useState("");


   function submitt(){
    Setinput(name);
    
   }


    return(
        <>
        <input placeholder="enter name" onChange={(e)=>{Setname(e.target.value)}}></input>
        
        <button onClick={submitt}>submit</button>
        <p>hello,{inputs}</p>
        </>
    )
}
export default Learn;
