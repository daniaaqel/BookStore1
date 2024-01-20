import { useState } from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const Header = ()=>{
    /* To make navbar appears when click on hubrger icon on less than 720 screen */ 
    const[toggle,setToggle]=useState(false);
   return(
       <header className="header">
           <HeaderTop setToggle={setToggle} toggle={toggle}/>
           <HeaderMiddle/>
           {/* pass as props */}
           <Navbar toggle={toggle} setToggle={setToggle}/>
       </header> 
    );
 }
    
    export default Header;