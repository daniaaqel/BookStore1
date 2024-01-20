import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";
const HeaderMiddle = ()=>{
   const{cartItemsLength}=useContext(cartContext);
return(
    <div className="header-middle">
    <Link to="/" className="header-middle-logo">
       <b>Book</b>
       <i className="bi bi-book"> </i>
       <b>Store</b>
    </Link>
    <div className="header-middle-search-box">
      <input type="search" className="header-middle-search-input" placeholder="Search in book store ..."/>
      <i className="bi bi-search"></i>
    </div>
    <Link to="/cart" className="header-middle-cart-wrapper">
        {/* to add notification */}
        {cartItemsLength>0 && <b className="cart-notification">{cartItemsLength}</b>}
        
       <i className="bi bi-cart2"></i>
    </Link>
 </div>
);
}

export default HeaderMiddle;