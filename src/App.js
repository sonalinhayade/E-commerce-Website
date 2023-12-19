import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import Signup from './Pages/Signup';
import Resetpassword from './Pages/Resetpassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermsandConditions from './Pages/TermsandConditions';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}> 
          <Route index element={<Home />}/>
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/product' element={<OurStore/>}/> 
          <Route path='product/:id' element={<SingleProduct/>}/> 
          <Route path='/blog' element={<Blog/>}/> 
          <Route path='blog/:id' element={<SingleBlog/>}/> 
          <Route path='/compare-product' element={<CompareProduct/>}/> 
          <Route path='/wishlist' element={<Wishlist/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/forgotpassword' element={<Forgotpassword/>}/> 
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='/resetpassword' element={<Resetpassword/>}/> 
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/> 
          <Route path='/refund-policy' element={<RefundPolicy/>}/> 
          <Route path='/shipping-policy' element={<ShippingPolicy/>}/> 
          <Route path='/term-conditions' element={<TermsandConditions/>}/> 
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/checkout' element={<Checkout/>}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;