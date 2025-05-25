import { mockOffers } from '../data/mockData';

// In-memory storage for offers
let offers = [...mockOffers];
let lastFetchTime = null;
let fetchInterval = 30 * 60 * 1000; // 30 minutes in milliseconds
let isInitialized = false;

// Simulated partner API endpoints
export const partnerApiEndpoints = [
  'https://api.partner1.example.com/offers',
  'https://api.partner2.example.com/packages',
  'https://api.partner3.example.com/tours'
];

/**
 * Simulates fetching offers from a partner website
 * In a real implementation, this would make actual API calls to partner websites
 */
const fetchOffersFromPartner = async (endpoint) => {
  console.log(`Fetching offers from: ${endpoint}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simulate random new offers (in a real implementation, this would parse actual API responses)
  if (Math.random() > 0.7) { // 30% chance of new offers
    const newOffersCount = Math.floor(Math.random() * 3) + 1; // 1-3 new offers
    
    const newOffers = Array.from({ length: newOffersCount }, (_, i) => {
      const id = Math.max(...offers.map(o => o.id)) + i + 1;
      const partnerName = endpoint.split('.')[1];
      
      return {
        id,
        title: `${partnerName} Special Offer ${id}`,
        location: ['Grecia', 'Turcia', 'Spania', 'Italia', 'Croația'][Math.floor(Math.random() * 5)],
        image: `https://images.pexels.com/photos/${1000000 + id}/pexels-photo-${1000000 + id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        images: Array(5).fill().map((_, idx) => 
          `https://images.pexels.com/photos/${1000000 + id + idx}/pexels-photo-${1000000 + id + idx}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
        ),
        price: Math.floor(Math.random() * 1000) + 300,
        oldPrice: Math.floor(Math.random() * 1000) + 800,
        rating: (Math.random() * 1 + 4).toFixed(1),
        agency: partnerName,
        duration: [5, 7, 10, 14][Math.floor(Math.random() * 4)],
        meals: ['All Inclusive', 'Demipensiune', 'Mic dejun'][Math.floor(Math.random() * 3)],
        transport: ['Avion', 'Autocar'][Math.floor(Math.random() * 2)],
        stars: [3, 4, 5][Math.floor(Math.random() * 3)],
        description: `O vacanță de neuitat în una dintre cele mai frumoase destinații. Ofertă specială de la ${partnerName}.`,
        facilities: [
          'Piscină exterioară', 
          'Spa & Wellness', 
          'Restaurant à la carte', 
          'Bar la piscină', 
          'Plajă privată', 
          'Wi-Fi gratuit'
        ],
        included: [
          'Bilete de avion dus-întors',
          'Transfer aeroport-hotel-aeroport',
          'Cazare în cameră dublă standard',
          'Masă conform regim ales',
          'Asistență turistică'
        ],
        notIncluded: [
          'Asigurare medicală și storno',
          'Excursii opționale',
          'Taxe locale'
        ],
        availableDates: [
          '15 Iunie 2023',
          '22 Iunie 2023',
          '29 Iunie 2023',
          '6 Iulie 2023'
        ]
      };
    });
    
    console.log(`Found ${newOffersCount} new offers from ${partnerName}`);
    return newOffers;
  }
  
  return [];
};

/**
 * Fetches offers from all partner websites
 */
const fetchAllPartnerOffers = async () => {
  try {
    console.log('Starting scheduled fetch of partner offers...');
    lastFetchTime = new Date();
    
    // Fetch from all partners in parallel
    const newOffersArrays = await Promise.all(
      partnerApiEndpoints.map(endpoint => fetchOffersFromPartner(endpoint))
    );
    
    // Flatten the array of arrays and filter out any empty results
    const newOffers = newOffersArrays.flat().filter(Boolean);
    
    if (newOffers.length > 0) {
      console.log(`Added ${newOffers.length} new offers from partner websites`);
      offers = [...offers, ...newOffers];
      
      // Dispatch an event to notify components about new offers
      window.dispatchEvent(new CustomEvent('offersUpdated', { 
        detail: { offers, newOffersCount: newOffers.length } 
      }));
    } else {
      console.log('No new offers found');
    }
    
    return offers;
  } catch (error) {
    console.error('Error fetching partner offers:', error);
    return offers;
  }
};

/**
 * Initializes the offer service and starts the periodic fetch
 */
const initializeOfferService = () => {
  if (isInitialized) return;
  
  console.log('Initializing offer service...');
  isInitialized = true;
  
  // Perform initial fetch
  fetchAllPartnerOffers();
  
  // Set up periodic fetch every 30 minutes
  setInterval(fetchAllPartnerOffers, fetchInterval);
  
  console.log(`Scheduled automatic offer updates every ${fetchInterval / 60000} minutes`);
};

/**
 * Gets all available offers
 */
export const getAllOffers = () => {
  if (!isInitialized) {
    initializeOfferService();
  }
  return offers;
};

/**
 * Gets a specific offer by ID
 */
export const getOfferById = (id) => {
  if (!isInitialized) {
    initializeOfferService();
  }
  return offers.find(offer => offer.id === parseInt(id));
};

/**
 * Gets the time remaining until the next scheduled fetch
 */
export const getNextUpdateTime = () => {
  if (!lastFetchTime) return null;
  
  const nextUpdateTime = new Date(lastFetchTime.getTime() + fetchInterval);
  const now = new Date();
  const timeRemaining = nextUpdateTime - now;
  
  const minutes = Math.floor(timeRemaining / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);
  
  return {
    nextUpdateTime,
    timeRemaining,
    formattedTime: `${minutes}m ${seconds}s`
  };
};

/**
 * Manually triggers a fetch of partner offers
 * This is used by the admin panel to force an update
 */
export const manualFetchOffers = async () => {
  console.log('Manual fetch triggered by admin');
  return await fetchAllPartnerOffers();
};

// Initialize the service when this module is imported
initializeOfferService();
