import { useRef, useState } from "react";

function Input(){
    const[inp,Setinp]=useState("");
    const inputs=useRef();

    

    function focus(){
        inputs.current.focus()
    }
    

    return(
        <>
        <div className="ml-30 mt-30 border-2 w-50 text-center">

        <input className="mt-5" onChange={(e)=>(Setinp(e.target.value))}  ref={inputs} ></input>
        
        <br></br>
        <br></br>
        <button className="btn btn-primary mb-5 " onClick={focus}>Click</button>
        </div>
        <br></br>
        <p>Display:{inp}</p>
        </>
    )
}
export default Input;