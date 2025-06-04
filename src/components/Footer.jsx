import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="TravelDeal Logo" className="w-8 h-8" />
              <h3 className="text-xl font-bold">Travel<span className="text-secondary">Deal</span></h3>
            </div>
            <p className="text-gray-300 mb-4">
              Platforma ta de încredere pentru cele mai bune oferte turistice din România și din întreaga lume.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri rapide</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Acasă</Link></li>
              <li><Link to="/despre" className="text-gray-300 hover:text-white transition-colors">Despre noi</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li>
                <Link to="/admin/login" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <FaUser className="mr-1" />
                  <span>Admin</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinații populare</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Grecia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Turcia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Spania</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Italia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Egipt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Șos. Berceni Nr. 80A</p>
              <p>Sector 4, București, România</p>
              <p className="mt-2">Email: office@traveldeal.ro</p>
              <p>Telefon: 0770 970 509</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TravelDeal. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
