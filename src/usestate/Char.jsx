import { useState } from "react";

function Char(){
    const[char,setChar]=useState("");
  


    


    return(
        <>
        <input type="text" onChange={(e)=>setChar(e.target.value)}></input>
        <h3>{char.length}</h3>
        </>
    );
}
export default Char;