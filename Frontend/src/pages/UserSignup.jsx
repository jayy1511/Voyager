import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/1 (2).png'
import { useState } from 'react'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault();
        setUserData({
            username:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })
        
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

        return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between' >
            <div>
            <img className='w-28 mb-10' src={logo} alt="Voyager Logo" />
            <form onSubmit={(e)=>submitHandler(e)}>
                <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                <div className='flex gap-4 mb-6'>
                <input required className= 'bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder-base' type='text' placeholder="First name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
                <input required className= 'bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder-base' type='text' placeholder="Last name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
                </div>
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input required className= 'bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder-base' type='email' placeholder="email@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input required className= 'bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder-base' type='password' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button className= 'bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder-base'>Create account</button>
                <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600 '> Login here</Link></p>
            </form>
            </div>
            <div>
            <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>           
            </div>
        </div>
    </div>
  )
}

export default UserSignup
