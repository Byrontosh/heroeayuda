import React from 'react'
import { useState } from 'react'
import ListHeroesDCMarvel from '../components/heroes/ListHeroesDCMarvel'


const ListHeroes = () =>
{
    const [name, setName] = useState("")

  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Listado de Héroes</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>En este módulo te permite listar los datos de todos los héroes de la saga Marvel y DC</p>

      <div className='mt-4'>
          
          <form>
              
              <label htmlFor="name" className='text-gray-800 font-bold'>Seleccione la saga que desea mostrar: </label>
              
              <select id="name" className='mt-2 block w-full p-3 bg-gray-100' onChange={(e)=>{setName(e.target.value)}}>
                  <option value="">--- Seleccione ---</option>
                  <option value="DC Comics">DC Comics</option>
                  <option value="Marvel Comics">Marvel Comics</option>
              </select>

          </form>
      </div>
      {
          name && (
            <div className='mt-4'>
            <p className='text-gray-800 font-bold mb-4'>Resultados:</p>
            <p>{`Heroes de la saga ${name}`}</p>
            <ListHeroesDCMarvel publisher={name}/>
            </div>
          )
      }
      
    </div>
    
  )
}

export default ListHeroes