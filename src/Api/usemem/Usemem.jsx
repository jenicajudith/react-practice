import { useContext, useMemo, useState } from "react";
import Child from "./Child";

function Usemem(){
    const[num ,Setnum]=useState(1000000);
  const memo= useMemo(()=>{
  
            let sum=0;
            for(let i=1;i<=num;i++){
                sum=sum+i;
            }
            return sum;
   },[num]);

   function ProductList() {

    const products =[
        "Laptop",
        "Phone",
        "Headphones",
        "Keyboard",
        "Mouse",
        "Monitor"
    ];
     const [search, setSearch] = useState("");
     const pro=useMemo(()=>{
        return products.filter(product=>
         product.includes(search)

        );
     },[search]);
    }
    
        const UserContext = createContext();

        
    }
    return(
        <>
        <UserContext.Provider
            value={{
                name: "Jenica",
                email: "jenica@gmail.com"
            }}
        >
            <Child></Child>
            </UserContext.Provider>
            
        <input type="number" onChange=
        {(e)=>{Setnum(Number(e.target.value))}}></input>
        
        <p>sum:{memo}</p>
        <input placeholder="Search" onChange={(e)=>setSearch(e.target.value)} ></input>
        {pro.map(product => (
    <p>{product}</p>))}

    </>
)
export default Usemem;