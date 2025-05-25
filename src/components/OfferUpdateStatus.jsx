import React, { useState, useEffect } from 'react';
import { getNextUpdateTime } from '../services/offerService';
import { FaSync, FaCheckCircle } from 'react-icons/fa';

const OfferUpdateStatus = () => {
  const [updateInfo, setUpdateInfo] = useState(null);
  const [newOffersCount, setNewOffersCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Update the countdown timer every second
    const timer = setInterval(() => {
      setUpdateInfo(getNextUpdateTime());
    }, 1000);

    // Listen for new offers
    const handleOffersUpdated = (event) => {
      const { newOffersCount } = event.detail;
      if (newOffersCount > 0) {
        setNewOffersCount(newOffersCount);
        setShowNotification(true);
        
        // Hide notification after 5 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      }
    };

    window.addEventListener('offersUpdated', handleOffersUpdated);

    return () => {
      clearInterval(timer);
      window.removeEventListener('offersUpdated', handleOffersUpdated);
    };
  }, []);

  if (!updateInfo) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 text-sm flex items-center z-10">
        <FaSync className={`mr-2 ${updateInfo.timeRemaining < 60000 ? 'animate-spin' : ''}`} />
        <div>
          <div className="font-medium">Următoarea actualizare:</div>
          <div className="text-gray-600">{updateInfo.formattedTime}</div>
        </div>
      </div>

      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 rounded-lg shadow-lg p-4 max-w-xs animate-fade-in z-20">
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <div>
              <div className="font-medium">Oferte noi adăugate!</div>
              <div className="text-sm">
                {newOffersCount} {newOffersCount === 1 ? 'ofertă nouă a fost adăugată' : 'oferte noi au fost adăugate'} de la partenerii noștri.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferUpdateStatus;
