import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Dashboard = () => 
{
    const location = useLocation()
    const urlActual = location.pathname
  
    return (
      <div className='md:flex md:min-h-screen'>
  
        <div className='md:w-1/5 bg-sky-900 px-5 py-10'>
  
          <h2 className='text-4xl font-black text-center text-white'>APP-HÉROES</h2>
          
          <hr  className='mt-3'/>
          <h2 className='text-white font-bold text-center text-lg mt-3'>Bienvenido - Byron</h2>
          <nav className='mt-10'>
              <Link to='/heroes' className={`${urlActual === '/heroes' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-2 hover:text-blue-200`}>Héroes</Link>
              
              <Link to='/heroes/dc' className={`${urlActual === '/heroes/dc' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-2 hover:text-blue-200`}>Héroes DC</Link>
              
              <Link to='/heroes/marvel' className={`${urlActual === '/heroes/marvel' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-2 hover:text-blue-200`}>Héroes Marvel</Link>
              
              <Link to='/heroes/search' className={`${urlActual === '/heroes/search' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-2 hover:text-blue-200`}>Search</Link>
                           
              <Link to='/' className=" text-white text-2xl block mt-4 hover:text-red-300 text-center bg-red-900 p-1 rounded-lg">Logout</Link>
          </nav>
  
        </div>
  
  
  
        <div className='md:w-4/5 p-10 md:h-screen overflow-y-scroll'>
  
            <Outlet/>
  
        </div>
  
      </div>
    )
}

export default Dashboard