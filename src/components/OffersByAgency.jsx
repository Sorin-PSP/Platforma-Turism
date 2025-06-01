import React, { useState, useEffect } from 'react';
import { getAllActivePartners } from '../services/partnerService';
import { getAllOffers } from '../services/offerService';
import { FaChevronRight } from 'react-icons/fa';

const OffersByAgency = () => {
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [agencies, setAgencies] = useState([]);
  const [allOffers, setAllOffers] = useState([]);
  
  useEffect(() => {
    // Încărcăm agențiile și ofertele la montarea componentei
    loadData();
    
    // Adăugăm un event listener pentru a detecta schimbările în localStorage
    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup la demontarea componentei
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleStorageChange = (e) => {
    // Verificăm dacă schimbarea este legată de parteneri sau oferte
    if (e.key === 'partnerWebsites') {
      loadData();
    }
  };
  
  const loadData = () => {
    const activePartners = getAllActivePartners();
    
    // Pentru fiecare partener, calculăm numărul real de oferte
    const partnersWithOfferCounts = activePartners.map(partner => {
      const partnerOffers = allOffers.filter(offer => offer.agency === partner.name);
      return {
        ...partner,
        offersCount: partnerOffers.length || partner.offersCount
      };
    });
    
    setAgencies(partnersWithOfferCounts);
    
    const offers = getAllOffers();
    
    // Asigurăm-ne că fiecare ofertă are o agenție asociată
    // Dacă nu are, îi atribuim una din agențiile active
    const updatedOffers = offers.map(offer => {
      if (!offer.agency && activePartners.length > 0) {
        const randomAgency = activePartners[Math.floor(Math.random() * activePartners.length)];
        return { ...offer, agency: randomAgency.name };
      }
      return offer;
    });
    
    setAllOffers(updatedOffers);
  };
  
  // Filter offers by selected agency or show all if none selected
  const filteredOffers = selectedAgency 
    ? allOffers.filter(offer => offer.agency === selectedAgency.name)
    : allOffers.slice(0, 6); // Show first 6 offers if no agency selected
  
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Oferte după Agenție</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explorează ofertele de la agențiile noastre partenere
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          {agencies.map(agency => (
            <button
              key={agency.id}
              onClick={() => setSelectedAgency(agency)}
              className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${
                selectedAgency?.id === agency.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {agency.name} ({agency.offersCount})
            </button>
          ))}
          {agencies.length > 0 && (
            <button
              onClick={() => setSelectedAgency(null)}
              className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${
                selectedAgency === null
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Toate ofertele
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredOffers.map(offer => (
            <div key={offer.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.destination || offer.location || 'Destinație turistică'}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {offer.discount || Math.floor(Math.random() * 20) + 5}% reducere
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{offer.destination || offer.location || 'Destinație turistică'}</h3>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 line-through mr-1">
                      {offer.oldPrice}€
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {offer.price}€
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span>{offer.duration} zile</span>
                  <span className="mx-2">•</span>
                  <span>{offer.agency || 'Agenție de turism'}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {offer.description || 'Ofertă turistică cu cazare și transport incluse.'}
                </p>
                
                <button className="w-full bg-primary text-white py-2 rounded flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <span className="mr-1">Vezi oferta</span>
                  <FaChevronRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredOffers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">Nu există oferte disponibile pentru această agenție momentan.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OffersByAgency;
