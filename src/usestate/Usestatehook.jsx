import { useState } from "react";

function Usestatehooks(){
    const [current,Setcurrent]=useState("hello");
    const[input1,Setinput1]=useState("");
    const[input2,Setinput2]=useState("");
    const[dis,Setdis]=useState("");
    function add(){
        Setdis(input1+input2);
    }


  
    return(
       <>
       <div className="bg-danger">
        <h1>{current}</h1>
        <button onClick={()=>Setcurrent("hello world")}>Change</button>
        <br></br>
        </div>
        <input type="text" placeholder="value 1" onChange={(e)=>Setinput1(Number(e.target.value))}/>
        
        <input type="text" placeholder="value 1" onChange={(e)=>Setinput2(Number(e.target.value))}/>
        
        <button onClick={add} className="btn btn-primary">add</button>
        <p>Ans:{dis}</p>

        </>
    )
}
export default Usestatehooks;