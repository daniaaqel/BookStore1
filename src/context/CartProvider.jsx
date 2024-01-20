import { useState } from "react";
import cartContext from "./cartContext";

const CartProvider=({children})=>{
    const[cartItems,setCartItems]=useState([]);

    //Add to cart 
    const addToCart=(item)=>{
        // if book inside the caritem array or not 
        const isExist = cartItems.find(cart=> cart.id === item.id);

    if (isExist) {
        setCartItems(
        cartItems.map((cartItem) =>
        cartItem.id === item.id ? item : cartItem
        )
      );
    } else {
        setCartItems((prev) => [...prev, item]);
    }
    }

    // Remove From cart 
    const removeFromCart=(id)=>{
     const cart=cartItems.filter(c=>c.id!==id); // return all item except the deleted item 
     setCartItems(cart);
    }
return(
 <cartContext.Provider value={{cartItems,
 removeFromCart,
 addToCart,
 cartItemsLength:cartItems.length
 
 }}>
    {children} {/* all component inside provider  */}
 </cartContext.Provider>
);
}

export default CartProvider;