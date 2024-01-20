import { useContext } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import "./cart.css";
import cartContext from "../../context/cartContext";
const Cart =()=>{
    const{cartItems,addToCart,removeFromCart}=useContext(cartContext);
    const TotalPrice=cartItems.reduce((acc,cur)=> acc+cur.price*cur.quantity , 0).toFixed(2);
    return(
        <div className="cart">
            <div className="cart-title">Your Shopping Cart</div>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map(item=>
                      <CartItem item={item} key={item.id} removeFromCart={removeFromCart} addToCart={addToCart}/>
                        )}
                </div>
                <OrderSummary TotalPrice={TotalPrice}/>
            </div>
        </div>
    );
    }
    
    export default Cart;