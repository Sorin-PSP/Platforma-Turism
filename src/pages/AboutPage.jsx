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
          <h2 className="text-3xl font-bold mb-6 text-center">Cum se folosește platforma</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              Platforma TravelDeal este ușor de utilizat și vă oferă acces rapid la cele mai bune oferte turistice. Iată cum puteți beneficia de toate funcționalitățile:
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">1. Crearea unui cont</h3>
              <p className="text-gray-700 mb-2">
                Pentru a beneficia de funcționalitățile platformei, trebuie să vă creați un cont gratuit. Acest lucru vă permite să:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Cautati in functie de preferinte intre mii de oferte</li>
                <li>Cautati in functie de agentie</li>
                <li>Primiti pe email cele mai noi oferte periodic</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">2. Căutarea ofertelor</h3>
              <p className="text-gray-700 mb-2">
                Utilizați filtrele disponibile pentru a găsi exact ceea ce căutați:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Selectați destinația dorită</li>
                <li>Alegeți perioada în care doriți să călătoriți</li>
                <li>Puteti cauta dupe tipul de vacanta(last minute sau cele mai noi oferte speciale.)</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">3. Setarea alertelor</h3>
              <p className="text-gray-700 mb-2">
                Pentru clientii cu cont gratuit:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Nu trebuie sa va faceti griji, odata deshis contul veti primi cele mai noi oferte ale agentiilor pe adresa de email setata</li>
              </ul>
              <p className="text-gray-700 mt-2 mb-2">
                Pentru clientii Premium:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Configurați alerte personalizate pentru a fi notificat când apar oferte care vă interesează</li>
                <li>Definiți criteriile importante pentru dumneavoastră</li>
                <li>Alegeți frecvența notificărilor (atunci cand apar noutati, zilnic, săptămânal, etc)</li>
                <li>Primiți alerte in telefonul mobil</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Funcționalități premium</h3>
              <p className="text-gray-700 mb-2">
                Utilizatorii premium beneficiază de avantaje suplimentare:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Notificări în timp real pentru destinațiile favorite</li>
                <li>Acces prioritar la ofertele last minute</li>
                <li>Reduceri exclusive la anumite agenții partenere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

export default AboutPage
