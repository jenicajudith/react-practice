import { Link, Outlet } from "react-router-dom";
import Useeffect from "../Useeffect/Useeffect";
import Usestatehooks from "../usestate/Usestatehook";

function Navlink(){
    return(
        <>
        <div className="d-flex gap-4">
        Welcome
    
      <Link to="/home/component" className="btn btn-primary">Component page</Link>
       <Link to="/home/useeffect" className="btn btn-warning">Useeffect page</Link>
      <Link to="/home/usestate" className="btn btn-danger">Usestate page</Link>
       
</div>
<Outlet></Outlet>
        
        </>
    )
}
export default Navlink;