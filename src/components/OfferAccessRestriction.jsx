import React, { useState } from 'react';
import { isUserLoggedIn } from '../services/userService';
import AuthModal from './AuthModal';

const OfferAccessRestriction = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = isUserLoggedIn();
  
  // Dacă utilizatorul este autentificat, afișăm conținutul normal
  if (isAuthenticated) {
    return children;
  }
  
  // Pentru utilizatorii neautentificați, afișăm conținutul normal
  // dar cu un modal care se deschide când se face click pe un buton sau link
  return (
    <>
      {children}
      
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAuthSuccess={() => setIsModalOpen(false)}
        customMessage="Oferte valabile numai pentru clienții TravelDeal"
      />
    </>
  );
};

export default OfferAccessRestriction;
