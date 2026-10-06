import { useParams } from "react-router-dom";

function Userdetail(){
    const{id}=useParams();
    return(
    <>
    <h1>user details</h1>
    <p>User id :{id}</p>
    </>
    )
}
export default Userdetail;