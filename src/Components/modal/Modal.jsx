
import { useContext, useState } from "react";
import Rating from "../bookslider/Rating";
import "./modal.css";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";

const Modal = ({ bookData, setOpenModal }) => {
  const{addToCart}=useContext(cartContext);
  const[qty,setQty]=useState(1);


  const {
    title,
    image,
    author,
    price,
    rating,
    reviews,
    inStock,
    id,
  } = bookData;

  return (
    <div onClick={() => setOpenModal(false)} className="modal-container">
       {/*  stopPropagation is an evnt from js to stop closing modal when press on any area inside modal */}
      <div onClick={(e) => e.stopPropagation()} className="modal-content"> 
        <i
          onClick={() => setOpenModal(false)}
          className="bi bi-x-circle-fill modal-icon"
        ></i>
        <div className="modal-content-img">
          <img src={`/books/${image}`} alt={title} />
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>Status:</b> {inStock ? "in stock" : "not in stock"}
          </div>
          <Rating rating={rating} reviews={reviews} />
          <div className="modal-content-info-author">
            <b>Author: </b>
            {author}
          </div>
          <div className="modal-content-info-price">
            <b>Price: </b>${price}
          </div>
          <div className="modal-add-to-cart">
            <input
              className="modal-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e=>setQty(e.target.value)}

            />
            <button onClick={()=>addToCart({...bookData,quantity:qty})}className="modal-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link
            className="modal-content-info-link"
            to={`/book/${id}`}
          >
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;