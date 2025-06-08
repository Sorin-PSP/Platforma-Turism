import { partnerApiEndpoints } from './offerService';
import { deleteOffersByAgency, getAllOffers } from './offerService';

// Verificăm dacă există date salvate în localStorage
const getSavedPartners = () => {
  const savedPartners = localStorage.getItem('partnerWebsites');
  return savedPartners ? JSON.parse(savedPartners) : null;
};

// Inițializăm partnerWebsites din localStorage sau cu valorile implicite
let partnerWebsites = getSavedPartners() || partnerApiEndpoints.map((endpoint, index) => {
  const domain = endpoint.split('//')[1].split('/')[0];
  const name = domain.split('.')[1];
  
  return {
    id: index + 1,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    domain,
    apiEndpoint: endpoint,
    active: true,
    lastFetch: new Date().toISOString(),
    offersCount: 0, // Inițializăm cu 0 și vom actualiza corect mai jos
    logo: `https://via.placeholder.com/150x50?text=${name.charAt(0).toUpperCase() + name.slice(1)}`
  };
});

// Actualizăm numărul de oferte pentru fiecare partener
const updatePartnerOfferCounts = () => {
  const allOffers = getAllOffers();
  
  partnerWebsites.forEach(partner => {
    const partnerOffers = allOffers.filter(offer => offer.agency === partner.name);
    partner.offersCount = partnerOffers.length;
  });
};

// Funcție pentru a salva partenerii în localStorage
const savePartnersToStorage = () => {
  // Actualizăm mai întâi numărul de oferte
  updatePartnerOfferCounts();
  
  localStorage.setItem('partnerWebsites', JSON.stringify(partnerWebsites));
  
  // Declanșăm un eveniment de storage pentru a notifica alte componente
  window.dispatchEvent(new Event('storage'));
};

// Asigurăm că partenerii sunt salvați inițial în localStorage
if (!getSavedPartners()) {
  savePartnersToStorage();
} else {
  // Dacă partenerii există deja, actualizăm numărul de oferte
  updatePartnerOfferCounts();
  savePartnersToStorage();
}

/**
 * Gets all partner websites
 * @returns {Array} - List of partner websites
 */
export const getAllPartners = () => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedPartners = getSavedPartners();
  if (savedPartners) {
    partnerWebsites = savedPartners;
    // Actualizăm numărul de oferte
    updatePartnerOfferCounts();
  }
  return [...partnerWebsites];
};

/**
 * Gets all active partner websites for frontend display
 * @returns {Array} - List of active partner websites
 */
export const getAllActivePartners = () => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedPartners = getSavedPartners();
  if (savedPartners) {
    partnerWebsites = savedPartners;
    // Actualizăm numărul de oferte
    updatePartnerOfferCounts();
  }
  return [...partnerWebsites].filter(partner => partner.active);
};

/**
 * Gets a specific partner by ID
 * @param {number} id - The partner ID
 * @returns {object|undefined} - The partner or undefined if not found
 */
export const getPartnerById = (id) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedPartners = getSavedPartners();
  if (savedPartners) {
    partnerWebsites = savedPartners;
    // Actualizăm numărul de oferte
    updatePartnerOfferCounts();
  }
  return partnerWebsites.find(partner => partner.id === parseInt(id));
};

/**
 * Adds a new partner website
 * @param {object} partnerData - The partner data to add
 * @returns {object} - The added partner
 */
export const addPartner = (partnerData) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedPartners = getSavedPartners();
  if (savedPartners) {
    partnerWebsites = savedPartners;
  }

  const newId = partnerWebsites.length > 0 
    ? Math.max(...partnerWebsites.map(p => p.id)) + 1 
    : 1;
  
  const newPartner = {
    id: newId,
    ...partnerData,
    active: true,
    lastFetch: new Date().toISOString(),
    offersCount: 0, // Inițializăm cu 0, va fi actualizat corect la salvare
    logo: `https://via.placeholder.com/150x50?text=${partnerData.name.replace(/\s+/g, '')}`
  };
  
  partnerWebsites.push(newPartner);
  
  // Salvăm în localStorage
  savePartnersToStorage();
  
  // Update the partner API endpoints in the offer service
  // In a real implementation, this would update the actual service configuration
  console.log(`Added new partner: ${newPartner.name} (${newPartner.apiEndpoint})`);
  
  return newPartner;
};

/**
 * Updates an existing partner
 * @param {number} id - The partner ID to update
 * @param {object} partnerData - The updated partner data
 * @returns {object|null} - The updated partner or null if not found
 */
export const updatePartner = (id, partnerData) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedPartners = getSavedPartners();
  if (savedPartners) {
    partnerWebsites = savedPartners;
  }

  const index = partnerWebsites.findIndex(partner => partner.id === parseInt(id));
  
  if (index === -1) {
    return null;
  }
  
  const updatedPartner = {
    ...partnerWebsites[index],
    ...partnerData,
    logo: `https://via.placeholder.com/150x50?text=${partnerData.name.replace(/\s+/g, '')}`
  };
  
  partnerWebsites[index] = updatedPartner;
  
  // Salvăm în localStorage
  savePartnersToStorage();
  
  // Update the partner API endpoints in the offer service
  // In a real implementation, this would update the actual service configuration
  console.log(`Updated partner: ${updatedPartner.name} (${updatedPartner.apiEndpoint})`);
  
  return updatedPartner;
};

/**
 * Deletes a partner
 * @param {number} id - The partner ID to delete
 * @returns {object} - Object containing success status and deleted partner info
 */
export const deletePartner = (id) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedPartners = getSavedPartners();
  if (savedPartners) {
    partnerWebsites = savedPartners;
  }

  const index = partnerWebsites.findIndex(partner => partner.id === parseInt(id));
  
  if (index === -1) {
    return { success: false };
  }
  
  const deletedPartner = partnerWebsites[index];
  partnerWebsites.splice(index, 1);
  
  // Salvăm în localStorage
  savePartnersToStorage();
  
  // Ștergem toate ofertele asociate acestui partener
  const deletedOffersCount = deleteOffersByAgency(deletedPartner.name);
  
  console.log(`Deleted partner: ${deletedPartner.name} (${deletedPartner.apiEndpoint})`);
  console.log(`Deleted ${deletedOffersCount} offers associated with partner ${deletedPartner.name}`);
  
  return { 
    success: true, 
    partner: deletedPartner, 
    deletedOffersCount 
  };
};

/**
 * Toggles the active status of a partner
 * @param {number} id - The partner ID to toggle
 * @returns {object|null} - The updated partner or null if not found
 */
export const togglePartnerStatus = (id) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedPartners = getSavedPartners();
  if (savedPartners) {
    partnerWebsites = savedPartners;
  }

  const index = partnerWebsites.findIndex(partner => partner.id === parseInt(id));
  
  if (index === -1) {
    return null;
  }
  
  partnerWebsites[index].active = !partnerWebsites[index].active;
  
  // Salvăm în localStorage
  savePartnersToStorage();
  
  // Update the partner API endpoints in the offer service
  // In a real implementation, this would update the actual service configuration
  console.log(`Toggled partner status: ${partnerWebsites[index].name} (${partnerWebsites[index].active ? 'active' : 'inactive'})`);
  
  return partnerWebsites[index];
};
