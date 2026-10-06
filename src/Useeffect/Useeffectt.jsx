import { useEffect, useState } from "react"

function Useeffectt(){
   useEffect(()=>{
    console.log("loaded")
   })
   const [current,Setcurrent]=useState(0);
   const [word,setword]=useState("");
   const [list,setlist]=useState([]);
   function add(){
    SetList([...list,word]);
   }
    return(
        <>
        <p>{current}</p>
        <button onClick={()=>Setcurrent(current+1)}>Increment</button>
        <button  onClick={()=>list}>Alert</button>
        </>
    )
}
export default Useeffectt;