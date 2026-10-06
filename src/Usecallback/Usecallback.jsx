import { useState,useCallback} from "react";
function Usecallback(){
  const[value,Setvalue]=useState(0);
  const[future,Setfuture]=useState(0);

  function callback(){
    console.log(value+10);
    return value+10
  }
  const call=useCallback(()=>{
    return callback();
  },[value])

    return(
        <>
        <p> Callback count: {value}</p>
        <button onClick={()=>Setvalue(value+1)} >Increment</button>
        <p>Future:{future}</p>
        <button onClick={()=>Setfuture(call())}>Call</button>
        </>
    )
}
export default Usecallback;