import React from 'react'

const Nav = () => {
  return (
    <>
    <section className='w-full bg-white h-full'>
    <nav className="container mx-auto py-3 flex justify-evenly items-center">
        <div>
            <h1 className='text-4xl font-semibold'>Rent<span className='text-green-500'>Up</span></h1>
        </div>
            <ul className='flex space-x-6 font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        <div className='flex items-center space-x-6'>
            <h2 className='text-lg font-semibold'><span className='bg-green-600 rounded-full px-2 text-white'>2</span> My List</h2>
            <button className='bg-green-500 text-white px-6 py-3 rounded-md '>Sign in</button>
        </div>
    </nav>
    </section>
    </>
  )
}

export default Nav