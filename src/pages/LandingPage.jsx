import React from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => 
{
  const navigate = useNavigate()
  return (
    <div className='bg-sky-900 min-h-screen flex justify-center items-center'>
      <div>
        <button className='text-white bg-orange-900 p-2 mt-4 rounded-2xl' onClick={()=>{navigate("/login")}}> Bienvenidos</button>
      </div>
    </div>
  )
}

export default LandingPage