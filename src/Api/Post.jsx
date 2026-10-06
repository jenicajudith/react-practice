import axios from "axios";
import { useState } from "react";
function Post(){
   
const [name, Setname]=useState("");
const[age, Setage]= useState("");
const[regno, Setregno]=useState("");
const[password, Setpassword]=useState("");
const[clg,Setclg]=useState("");

const studentform=async(e)=>{


    e.preventDefault();
const studentinfo={
    name,
    reg:regno,
    age,
    password,
    clg,
}
try {
const response=await axios.post("https://152gwfjp-8080.inc1.devtunnels.ms/api/v1/student/reg",studentinfo);
console.log(response.data);
alert(response.data);
}
catch (error) {
console.log("error"+error.message);
alert("error")

}

}
async function studentupdate(e){
    e.preventDefault();
    const studentinfo={
        name,
    reg:regno,
    age,
    password,
    clg,

    }
    try{
        const response=await axios.put("https://152gwfjp-8080.inc1.devtunnels.ms/api/v1/student/update",studentinfo);
        console.log(response.data);
        alert(response.data);
    }
    catch{
        console.log("error"+error.message);
    }


}
async function studentdelete(e){
    e.preventDefault();
    
    try{
    const response=await axios.delete(`https://152gwfjp-8080.inc1.devtunnels.ms/api/v1/student/delete/${regno}`);
    console.log(response.data);
    alert("Deleted");
}
   catch{
    console.log("error"+error.message)
   }
}

return(
    <div classname="d-flex justify-content-center mr-2">
        <div d-flex border-primary p-2 w-50></div>
        <form>
            <p>Student Registration Form</p>
            <input type="text" className="form-control mt-2" placeholder="enter your name"  onChange={(e) => Setname(e.target.value)}></input>
            <input type="text" className="form-control mt-2" placeholder="enter your age"  onChange={(e) => Setage(e.target.value)}></input>
            <input type="text" className="form-control mt-2" placeholder="enter your registration number"  onChange={(e) => Setregno(e.target.value)}></input>
            <input type="text" className="form-control mt-2" placeholder="enter your college" onChange={(e) => Setclg(e.target.value)}></input>
            <input type="password" className="form-control mt-2" placeholder="enter your password"  onChange={(e) => Setpassword(e.target.value)}></input>
            <button  className="btn btn-primary m-2" onClick={studentform}>Submit</button>
            <button className="btn btn-primary m-2" onClick={studentupdate}>Update</button>
            <button className="btn btn-primary m-2 " onClick={studentdelete}>Delete</button>
        
        </form>
    
    </div>
);
}
export default Post;