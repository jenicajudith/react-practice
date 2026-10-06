import { useState } from "react";

function Contentmain(){
   const [age,Setage]=useState(21);

return(
    <>
    <p>{age}</p>
    <button onClick={()=>Setage(age+1)}>Increase</button>
   
    </>
);
}
export default Contentmain;