import React, { useState } from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginSecction from './loginSecction/LoginSecction';
import EnterLogin from './enterLogin/EnterLogin';
import CreateAccount from './createAccount/CreateAccount';
import Footer from './footer/Footer';
import ShoppingBag from './shoppingBag/ShoppingBag';
import FetchWomenItem from './fetchWomenItem/FetchWomenItem';
import { ProductProvider } from './ContextAPI';
import FetchMenItem from './fetchMenItem/FetchMenItem';
import FetchKids from './fetchKids/FetchKids';
import ProductDetails from './productDetail/ProductDetails';
import { BagProvider } from './BAGContext';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function App() {

  return (
    <React.StrictMode>
    <BagProvider>
    <ProductProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginSecction/>}/>
        <Route path='/Enterlogin' element={<EnterLogin/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/Bag' element={<ShoppingBag/>}/>
        <Route path='/fetchWomen' element={<FetchWomenItem/>}/>
        <Route path='/fetchMen' element={<FetchMenItem/>}/>
        <Route path='/fetchKids' element={<FetchKids/>}/>
        <Route path='/details/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
     </Router>
     </ProductProvider>
     </BagProvider>
     <ToastContainer 
          position="top-right"
          autoClose={4000} 
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
     </React.StrictMode>
     
  )
}

export default App
