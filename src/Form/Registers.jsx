import { useState } from "react";
function Registers(){
    const[name,Setname]=useState("");
    const[email,Setemail]=useState("");
    const[pass,Setpass]=useState("");
    return(
        <>
            <form>
            <label>Name</label>
            <input type="text" placeholder="enter name" onChange={(e)=>(Setname(e.target.value))}></input>
            <br></br>
            <label>Email</label>
            <input type="email" placeholder="enter email" onChange={(e)=>(Setemail(e.target.value))}></input>
                        <br></br>

            <label>password</label>
            <input type="password" placeholder="enter password" onChange={(e)=>(Setpass(e.target.value))}></input>
                        <br></br>

            <button className="btn btn-primary">Submit</button>
                        

            <button className="btn btn-primary" onClick={()=>{
                Setname("");Setemail("");Setpass("")}}>Clear</button>
            <div >Preview
                <p>{name}</p>
                <p>{email}</p>
                <p>{pass}</p>
            </div>
        <textarea></textarea>
        </form>
        </>
    )
}
export default Registers;