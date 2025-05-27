import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState]=useState('Sign Up');
  const OnSubmitHandler= async(e)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={OnSubmitHandler}  className='flex flex-col items-center gap-2 mb-25'>
      <h2 className="text-3xl text-amber-800 my-7 playwrite-hu">{currentState}</h2>
      {currentState==='Login'?"":<input type='text' placeholder='Name' className='border border-gray-500 p-2 w-md'/>}
      
      <input type='email' placeholder='Email' className='border border-gray-500 p-2 w-md'/>
      <input type='password' placeholder='Password' className='border border-gray-500 p-2 w-md'/>
      <div className='flex flex-row w-md justify-between'>
        {currentState==='Login'?<button className='cursor-pointer'>Forgot your password?</button>:""}
      {currentState==='Login'?<button onClick={()=>setCurrentState('Sign Up')}  className='cursor-pointer'>Create Account</button>:<button onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</button>}
      </div>
      {currentState==='Login'?<div className='bg-black text-white px-7 py-2 mt-5 rounded-3xl cursor-pointer hover:bg-gray-600 '>Log in</div>:<div className='bg-black text-white px-7 py-2 mt-5 rounded-3xl cursor-pointer hover:bg-gray-600 '>Sign up</div>}
    </form>
  )
}

export default Login
