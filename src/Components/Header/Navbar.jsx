import { Link } from "react-router-dom";
const Navbar=({toggle,setToggle})=>{
    return(
        /*if toggle true set the left to  0 to make navbar appears*/ 
        <nav style={{left:toggle && "0"}} className="navbar">
            <ul className="navs-links">
              {/*   when press on any link close the navbar  */}
                <Link  to="/" onClick = {()=>setToggle(false)} className="navbar-link">Home</Link>
                <Link to="authors" onClick = {()=>setToggle(false)} className="navbar-link">Authors</Link>
                <Link to="/about" onClick = {()=>setToggle(false)} className="navbar-link">About Us</Link>
                <Link to="/contact" onClick = {()=>setToggle(false)} className="navbar-link">Contact Us</Link>
                <Link to="register" onClick = {()=>setToggle(false)} className="navbar-link">Register</Link>
            </ul>
        </nav>
    );
}
export default Navbar;