import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='bg-green-600 py-2 mx- flex item-center justify-between'>
   <Link to="/"><h1 className='test-lg text-white font-bold '>React Router</h1></Link>

   <ul className='flex space-x-5'>
    <li>
        <Link to="/products" className='text-white font-semibold'>products</Link>
    </li>
    <li>
        <Link to="/about" className='text-white font-semibold'>About</Link>
    </li>
  
   <li>
        <Link to="/contact" className='text-white font-semibold'>Contact</Link>
    </li>
     </ul>
   </nav>
   
  )
}

export default Navbar
