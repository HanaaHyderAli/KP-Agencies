import React, { useContext, useState } from 'react'
import CartData from '../components/CartData'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const[method,setMethod]= useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className="flex lg:flex-row flex-col lg:px-20 px-4 justify-between">
      
      <div className='flex flex-col gap-2 pb-32'>
          <h2 className='text-2xl text-amber-800 my-4 playwrite-hu'> Delivery Information</h2>
          <div className='flex flex-row gap-2'>
            <input type='text' placeholder='First name' className='p-2 border border-gray-400 w-54'/> 
             <input type='text' placeholder='Last name' className='p-2 border border-gray-400 w-54'/>
          </div>
          <input type='email' placeholder='Email address' className='p-2 border border-gray-400'/>
          <input type='text' placeholder='Street' className='p-2 border border-gray-400 '/>
          <div className='flex flex-row gap-2'>
            <input type='text' placeholder='City' className='p-2 border border-gray-400 w-54'/> 
             <input type='text' placeholder='State' className='p-2 border border-gray-400 w-54'/>
          </div>
          <div className='flex flex-row gap-2'>
            <input type='number' placeholder='Zip code' className='p-2 border border-gray-400 w-54'/> 
             <input type='text' placeholder='Country' className='p-2 border border-gray-400 w-54'/>
          </div>
          <input type='phone' placeholder='Phone' className='p-2 border border-gray-400 '/>
      </div>

      <div>
        <CartData/>
        <h2 className='text-2xl text-amber-800 mt-10 mb-4 playwrite-hu'> Payment Method</h2>
        
        <div className='flex flex-row gap-2'>
          <div onClick={()=>setMethod('stripe')} className={`border  px-4 cursor-pointer flex flex-row items-center gap-2 ${(method==='stripe')?"border-black":"border-gray-300"}`}>
           <div className={`h-3 w-3  rounded-full ${(method==='stripe')?"bg-green-500":"bg-gray-200"}`}></div>
           <img src={assets.stripe} className='w-[80px] h-[50px]'/>
          </div>
          
          
          <div  onClick={()=>setMethod('razorpay')} className={`border  px-4 cursor-pointer flex flex-row items-center gap-2 ${(method==='razorpay')?"border-black":"border-gray-300"}`}>
           <div className={`h-3 w-3 ${(method==='razorpay')?"bg-green-500":"bg-gray-200"} rounded-full`}></div>
           <img src={assets.razorpay} className='w-[100px] h-[40px]'/>
          </div>
          
          <div onClick={()=>setMethod('cod')} className={`border  px-4 cursor-pointer flex flex-row items-center gap-2 ${(method==='cod')?"border-black":"border-gray-300"}`}>
           <div className={`h-3 w-3 ${(method==='cod')?"bg-green-500":"bg-gray-200"} rounded-full`}></div>
           <div className=' text-xl'> Cash on Delivery</div>
          </div>
        </div>

        <div className="m-7"><button onClick={()=>navigate('/orders')} className=" text-white bg-black p-4 rounded-2xl hover:bg-gray-400">PLACE ORDER</button></div>
      </div>
        
    </div>
  )
}

export default PlaceOrder
