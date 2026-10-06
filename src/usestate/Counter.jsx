import { useState } from "react";

function Counter(){
    const[count,Setcount]=useState(0);
   

    function incre(){
        Setcount(count+1);

    }
    function decre(){
        if(count>0){
        Setcount(count-1);
        }
    }
    function reset(){
        Setcount(0);
    }



    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default Counter;