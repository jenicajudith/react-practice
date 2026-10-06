

import { Button } from 'bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Api/Post';
import Get from './Api/Get';
import Contentmain from './Usecontext/Contentmain';

import{BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Usememo from './Usememo/Usememo';
import Form from './Form/Form';
import Counter from './Usestate/Counter';
import Char from './Usestate/Char';
import Useeffect from './usestate/Useeffect';
import Useform from './Usereduce/Useform';
// import Navlink from './Nav/Navlink';
import Component from './Component/Component';
import Useeffectt from './Useeffect/Useeffectt';
import Usestatehook from './usestate/Usestatehook';
import Usecallback from './Usecallback/Usecallback';
import Usereducer from './Usereduce/Usereducer';
import Tailwind from './tailwind/Tailwind';
// import Labels from './Learning/Labels';
import Components from './Learning/Components';
import Calculate from './Usereduce/Calculate';
import Clock from './usestate/clock';
import Bgcolor from './usestate/Bgcolor';

import Materialui from './Material/Materialui';
import Wordpage from './redux/Wordpage';
import Student from './Student';
import Input from './Input';
import Registers from './Form/Registers';
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Userdetail from './Userdetail';
import Usemem from './Api/usemem/Usemem';
import UserContext from "./Api/usemem/UserContext";
import Learn from './learn/Learn';
function App() {
  return (  
    <>
 {/* <Components></Components> */}
 
    <BrowserRouter>

      <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
            </nav>
   <Routes>
   <Route path="learn" element={<Learn></Learn>}></Route>
    <Route path="child" element={<UserContext></UserContext>}></Route>
    <Route path="mem" element={<Usemem></Usemem>}></Route>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />}/> 
    <Route path="/users/:id" element={<Userdetail />}></Route>
   <Route path="input" element={<Input></Input>}></Route>
   <Route path="stu" element={<Student></Student>}></Route>
   <Route path="tail" element={<Tailwind></Tailwind>}></Route>
   <Route path="Post" element={<Post/>}></Route>
   <Route path="Get" element={<Get/>}></Route>
    <Route path="/e" element={<Contentmain />}></Route>      
    <Route path="memo" element={<Usememo/>}></Route>
    <Route path="/" element={<Form/>}></Route>
    {/* <Route path="pass" element={<Pass/>}></Route> */}
    <Route path="component" element={<Component></Component>}></Route>      
    <Route path="counter" element={<Counter/>}></Route>
    <Route path="char" element={<Char/>}></Route>
    <Route path="use" element={<Useeffect/>}></Route>
    <Route path="call" element={<Usecallback/>}></Route>
    <Route path="cal" element={<Calculate></Calculate>}></Route>
    <Route path="reducer" element={<Usereducer/>}></Route> 
    <Route path="useeffect" element={<Useeffect></Useeffect>}></Route>
    <Route path="usestate" element={<Usestatehook></Usestatehook>}></Route> 
    <Route path="bg" element={<Bgcolor></Bgcolor>}></Route>
    <Route path="clock" element={<Clock></Clock>}></Route>
    <Route path="formm" element={<Useform></Useform>}></Route>
    <Route path="mat" element={<Materialui></Materialui>}></Route>
    {/* <Route path="style" element={<Style></Style>}></Route> */}
    <Route path="word" element={<Wordpage></Wordpage>}></Route>
    {/* <Route path="/Nav"  ></Route> */}
    <Route path="register" element={<Registers></Registers>}></Route>
    </Routes>
    </BrowserRouter>
  </>
    

  )
}

export default App;
