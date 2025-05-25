import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Aici ar fi logica de abonare
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="py-12 bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Abonează-te la newsletter</h2>
          <p className="mb-6">Primește cele mai bune oferte turistice direct în inbox-ul tău. Fii primul care află despre reducerile speciale și ofertele de ultimă oră.</p>
          
          {subscribed ? (
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Mulțumim pentru abonare!</h3>
              <p>Vei primi în curând cele mai bune oferte turistice.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button type="submit" className="btn bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center">
                <FaPaperPlane className="mr-2" />
                Abonează-te
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
