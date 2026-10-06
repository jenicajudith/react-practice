import { useState } from "react";

function Form(){
    const[name,Setname]=useState("");
    const[email,Setemail]=useState("");
    const[pass,Setpass]=useState("");
    const[num,Setnum]=useState("");

    

    function submit(e){
        e.preventDefault();
      if (name === "" || email === "" || pass === "" || num === "") {
            alert("Enter all the credentials");
            return;
        }

    
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Enter a valid email");
            return;
        }

        // Password validation
        const passwordPattern =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;

        if (!passwordPattern.test(pass)) {
            alert(
                "Password must contain at least 8 characters, one uppercase, one lowercase and one number"
            );
            return;
        }

        // Phone validation
        if (!/^[0-9]{10}$/.test(num)) {
            alert("Mobile number must contain exactly 10 digits");
            return;
        }

        alert("Submitted successfully");
    
    }
    return(
        <>
        <form className="d-flex row align-items-center m-5"  >
        <label>Name</label>
        <input  type="text" placeholder="Enter your name" onChange={(e)=>Setname((e.target.value))}></input>
        <br></br>
        <label>Email</label>
        <input type="text" placeholder="Enter your email" onChange={(e)=>Setemail((e.target.value))}></input>
         <br></br>
        <label>Password</label>
        <input type="text" placeholder="Enter your password" onChange={(e)=>Setpass((e.target.value))}></input>
         <br></br>
        <label>Phone num</label>
        <input type="text" placeholder="Enter your num" onChange={(e)=>Setnum((e.target.value))}></input>
         <br ></br>
        <button className="btn btn-primary mt-2" onClick={submit} >Submit</button>
        </form>
        </>
    )

}
export default Form;
