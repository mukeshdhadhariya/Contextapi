import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

    const handlesubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div className='container mx-auto '>
    <div className='flex flex-col my-40 h-auto bg-slate-400'>
        <h2 className='text-center text-3xl mt-2 mb-4'>Login</h2>
        <input className='mx-auto border-2 px-3 py-1  mb-3 border-black rounded-md' required type='text' value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder='username'/>
        <input className='mx-auto border-2 px-3 py-1 mt-2 mb-2 border-black rounded-md' required  type='text'  value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        <button className='bg-blue-700 text-2xl rounded-md mt-2 p-2' onClick={handlesubmit}>Submit</button>
    </div>
    </div>
  )
}

export default Login