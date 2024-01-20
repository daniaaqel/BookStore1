import './slider.css';
import FirstBook from '../../images/book1.png'
import SecondBook from '../../images/book2.png'
import ThirdBook from '../../images/book3.png'
import { useState } from 'react';

const Slider=()=>{
    /* we  set it to zero to make the zwero slide appears */ 
    const[slideIndex,setSlideIndex]=useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
          /*   setSlideIndex(slideIndex-1);  *//* -1 -2 */ 
          /* we edit code so that when tha slide index <0 the last picture appears */ 
          setSlideIndex( slideIndex>0? slideIndex-1 : 2 );

        }
        else{
           /*  setSlideIndex(slideIndex+1); */ /* 1  2 */
             /* we edit code so that when tha slide index >2 the first picture appears */ 
             setSlideIndex(slideIndex<2 ?slideIndex+1 : 0)
        }

    }
    return(
        <div className="slider-container">
          {/*   icon appear in all condition  */}
           {/*  <i className="bi bi-chevron-double-left arrow-left" onClick={()=>handleClick("left")}></i> */}
           {/* we want to make the icon appears only when there is a slide on the left only to prevent the white screen from appearing */} 
           {/* {slideIndex !==0 && <i className="bi bi-chevron-double-left arrow-left" onClick={()=>handleClick("left")}></i>} */}
           <i className="bi bi-chevron-double-left arrow-left" onClick={()=>handleClick("left")}></i>
            <div style={{transform:`translateX(${slideIndex*-100}vw)`}} className="slider-wrapper">
                <div className="slide first-slide">
                    <div className="slide image-wrapper">
                        <img src={FirstBook} alt=''/>
                    </div>
                    <div className="slider info-wrapper">
                        <h1 className="slide-info-title">Book Store</h1>
                         <p className="slide-info-desc">
                            It's not just reading. It's living the adventure.
                         </p>
                    </div>
                </div>

                <div className="slide second-slide">
                    <div className="slide image-wrapper">
                        <img src={SecondBook} alt=''/>
                    </div>
                    <div className="slider info-wrapper">
                        <h1 className="slide-info-title">The books is for everyone.</h1>
                         <p className="slide-info-desc">
                            You can read at home.
                         </p>
                    </div>
                </div>

                <div className="slide third-slide">
                    <div className="slide image-wrapper">
                        <img src={ThirdBook} alt=''/>
                    </div>
                    <div className="slider info-wrapper">
                        <h1 className="slide-info-title">Check out the new titles.</h1>
                         <p className="slide-info-desc">
                            We send you the book you want at home.
                         </p>
                    </div>
                </div>
            </div>
           {/*  {slideIndex!==2 && <i className="bi bi-chevron-double-right arrow-right"  onClick={()=>handleClick("right")}></i> } */}
           <i className="bi bi-chevron-double-right arrow-right"  onClick={()=>handleClick("right")}></i> 

        </div>
    );
}

export default Slider;