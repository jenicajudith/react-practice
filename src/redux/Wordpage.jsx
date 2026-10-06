import { useDispatch, useSelector } from "react-redux";
import {add} from "./Createslice"
function Wordpage(){

 const word=useSelector((state)=>state.Send.word);
 const dispatch=useDispatch();
    return(
        <>
        <p>{word}</p>
        <button onClick={()=>dispatch(add("hello"))}>add text</button>
        
        </>
    )
}
export default Wordpage;