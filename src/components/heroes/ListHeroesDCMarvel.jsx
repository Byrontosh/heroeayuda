import React from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import demoImage from '../../assets/dc-black.jpg'

const ListHeroesDCMarvel = ({publisher}) => 
{
  const heroes = getHeroesByPublisher(publisher)

  return (
    <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {
            heroes.map((heroe,index) => 
            (

              <div className="rounded overflow-hidden shadow-lg" key={heroe.id}>

                <p>{`${heroe.id}.jpg`}</p>

                <img className="w-full" src={`assets/${heroe.id}.jpg`} alt={heroe.id} />

                {/* <img className="w-full" src={demoImage} alt={heroe.id} /> */}

                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{heroe.superhero}</div>
                    <p className="text-gray-700 text-base">
                      {heroe.first_appearance}
                    </p>
                  </div>

                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {heroe.publisher}
                    </span>
                  </div>

                  <button class="bg-sky-800 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75 w-full text-white">Más Información</button>

              </div>

            ))
        }
    </div>
  )
}

export default ListHeroesDCMarvel