import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'
import Newsletter from '../components/Newsletter'

const ContactPage = () => {
  return (
    <div>
      <div className="bg-primary-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contactează-ne</h1>
          <p className="text-xl max-w-3xl">Suntem aici pentru a te ajuta. Contactează-ne folosind una din metodele de mai jos și vom reveni cu un răspuns cât mai curând posibil.</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Adresa noastră</h3>
            <p className="text-gray-600">
              Șos. Berceni Nr. 80A<br />
              Sector 4, București<br />
              România
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
              <FaPhone size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Telefon</h3>
            <p className="text-gray-600 mb-2">
              <a href="tel:0770970509" className="hover:text-primary">0770 970 509</a> (Suport clienți)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
              <FaEnvelope size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <p className="text-gray-600 mb-2">
              <a href="mailto:office@traveldeal.ro" className="hover:text-primary">office@traveldeal.ro</a> (Informații generale)
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-primary-light p-3 rounded-full text-white mr-4">
              <FaQuestionCircle size={24} />
            </div>
            <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Cum pot face o rezervare?</h3>
              <p className="text-gray-600">
                Platforma TravelDeal nu face rezervari, platforma aduna ofertele celor mai mari, serioase si cunoscute agentii de turism. Odata ce ati gasit o oferta buna, apasand pe ea veti fi redirectionati pe website-ul ce are oferta valabila.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Cum pot anula o rezervare?</h3>
              <p className="text-gray-600">
                Platforma TravelDeal nu face rezervari, trebuie sa contactati agentia de turism care va facut rezervarea.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Cât durează procesarea unei rezervări?</h3>
              <p className="text-gray-600">
                Odata ce ati gasit o oferta buna, apasand pe ea veti fi redirectionati pe website-ul ce are oferta valabila, acolo veti primi toate indicatiile necesare.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Cum pot plăti pentru o rezervare?</h3>
              <p className="text-gray-600">
                Platforma TravelDeal nu face rezervari, nu intermediaza ofertele agentiilor partenere platforma aduna ofertele celor mai mari, serioase si cunoscute agentii de turism. Odata ce ati gasit o oferta buna, apasand pe ea veti fi redirectionati pe website-ul ce are oferta valabila.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Nu mai regăsesc oferta găsită inițial pe TravelDeal pe agenția care o oferă, ce pot face?</h3>
              <p className="text-gray-600">
                Platforma TravelDeal actualizeaza periodic ofertele noi si sterge ofertele vechi de pe platforma, daca ati intampinat o atfel de problema inseamna ca locurile valabile s-au epuizat și trebuie să căutați altă ofertă favorabilă dvs.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91158.11055103579!2d26.03030565!3d44.439911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1655292329404!5m2!1sro!2sro" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația TravelDeal"
          ></iframe>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

export default ContactPage
