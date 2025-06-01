import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import UserAuthButton from './UserAuthButton'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TravelDeal Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-primary">TravelDeal</span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <UserAuthButton />
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link
                to="/"
                className={`text-gray-700 hover:text-primary ${
                  isActive('/') ? 'font-semibold text-primary' : ''
                }`}
              >
                Acasă
              </Link>
              <Link
                to="/last-minute"
                className={`text-gray-700 hover:text-primary ${
                  isActive('/last-minute') ? 'font-semibold text-primary' : ''
                }`}
              >
                Last Minute
              </Link>
              <Link
                to="/despre"
                className={`text-gray-700 hover:text-primary ${
                  isActive('/despre') ? 'font-semibold text-primary' : ''
                }`}
              >
                Despre noi
              </Link>
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-primary ${
                  isActive('/contact') ? 'font-semibold text-primary' : ''
                }`}
              >
                Contact
              </Link>
            </nav>
            <UserAuthButton />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`text-gray-700 hover:text-primary ${
                  isActive('/') ? 'font-semibold text-primary' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Acasă
              </Link>
              <Link
                to="/last-minute"
                className={`text-gray-700 hover:text-primary ${
                  isActive('/last-minute') ? 'font-semibold text-primary' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Last Minute
              </Link>
              <Link
                to="/despre"
                className={`text-gray-700 hover:text-primary ${
                  isActive('/despre') ? 'font-semibold text-primary' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Despre noi
              </Link>
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-primary ${
                  isActive('/contact') ? 'font-semibold text-primary' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
