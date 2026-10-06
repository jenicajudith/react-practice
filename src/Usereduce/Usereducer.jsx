import { useReducer, useRef } from "react";

function Usereducer(){
function arithmetic(state,action){
    console.log(action);
    switch(action.type){
        case "increment":
            return {count:state.count+1};
            case "decrement":
                return {count:state.count-1};
                case "display":
                    return {input:state.input=action.payload}
                    case "clgdisplay":

                    return{clg:state.clg+=action.payload}

          default:
            return {count:state.count=0};
    }
}
let data={count:0,input:"",clg:""};
    const [math,dispatch]=useReducer(arithmetic,data);
const refs= useRef();
    
function call(){
    dispatch({type:"clgdisplay",payload:refs.current.value})
}
    return(
        <>
        usereducer
        <p>{math.count}</p>
        <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        <button onClick={()=>dispatch({type:""})}>reset</button>
<br></br>
        <input type="text"  onChange={(e)=>dispatch({type:"display",payload:e.target.value})} placeholder="Enter your word"/>
        <input  ref={refs} type="text"  placeholder="Enter your clg"/>
        <button onClick={call}>display</button>

        <p>display word:{math.input}</p>
        <p>display clg:{math.clg}</p>
        
        </>
    )
}
export default Usereducer;