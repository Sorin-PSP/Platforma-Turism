import React, { useState, useEffect } from 'react';
import { getAllActivePartners } from '../services/partnerService';
import { getAllOffers } from '../services/offerService';

const AgenciesList = () => {
  const [agencies, setAgencies] = useState([]);
  
  useEffect(() => {
    // Încărcăm agențiile la montarea componentei
    loadAgencies();
    
    // Adăugăm un event listener pentru a detecta schimbările în localStorage
    window.addEventListener('storage', handleStorageChange);
    
    // Adăugăm un event listener pentru actualizări de oferte
    window.addEventListener('offersUpdated', handleOffersUpdated);
    
    // Cleanup la demontarea componentei
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('offersUpdated', handleOffersUpdated);
    };
  }, []);
  
  const handleStorageChange = (e) => {
    // Verificăm dacă schimbarea este legată de parteneri sau oferte
    if (e.key === 'partnerWebsites' || e.key === 'offers') {
      loadAgencies();
    }
  };
  
  const handleOffersUpdated = () => {
    loadAgencies();
  };
  
  const loadAgencies = () => {
    // Get all active partners from the service
    const activePartners = getAllActivePartners();
    
    // Calculăm numărul real de oferte pentru fiecare agenție
    const offers = getAllOffers();
    const partnersWithOfferCounts = activePartners.map(partner => {
      const partnerOffers = offers.filter(offer => offer.agency === partner.name);
      return {
        ...partner,
        offersCount: partnerOffers.length
      };
    });
    
    setAgencies(partnersWithOfferCounts);
  };
  
  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Agenții partenere</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Colaborăm cu cele mai bune agenții de turism pentru a-ți oferi o gamă variată de oferte la prețuri competitive.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {agencies.map(agency => (
            <div key={agency.id} className="bg-white rounded-lg shadow-sm p-3 md:p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
              <img 
                src={agency.logo} 
                alt={agency.name}
                className="h-10 md:h-12 object-contain mb-2 md:mb-3"
              />
              <p className="font-medium text-sm">{agency.name}</p>
              <p className="text-xs md:text-sm text-gray-600">{agency.offersCount} oferte</p>
            </div>
          ))}
          {agencies.length === 0 && (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">Nu există agenții partenere active momentan.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AgenciesList;
