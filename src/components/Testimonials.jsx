import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Maria Popescu',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Am găsit o ofertă excelentă pentru vacanța noastră în Grecia. Prețul a fost mult mai bun decât pe alte site-uri, iar procesul de rezervare a fost foarte simplu.',
    destination: 'Santorini, Grecia'
  },
  {
    id: 2,
    name: 'Andrei Ionescu',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'TravelRo ne-a ajutat să economisim peste 200€ pentru sejurul nostru în Antalya. Recomand cu încredere această platformă tuturor prietenilor mei.',
    destination: 'Antalya, Turcia'
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
    text: 'Am apreciat varietatea de oferte și ușurința cu care am putut compara prețurile de la diferite agenții. Vacanța noastră în Spania a fost perfectă!',
    destination: 'Barcelona, Spania'
  }
]

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Ce spun clienții noștri</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Descoperă experiențele clienților care au rezervat vacanțe prin intermediul platformei noastre.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 relative">
              <FaQuoteLeft className="text-gray-200 text-4xl absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.destination}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
