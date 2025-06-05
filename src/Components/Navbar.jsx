import React from 'react'
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <>
    <nav className='w-full bg-gray-700 flex justify-between px-20 items-center py-5'> 
        <h1 className='text-3xl font-bold text-white '>Navbar</h1>
        <ul className='flex space-x-5 text-white font-semibold '>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/cart"}>Cart</Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar