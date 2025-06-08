import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOfferById } from '../services/offerService';
import { isUserLoggedIn } from '../services/userService';
import AuthModal from '../components/AuthModal';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaStar, FaArrowLeft } from 'react-icons/fa';

const OfferDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = isUserLoggedIn();

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        if (!id) {
          setError('ID-ul ofertei lipsește');
          setLoading(false);
          return;
        }

        const offerData = await getOfferById(id);
        if (offerData) {
          console.log('Oferta încărcată:', offerData);
          setOffer(offerData);
          
          // Dacă utilizatorul nu este autentificat, afișăm modalul
          if (!isAuthenticated) {
            setIsModalOpen(true);
          }
        } else {
          setError('Oferta nu a fost găsită');
        }
      } catch (err) {
        setError('A apărut o eroare la încărcarea ofertei');
        console.error('Eroare la încărcarea ofertei:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, [id, isAuthenticated]);

  const handleAuthSuccess = () => {
    setIsModalOpen(false);
    // Reîncărcăm pagina pentru a reflecta starea de autentificare
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="container-custom py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error || !offer) {
    return (
      <div className="container-custom py-12">
        <div className="bg-red-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Eroare</h2>
          <p className="text-red-600">{error || 'Oferta nu a fost găsită'}</p>
          <Link to="/" className="inline-flex items-center mt-4 text-primary hover:underline">
            <FaArrowLeft className="mr-2" /> Înapoi la pagina principală
          </Link>
        </div>
      </div>
    );
  }

  // Asigurăm-ne că toate proprietățile necesare există
  const safeOffer = {
    ...offer,
    image: offer.image || 'https://via.placeholder.com/800x600?text=TravelDeal',
    destination: offer.destination || 'Destinație turistică',
    transport: offer.transport || 'Transport',
    discount: offer.discount || 0,
    duration: offer.duration || 7,
    agency: offer.agency || 'Agenție de turism',
    description: offer.description || 'Descriere indisponibilă',
    accommodation: offer.accommodation || 'Hotel',
    meals: offer.meals || 'Fără masă',
    departureDate: offer.departureDate || 'Flexibil',
    returnDate: offer.returnDate || 'Flexibil',
    price: offer.price || 0,
    oldPrice: offer.oldPrice || 0
  };

  return (
    <div className="container-custom py-8">
      <Link to="/" className="inline-flex items-center mb-6 text-primary hover:underline">
        <FaArrowLeft className="mr-2" /> Înapoi la oferte
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 md:h-96">
          <img 
            src={safeOffer.image} 
            alt={safeOffer.destination} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x600?text=TravelDeal';
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <div className="flex items-center mb-2">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {safeOffer.transport}
              </span>
              {safeOffer.discount > 0 && (
                <span className="ml-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  -{safeOffer.discount}%
                </span>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">{safeOffer.destination}</h1>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2 text-primary" />
              <span>{safeOffer.destination}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaCalendarAlt className="mr-2 text-primary" />
              <span>{safeOffer.duration} zile</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaUsers className="mr-2 text-primary" />
              <span>Agenție: {safeOffer.agency}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-xl font-semibold mb-4">Descriere</h2>
              <p className="text-gray-700 mb-6">{safeOffer.description}</p>

              <h2 className="text-xl font-semibold mb-4">Detalii</h2>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li className="mb-2">Transport: {safeOffer.transport}</li>
                <li className="mb-2">Cazare: {safeOffer.accommodation}</li>
                <li className="mb-2">Masă: {safeOffer.meals}</li>
                <li className="mb-2">Plecare: {safeOffer.departureDate}</li>
                <li className="mb-2">Întoarcere: {safeOffer.returnDate}</li>
              </ul>
            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="mb-4">
                  {safeOffer.oldPrice > safeOffer.price && (
                    <span className="line-through text-gray-500 mr-2">{safeOffer.oldPrice} €</span>
                  )}
                  <span className="text-3xl font-bold text-primary">{safeOffer.price} €</span>
                  <span className="text-gray-500 ml-2">/ persoană</span>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Agenție de turism</h3>
                  <div className="flex items-center">
                    <div>
                      <p className="font-medium">{safeOffer.agency}</p>
                    </div>
                  </div>
                </div>

                <button 
                  className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
                  onClick={() => !isAuthenticated && setIsModalOpen(true)}
                >
                  Contactează agenția
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          navigate('/');
        }}
        onAuthSuccess={handleAuthSuccess}
        customMessage="Oferte valabile numai pentru clienții TravelDeal"
      />
    </div>
  );
};

export default OfferDetailsPage;
