import Slider from '../../Components/Slider/Slider';
import Services from '../../Components/services/Services';
import BookSilder from '../../Components/bookslider/BookSlider';
/* we want to used books inside data in the BookSlider component so we want to pass it as props */
import {books} from '../../data/books';
import HeadingTitle from '../../Components/heading-title/HeadingTitle';

const HomePage=()=>{
 return(
    <div className="home">
        <Slider/>
       <Services/>
       <HeadingTitle title="Most gifted"/>
       <BookSilder data={books}/>
       <HeadingTitle title="Best seller"/>
       <BookSilder data={books}/>
       <HeadingTitle title="Most wished for"/>
       <BookSilder data={books}/>
    </div>
 );
}

export default HomePage;