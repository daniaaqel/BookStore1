const OrderSummary=({TotalPrice})=>{
    
return(
    <div className="cart-order-summary">
    <div className="order-summary-title">ORDER SUMMARY</div>
    <div className="order-summary-item">
       <span>Subtotal</span>
       <span>
         {/*  0 is the initial value of acc , reduce loop over all the array class 16 */}
          ${ TotalPrice}
       </span>
    </div>
    <div className="order-summary-item">
       <span>Shopping Cost</span>
       <span>
        0
       </span>
    </div>
    <div className="order-summary-item">
       <span>Discount</span>
       <span>
        0
       </span>
    </div>
    <div className="order-summary-item">
       <span>Total</span>
       <span>
         {/*  0 is the initial value of acc , reduce loop over all the array */}
          ${ TotalPrice}
       </span>
    </div>
  </div>
);
}

export default OrderSummary;