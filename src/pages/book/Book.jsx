/* To get parameter from URL */
import { useParams } from "react-router-dom";
/* import books array */ 
import {books} from "../../data/books";
import Rating from "../../Components/bookslider/Rating";
import "./book.css";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
const Book =()=>{
  /* to use the use Context */ 
  const{addToCart}=useContext(CartContext);
  /* to take quantity from the input */ 
  const[qty,setQty]=useState(1);

   /*  const params=useParams();
    console.log(params); to take sth from the URL */
    const {id}=useParams();
    /* array books that contains all books we make an import to it  */
    /* If id equal to the id we take from the URL , it gives the book that equal in the id to the one on the URL*/ 
   /*  const book=books.find(b=>b.id===id); */ // 1 === "1" this is not true the integer not equal to the string 
    // to solve the problem we use parseInt(id) to convert from string to integer
    const book=books.find(b=>b.id===parseInt(id)); // parseInt(id)=+id
    /* an error will occuer because every thing we take from URL returns as string */ 
    return(
        <div className="book">
            <div className="book-content">
                <img src={`/books/${book.image}`} alt={book.title} className="book-content-img"/>
                <div className="book-content-info">
                    <h1 className="book-title">{book.title}</h1>
                    <div className="book-author">
                        by<span>{book.author}</span>(Author)
                    </div>
                    <Rating rating={book.rating} reviews={book.reviews}/>
                    <div className="book-add-to-cart">
                        <input 
                        min="1"
                         max="100" 
                         type="number" 
                         className="book-add-to-cart-input"
                         value={qty}
                         onChange={e=>setQty(e.target.value)}
                         />
                        {/* to use the use context function onclick */}
                        <button onClick={()=>addToCart({...book,quantity:qty})} className="book-add-to-cart-btn">
                            <i className="bi bi-cart-plus"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <p className="book-description">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
               molestiae corporis facere minima consequuntur, blanditiis voluptatem
               praesentium possimus odit, aliquam temporibus nulla! Delectus quas totam
               nihil est reiciendis sunt. Ex. Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. A veritatis vitae hic corrupti voluptas dignissimos
               consequatur doloribus laborum adipisci quo voluptates dolorum cumque
               tempora expedita possimus, ab quae tenetur fugit. Lorem ipsum dolor sit
               amet consectetur adipisicing elit. Laudantium fugit illo porro
               perspiciatis fuga doloremque placeat assumenda labore! Harum numquam
               voluptate eveniet libero debitis consequuntur nostrum reiciendis
               officiis delectus rem.
            </p>
            <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength}pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
        </div>
    );
    }
    
    export default Book;