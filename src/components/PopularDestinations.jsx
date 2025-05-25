import React from 'react'
import { Link } from 'react-router-dom'

const destinations = [
  {
    id: 1,
    name: 'Santorini, Grecia',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    offers: 42
  },
  {
    id: 2,
    name: 'Antalya, Turcia',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    offers: 78
  },
  {
    id: 3,
    name: 'Barcelona, Spania',
    image: 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    offers: 35
  },
  {
    id: 4,
    name: 'Roma, Italia',
    image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    offers: 29
  },
  {
    id: 5,
    name: 'Hurghada, Egipt',
    image: 'https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    offers: 51
  },
  {
    id: 6,
    name: 'Phuket, Thailanda',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    offers: 23
  }
]

const PopularDestinations = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Last minute</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Descoperă cele mai căutate destinații de vacanță și găsește oferte speciale pentru următoarea ta aventură.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(destination => (
            <Link to="/" key={destination.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md h-64">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p>{destination.offers} oferte disponibile</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="btn btn-primary">
            Vezi toate destinațiile
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations
