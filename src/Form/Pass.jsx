import { useState } from "react";

function Pass(){

    const[pass,Setpass]=useState("");
    const[confirm,Setconfirm]=useState("")
    const[age,Setage]=useState("");
    function check(e){
         e.preventDefault();
         if(age>60|| age<16){
            alert("Age cannot be validated "
            )
        }

        if(pass!==confirm){
            alert("password mismatched")
        }
        else{
            alert("Password matched")
        }
       
       

    }


    return(
        <>
        <form className=" row p-5 w-50 d-flex justify-center">
        <label> Password</label>
        <input type="text" placeholder="Enter the password " onChange={(e)=>(Setpass(e.target.value))}></input>
        <label> Confirm Password</label>
        <input type="text" placeholder="Confirm password"  onChange={(e)=>(Setconfirm(e.target.value))}></input>
        <label>Age</label>
        <input type="text" placeholder="enter age"  onChange={(e)=>(Setage(e.target.value))}></input>
        <button className="btn btn-primary mt-2"onClick={check}>Submit</button>
       </form>
        </>
    )
}
export default Pass;