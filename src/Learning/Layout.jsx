function Layout(props){
     return(
     <>
     <button className="btn btn-warning" onClick={props.onClick}>
        {props.label}</button>
     
     </>
    );
}
export default Layout;