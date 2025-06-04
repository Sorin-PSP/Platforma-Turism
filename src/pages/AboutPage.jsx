import React from 'react'
import { FaCheckCircle, FaUsers, FaGlobeEurope, FaHandshake } from 'react-icons/fa'
import Newsletter from '../components/Newsletter'
import logo from '../assets/logo.svg'

const AboutPage = () => {
  return (
    <div>
      <div className="bg-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="flex items-center mb-4">
            <img src={logo} alt="TravelDeal Logo" className="w-10 h-10 mr-3" />
            <h1 className="text-4xl font-bold">Despre TravelDeal</h1>
          </div>
          <p className="text-xl max-w-3xl">Platforma care conectează călătorii cu cele mai bune oferte turistice din România și din întreaga lume.</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Misiunea noastră</h2>
            <p className="text-gray-700 mb-6">
              La TravelDeal, misiunea noastră este să simplificăm procesul de căutare și rezervare a vacanțelor, oferind acces la o gamă largă de oferte turistice de la agenții de renume din România și din străinătate.
            </p>
            <p className="text-gray-700 mb-6">
              Ne-am propus să devenim cea mai de încredere platformă de comparare a ofertelor turistice, ajutând călătorii să economisească timp și bani atunci când își planifică vacanțele.
            </p>
            <p className="text-gray-700 mb-6">
              Ce face diferenta intre platforma TravelDeal si alte platforme? TravelDeal iti trimite noile oferte ale agentiilor de turism exact in momentul in care au fost publicate. Adica in functie de selectia dorita (loc unde doresti sa calatoresti, perioada) vei primi cele mai noi oferte exact pe acele selectii, nu vei mai primii sute de oferte care nu te intereseaza.
            </p>
            <p className="text-gray-700 mb-6">
              TravelDeal nu intermediaza ofertele, ofertele si preturile sunt ale agentiilor cu care colaboram.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3" />
                <p>Ofertele nu sunt intermediate de platforma TravelDeal</p>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3" />
                <p>Colaborăm doar cu agenții de turism verificate și de încredere</p>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3" />
                <p>Actualizăm permanent ofertele pentru a reflecta cele mai recente promoții</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/7625308/pexels-photo-7625308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Echipa TravelDeal" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">De ce să alegi TravelDeal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
                <FaGlobeEurope size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Varietate de oferte</h3>
              <p className="text-gray-600">
                Agregăm oferte de la zeci de agenții de turism, oferindu-ți acces la mii de opțiuni pentru vacanța ta perfectă.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comunitate de călători</h3>
              <p className="text-gray-600">
                Beneficiezi de recenzii reale și sfaturi de la alți călători care au rezervat prin intermediul platformei noastre.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
                <FaHandshake size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suport dedicat</h3>
              <p className="text-gray-600">
                Echipa noastră de suport este disponibilă pentru a te ajuta în fiecare etapă a procesului de rezervare.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Povestea noastră</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              TravelDeal a fost fondată în 2020 de către un grup de entuziaști ai călătoriilor care au observat dificultatea de a compara ofertele turistice disponibile pe piața din România.
            </p>
            <p className="text-gray-700 mb-4">
              Ceea ce a început ca un proiect mic s-a transformat rapid într-o platformă completă care conectează călătorii cu cele mai bune oferte de la agenții de turism de renume.
            </p>
            <p className="text-gray-700 mb-4">
              Astăzi, TravelDeal este utilizată de mii de români pentru a-și planifica vacanțele, economisind în medie 15% din costul total al călătoriilor lor.
            </p>
            <p className="text-gray-700">
              Continuăm să ne dezvoltăm și să adăugăm noi funcționalități pentru a face experiența de căutare și rezervare cât mai simplă și eficientă pentru utilizatorii noștri.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Echipa noastră</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Suntem o echipă pasionată de călătorii și tehnologie, dedicată să oferim cea mai bună experiență utilizatorilor noștri.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Alexandru Popescu', role: 'CEO & Fondator', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Maria Ionescu', role: 'Director Marketing', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'Andrei Dumitrescu', role: 'Lead Developer', image: 'https://randomuser.me/api/portraits/men/62.jpg' },
              { name: 'Elena Stanescu', role: 'Customer Success', image: 'https://randomuser.me/api/portraits/women/68.jpg' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

export default AboutPage
