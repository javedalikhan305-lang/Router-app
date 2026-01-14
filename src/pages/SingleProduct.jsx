import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

 const params =  useParams()
 console.log(params)

const [product , setProduct] = useState({})
const[loading , setLoading] = useState(false)
const[error , setError] = useState(false)

const fetchProduct = async() => {
  
 try{
  setLoading(true)
   const response = await fetch('https://fakestoreapi.com/products/' + params.id)
  const data = await response.json()
  setProduct(data)
 }
 catch(error){
 setError(true)
 }
  finally{
  setLoading(false)
 }
}
 
useEffect(() => {
   fetchProduct()
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
      <h1 className='text-center'>Single Product</h1>

      <div className='border border-gray-300 p-4 rounded-md flex flex-col space-y-6 items-center my-6'>
        <img className='h-52' src={product.image} alt="" />
        <h1 className='text-lg font-bold'>{product.title}</h1>
        <h2 className='font-bold'> Price :{product.price}</h2>
        <p className='text-sm'>{product.description}</p>
      </div>
    </div>
    
  )
}

export default SingleProduct
