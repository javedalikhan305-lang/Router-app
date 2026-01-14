import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

const [products , setProducts] = useState([])
const[loading , setLoading] = useState(false)
const[error , setError] = useState(false)

const fetchProducts = async() => {
  
 try{
  setLoading(true)
   const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  setProducts(data)
 }
 catch(error){
 setError(true)
 }
  finally{
  setLoading(false)
 }
}
 
useEffect(() => {
   fetchProducts()
},[])

if(loading){
  return(
  <div className='p-4 min-h-screen'>
     <h1 className='text-center'>Loading...</h1>
  </div>
  )
}

if(error){
 <div className='p-4 min-h-screen'>
     <h1 className='text-center'>Somthing went wrong</h1>
  </div> 
}

  return (
    <div className='p-8 min-h-[87vh]'>
      <h1 className='text-center'>Product</h1>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-6'>
{

  products.map(product => {
    return(
      <div key={product.id} className='p-4 rounded-md border border-gray-200 shadow-sm flex flex-col items-center justify-center space-y-5 '>
        <img className='h-52' src={product.image} alt="" />
        <h1 className='text-lg font-bold'>{product.title}</h1>
        <Link to={`/products/${product.id}`} className='bg-blue-500 text-center hover:bg-blue-600 cursor-pointer w-full p-2 rounded-md text-sm text-white'> View product</Link>
      </div>
    )
  })
}
    </div>

    </div>
  )
}

export default Product
