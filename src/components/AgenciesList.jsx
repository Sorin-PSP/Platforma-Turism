import React from 'react'

const agencies = [
  {
    id: 1,
    name: 'TravelPlus',
    logo: 'https://via.placeholder.com/150x50?text=TravelPlus',
    offers: 245
  },
  {
    id: 2,
    name: 'HolidayExpert',
    logo: 'https://via.placeholder.com/150x50?text=HolidayExpert',
    offers: 189
  },
  {
    id: 3,
    name: 'ParadiseTours',
    logo: 'https://via.placeholder.com/150x50?text=ParadiseTours',
    offers: 167
  },
  {
    id: 4,
    name: 'VacationDreams',
    logo: 'https://via.placeholder.com/150x50?text=VacationDreams',
    offers: 132
  },
  {
    id: 5,
    name: 'SunnyEscapes',
    logo: 'https://via.placeholder.com/150x50?text=SunnyEscapes',
    offers: 118
  },
  {
    id: 6,
    name: 'WorldTraveller',
    logo: 'https://via.placeholder.com/150x50?text=WorldTraveller',
    offers: 95
  }
]

const AgenciesList = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Agenții partenere</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Colaborăm cu cele mai bune agenții de turism pentru a-ți oferi o gamă variată de oferte la prețuri competitive.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {agencies.map(agency => (
            <div key={agency.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
              <img 
                src={agency.logo} 
                alt={agency.name}
                className="h-12 object-contain mb-3"
              />
              <p className="text-sm text-gray-600">{agency.offers} oferte</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgenciesList
