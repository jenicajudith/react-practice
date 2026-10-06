import { createContext, useContext, useState, useRef, useMemo, useCallback } from "react";
import Useeffect from "./usestate/Useeffect";

function Students(){
    const[count,Setcount]=useState(5);
    const focusref= useRef();
   const[value,Setvalue]=useState(0);
   const incre= useCallback(()=>{
        Setvalue(value+1);
   },[value]);

    function focus(){
    focusref.current.focus();
    }
    function increase(){

        Setcount(count+1);
    }
    const state=useMemo(()=>{
        return count*count
    },[count]);

    // Useeffect(()=>{
    //     document.title="react learning"

    // },[]);
       
    // const themee=useContext(theme);

  
   

  

    return(
        <>
        <p>{count}</p>
        <p>square:{state}</p>
        <button onClick={increase}>increase</button>

        {/* <p>{themee}</p> */}
        <p >Focus input</p>
        <input ref={focusref}/>
        <button onClick={focus}>click</button>

        <p>Count:{value}</p>
        <button onClick={incre}>count</button>
        
   
        </>
    )
}
export default Students;

// function app(){
// const theme=createContext();

//     const theme=useContext(theme);

//     return(
//         <>
//         <Theme.Provider value="dark">
//             <Student></Student>
//         </Theme.Provider>
//         </>
//     )
// }

