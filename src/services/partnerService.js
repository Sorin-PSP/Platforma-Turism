import { partnerApiEndpoints } from './offerService';

// In-memory storage for partner websites
let partnerWebsites = partnerApiEndpoints.map((endpoint, index) => {
  const domain = endpoint.split('//')[1].split('/')[0];
  const name = domain.split('.')[1];
  
  return {
    id: index + 1,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    domain,
    apiEndpoint: endpoint,
    active: true,
    lastFetch: new Date().toISOString(),
    offersCount: Math.floor(Math.random() * 50) + 10
  };
});

/**
 * Gets all partner websites
 * @returns {Array} - List of partner websites
 */
export const getAllPartners = () => {
  return [...partnerWebsites];
};

/**
 * Gets a specific partner by ID
 * @param {number} id - The partner ID
 * @returns {object|undefined} - The partner or undefined if not found
 */
export const getPartnerById = (id) => {
  return partnerWebsites.find(partner => partner.id === parseInt(id));
};

/**
 * Adds a new partner website
 * @param {object} partnerData - The partner data to add
 * @returns {object} - The added partner
 */
export const addPartner = (partnerData) => {
  const newId = partnerWebsites.length > 0 
    ? Math.max(...partnerWebsites.map(p => p.id)) + 1 
    : 1;
  
  const newPartner = {
    id: newId,
    ...partnerData,
    active: true,
    lastFetch: new Date().toISOString(),
    offersCount: 0
  };
  
  partnerWebsites.push(newPartner);
  
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
  const index = partnerWebsites.findIndex(partner => partner.id === parseInt(id));
  
  if (index === -1) {
    return null;
  }
  
  const updatedPartner = {
    ...partnerWebsites[index],
    ...partnerData
  };
  
  partnerWebsites[index] = updatedPartner;
  
  // Update the partner API endpoints in the offer service
  // In a real implementation, this would update the actual service configuration
  console.log(`Updated partner: ${updatedPartner.name} (${updatedPartner.apiEndpoint})`);
  
  return updatedPartner;
};

/**
 * Deletes a partner
 * @param {number} id - The partner ID to delete
 * @returns {boolean} - Whether the deletion was successful
 */
export const deletePartner = (id) => {
  const index = partnerWebsites.findIndex(partner => partner.id === parseInt(id));
  
  if (index === -1) {
    return false;
  }
  
  const deletedPartner = partnerWebsites[index];
  partnerWebsites.splice(index, 1);
  
  // Update the partner API endpoints in the offer service
  // In a real implementation, this would update the actual service configuration
  console.log(`Deleted partner: ${deletedPartner.name} (${deletedPartner.apiEndpoint})`);
  
  return true;
};

/**
 * Toggles the active status of a partner
 * @param {number} id - The partner ID to toggle
 * @returns {object|null} - The updated partner or null if not found
 */
export const togglePartnerStatus = (id) => {
  const index = partnerWebsites.findIndex(partner => partner.id === parseInt(id));
  
  if (index === -1) {
    return null;
  }
  
  partnerWebsites[index].active = !partnerWebsites[index].active;
  
  // Update the partner API endpoints in the offer service
  // In a real implementation, this would update the actual service configuration
  console.log(`Toggled partner status: ${partnerWebsites[index].name} (${partnerWebsites[index].active ? 'active' : 'inactive'})`);
  
  return partnerWebsites[index];
};
