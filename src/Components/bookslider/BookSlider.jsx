import {  useContext, useState } from 'react';
import './book-slider.css';
import Rating from './Rating';
import Modal from '../modal/Modal';
import cartContext from '../../context/cartContext';
const BookSilder=({data})=>{
  const{addToCart}=useContext(cartContext);
    const[slideIndex,setSlideIndex]=useState(0);
    // State for Modal 
    const[openModal,setOpenModal]=useState(false);// by default modal closed 
    const[bookData,setBookData]=useState(null); // data inside modale 
    //Handle Modal 
    const handleModal = (book)=>{
      setOpenModal(true);
      setBookData(book);
  

    }
    // Handle Click
    const handleClick = (direction)=>{
        if(direction==="left"){
          setSlideIndex(slideIndex-1); 
        } else{
             setSlideIndex(slideIndex+1);
        }
    }
    return(
    <div className="book-slider-container">
     { slideIndex>=0 && <i onClick={()=>handleClick("left")} className="bi bi-chevron-left book-slider-arrow-left"></i> } 
        <div  style={{transform:`translateX(${slideIndex*-340}px)`}}  className="book-slider-wrapper">
            {data.map( item=>
            <div key={item.id} className="book-slide-item">
               <img src={`/books/${item.image}`} alt={item.title} className='book-slide-item-img'/>
               <h3 className="book-slide-item-title">{item.title}</h3>
                 <Rating rating={item.rating} reviews={item.reviews}/>
               <div className="book-slide-item-price">${item.price}</div>
               <div className="book-slider-icons-wrapper">
                <i  onClick={()=>handleModal(item)} className="bi bi-eye-fill"></i>
                <i onClick={()=>addToCart({...item,quantity:1})} className="bi bi-cart-plus"></i>
               </div>  
            </div>
            )}
        </div>
        {slideIndex <=data.length-1 && <i onClick={()=>handleClick("right")} className="bi bi-chevron-right book-slider-arrow-right "></i>}
        {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal}/>}
    </div>
    
    );
}

export default BookSilder;