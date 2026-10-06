import { useMemo } from "react";
import { useState } from "react";


function Usememo(){
    const[value,Setvalue]=useState(0);
    function loop(){

        if(value===100){
            return 100;
        }
        loop(value+1)
        // for(let i=0;i<1000;i++){
        //     console.log(i);
        // }
        return value+10;
    }
    const future=useMemo(()=>{
       return loop(value);
    },[value])
    const [data,Setdata]=useState("");

    // 


    return(
        <>
        <p>{value}</p>
        <button onClick={()=>Setvalue=(value+1)}>Click</button>
        <p>{future}</p>
        <input onChange={(e)=>Setdata=(e.target.value)}></input>
        <p>data;{data}</p>

</>
)}
export default Usememo;