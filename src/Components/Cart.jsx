import React from 'react'

const Cart = ({cart, handleRemove}) => {
  return (
    <div className='w-full h-screen bg-gray-500 flex items-center justify-center'>
      {
        cart.map((item)=>(
          <div key={item.id}>
            <img className='w-1/4' src={item.image} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button className='px-6 py-2 bg-red-500 text-white font-semibold rounded-md' onClick={()=>handleRemove(item)}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart