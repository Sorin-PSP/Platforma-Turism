import React, { useState, useEffect } from 'react'
import { FaCookieBite } from 'react-icons/fa'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 animate-fade-in">
      <div className="container-custom py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <FaCookieBite className="text-primary text-2xl mr-3" />
            <div>
              <h3 className="font-semibold text-gray-800">Politica de Cookie-uri</h3>
              <p className="text-sm text-gray-600 max-w-3xl">
                Acest site folosește cookie-uri pentru a vă îmbunătăți experiența de navigare și pentru a oferi funcționalități personalizate. 
                Prin continuarea navigării, sunteți de acord cu utilizarea cookie-urilor conform politicii noastre de confidențialitate.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a 
              href="/politica-cookies" 
              className="btn btn-outline text-sm whitespace-nowrap"
              onClick={(e) => {
                // Prevent navigation if the page doesn't exist yet
                if (!window.location.pathname.includes('politica-cookies')) {
                  e.preventDefault()
                  alert('Pagina de politică cookie-uri va fi implementată în curând.')
                }
              }}
            >
              Mai multe detalii
            </a>
            <button 
              onClick={acceptCookies}
              className="btn btn-primary text-sm whitespace-nowrap"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
