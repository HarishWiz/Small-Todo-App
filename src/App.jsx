import React, { useState } from "react";
import ToDo from "./Components/ToDo";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Nav from "./Pages/Nav";
import Parallax from "./Components/Parallax";

const App = () => {
  // const [cart, setCart] =useState([]);

  // const handleAdd=(products)=>{
  //   const exists = cart.find ((cart)=>cart.id === products.id)
  //   if(exists){
  //     setCart(cart.map((item)=>item.id === products.id ? {...item, quantity:item.quantity +1}:item))
  //   }
  //   else{
  //     setCart([...cart,{...products, quantity:1}])
  //     console.log("Cart Added")
  //   }
  // }
  // const handleRemove=(item)=>{
  //   setCart(cart.filter((product)=>product.id !== item.id))
  //   alert("Item Removed")
  // }

  return (
    <>
      {/* <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products handleAdd={handleAdd} cart={cart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} handleRemove={handleRemove} />}/>
      </Routes>
    </BrowserRouter> */}

      {/* <Nav/> */}
      {/* <Parallax/> */}
      <ToDo />
    </>
  );
};

export default App;
