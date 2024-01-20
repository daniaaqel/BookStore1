
import {cartInfo} from "../../data/cart";
const CartItem=({item,removeFromCart,addToCart})=>{
    const{id}=item;
    return(
        <div  className="cart-item">
        <img src={`/books/${item.image}`} alt={item.title} className="cart-item-img" />
        <div className="cart-item-info">
            <div> 
                <div className="cart-item-book-title">
                    <b>Title:</b>{item.title}
                </div>
                <div className="cart-item-author">
                <b>Author:</b>{item.author}
                </div>
            </div>
            <div>
            <div className="cart-item-quantity">
                <button onClick={()=>addToCart({...item,quantity:item.quantity +1 })}> 
                    <i className="bi bi-plus-lg"></i>
                </button>
                  <b>{item.quantity}</b>
                <button 
                disabled={item.quantity <=1}
                onClick={()=>addToCart({...item,quantity:item.quantity -1  })}>
                    <i className="bi bi-dash-lg"></i>
                </button>
            </div>
            <div className="cart-item-price">
                ${(item.price*item.quantity).toFixed(2)}
            </div>
            <i  onClick={()=>removeFromCart(id)}className="bi bi-trash-fill"></i>
            </div>
        </div>
     </div>
    );
}

export default CartItem;