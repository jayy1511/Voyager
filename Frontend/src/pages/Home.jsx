import React from 'react'
import logo from '../assets/1 (2).png'
import background from '../assets/3.webp'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://i.ibb.co/SQY9j0M/3.webp)] h-screen pt-8 flex justify-between flex-col w-full'>
      <img className='w-28 ml-8' src={logo} alt="Voyager Logo" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Voyager</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
