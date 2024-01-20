import './Components/Header/header.css'
import Header from './Components/Header/Header';
import Footer from './Components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import About from './pages/about/About';
import Author from "./pages/author/Author";
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import Contact from "./pages/contact/Contact";
import Book from "./pages/book/Book";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
       <Header/>
        <Routes>
           <Route path='/' element={<HomePage/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/authors' element={<Author/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/register' element={<Register/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
            {/* /id to make it daynamic */}
           <Route path='/book/:id' element={<Book/>}></Route>
        </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
