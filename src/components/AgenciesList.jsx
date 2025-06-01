import React from 'react';
import { getAllActivePartners } from '../services/partnerService';

const AgenciesList = () => {
  // Get all active partners from the service
  const agencies = getAllActivePartners();
  
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
        </div>
      </div>
    </section>
  );
};

export default AgenciesList;
