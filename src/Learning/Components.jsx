// import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Layout from "./Layout";
import Usercard from "./Usercard";

function Components(){
     function save(){
        alert("Saved Successfully");
    
   
   
    
    return(
        <>
        <Header props="This is the header"></Header>
        <Usercard name="Judith" age="21" ></Usercard>
        <Layout label="Save"  onClick={save}></Layout>
        <Footer text="This is the footer"></Footer>
        </>
    )
}
}
export default Components;