import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'
import Newsletter from '../components/Newsletter'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aici ar fi logica de trimitere a formularului
    console.log(formData)
    setSubmitted(true)
  }

  return (
    <div>
      <div className="bg-primary-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contactează-ne</h1>
          <p className="text-xl max-w-3xl">Suntem aici pentru a te ajuta. Trimite-ne un mesaj și vom reveni cu un răspuns cât mai curând posibil.</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Mulțumim pentru mesaj!</h3>
                <p className="text-green-700">
                  Am primit mesajul tău și vom reveni cu un răspuns în cel mai scurt timp posibil.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nume complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subiect</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary flex items-center">
                  <FaPaperPlane className="mr-2" />
                  Trimite mesaj
                </button>
              </form>
            )}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Program de lucru</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-6">
                <FaClock className="text-primary mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Suport clienți</h3>
                  <p className="text-gray-600 mb-1">Luni - Vineri: 9:00 - 18:00</p>
                  <p className="text-gray-600 mb-1">Sâmbătă: 10:00 - 14:00</p>
                  <p className="text-gray-600">Duminică: Închis</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-lg mb-4">Întrebări frecvente</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Cum pot anula o rezervare?</h4>
                    <p className="text-gray-600 text-sm">Poți anula o rezervare din contul tău, în secțiunea "Rezervările mele", sau ne poți contacta telefonic.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Cât durează procesarea unei rezervări?</h4>
                    <p className="text-gray-600 text-sm">De obicei, rezervările sunt procesate în maxim 24 de ore lucrătoare.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Cum pot plăti pentru o rezervare?</h4>
                    <p className="text-gray-600 text-sm">Acceptăm plăți prin card bancar, transfer bancar sau în rate prin partenerii noștri financiari.</p>
                  </div>
                </div>
              </div>
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
