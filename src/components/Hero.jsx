import React from 'react'
import { FaPlane, FaHotel, FaUmbrella, FaGlobeEurope } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="relative bg-primary-dark text-white">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Descoperă cele mai bune oferte turistice</h1>
          <p className="text-xl mb-8">Compară prețuri de la zeci de agenții de turism și rezervă vacanța perfectă la cel mai bun preț.</p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-3 rounded-lg">
              <FaPlane className="text-secondary mr-2" />
              <span>Zboruri</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-3 rounded-lg">
              <FaHotel className="text-secondary mr-2" />
              <span>Hoteluri</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-3 rounded-lg">
              <FaUmbrella className="text-secondary mr-2" />
              <span>Vacanțe</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-3 rounded-lg">
              <FaGlobeEurope className="text-secondary mr-2" />
              <span>Circuite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
