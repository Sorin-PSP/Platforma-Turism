import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { isUserLoggedIn } from '../services/userService';
import AuthModal from './AuthModal';

const OfferCard = ({ offer }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const isAuthenticated = isUserLoggedIn();

  const handleOfferClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  // Verificăm dacă oferta există și are toate proprietățile necesare
  if (!offer || !offer.id) {
    console.error('Ofertă invalidă:', offer);
    return null;
  }

  return (
    <>
      <Link 
        to={`/oferta/${offer.id}`} 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        onClick={handleOfferClick}
      >
        <div className="relative">
          <img 
            src={offer.image || 'https://via.placeholder.com/400x300?text=TravelDeal'} 
            alt={offer.title || 'Ofertă turistică'} 
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=TravelDeal';
            }}
          />
          <div className="absolute top-0 right-0 m-2 bg-white bg-opacity-90 px-2 py-1 rounded-md flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold">{offer.rating || '4.5'}</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{offer.title || offer.destination || 'Ofertă turistică'}</h3>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <FaMapMarkerAlt className="mr-1 text-primary" />
            <span>{offer.location || offer.destination || 'Locație'}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <FaCalendarAlt className="mr-1 text-primary" />
            <span>{offer.duration ? `${offer.duration} zile` : '7 zile'}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl font-bold text-primary">{offer.price || 0} €</span>
              <span className="text-gray-500 text-sm ml-1">/ persoană</span>
            </div>
            <div className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              {offer.category || offer.transport || 'Vacanță'}
            </div>
          </div>
        </div>
      </Link>
      
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAuthSuccess={() => setIsModalOpen(false)}
        customMessage="Oferte valabile numai pentru clienții TravelDeal"
      />
    </>
  );
};

export default OfferCard;
