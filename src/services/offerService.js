// Endpoint-uri API pentru parteneri (în implementarea reală, acestea ar fi configurate în backend)
export const partnerApiEndpoints = [
  'https://api.travelplus.com/offers',
  'https://api.holidayexpert.com/offers',
  'https://api.paradisetours.com/offers',
  'https://api.vacationdreams.com/offers',
  'https://api.sunnyescapes.com/offers',
  'https://api.worldtraveller.com/offers'
];

// Simulăm ofertele din mockData.js
import { mockOffers } from '../data/mockData';

// Verificăm dacă există oferte salvate în localStorage
const getSavedOffers = () => {
  const savedOffers = localStorage.getItem('offers');
  return savedOffers ? JSON.parse(savedOffers) : null;
};

// Inițializăm offers din localStorage sau cu valorile implicite
let offers = getSavedOffers() || [...mockOffers];

// Funcție pentru a salva ofertele în localStorage
const saveOffersToStorage = () => {
  localStorage.setItem('offers', JSON.stringify(offers));
  
  // Declanșăm un eveniment pentru a notifica alte componente
  const event = new CustomEvent('offersUpdated', { detail: { offers: [...offers] } });
  window.dispatchEvent(event);
  
  // Declanșăm și un eveniment de storage pentru a asigura sincronizarea
  window.dispatchEvent(new Event('storage'));
};

/**
 * Gets all offers
 * @param {object} filters - Optional filters for offers
 * @returns {Array} - List of offers
 */
export const getAllOffers = (filters = {}) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedOffers = getSavedOffers();
  if (savedOffers) {
    offers = savedOffers;
  }
  
  let filteredOffers = [...offers];
  
  // Aplicăm filtrele
  if (filters.location) {
    filteredOffers = filteredOffers.filter(offer => 
      offer.location && offer.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }
  
  if (filters.minPrice) {
    filteredOffers = filteredOffers.filter(offer => 
      offer.price >= filters.minPrice
    );
  }
  
  if (filters.maxPrice) {
    filteredOffers = filteredOffers.filter(offer => 
      offer.price <= filters.maxPrice
    );
  }
  
  if (filters.agency) {
    filteredOffers = filteredOffers.filter(offer => 
      offer.agency === filters.agency
    );
  }
  
  if (filters.duration) {
    filteredOffers = filteredOffers.filter(offer => 
      offer.duration === filters.duration
    );
  }
  
  if (filters.meals) {
    filteredOffers = filteredOffers.filter(offer => 
      offer.meals === filters.meals
    );
  }
  
  if (filters.transport) {
    filteredOffers = filteredOffers.filter(offer => 
      offer.transport === filters.transport
    );
  }
  
  if (filters.stars) {
    filteredOffers = filteredOffers.filter(offer => 
      offer.stars === filters.stars
    );
  }
  
  return filteredOffers;
};

/**
 * Gets an offer by ID
 * @param {number} id - The offer ID
 * @returns {object|undefined} - The offer or undefined if not found
 */
export const getOfferById = (id) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedOffers = getSavedOffers();
  if (savedOffers) {
    offers = savedOffers;
  }
  
  if (!id) {
    console.error('ID-ul ofertei lipsește');
    return null;
  }
  
  try {
    const parsedId = parseInt(id);
    const foundOffer = offers.find(offer => offer.id === parsedId);
    
    if (!foundOffer) {
      console.warn(`Nu s-a găsit nicio ofertă cu ID-ul ${id}`);
    }
    
    return foundOffer;
  } catch (error) {
    console.error('Eroare la căutarea ofertei:', error);
    return null;
  }
};

/**
 * Gets offers by agency name
 * @param {string} agencyName - The agency name
 * @returns {Array} - List of offers from the specified agency
 */
export const getOffersByAgency = (agencyName) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedOffers = getSavedOffers();
  if (savedOffers) {
    offers = savedOffers;
  }
  
  return offers.filter(offer => offer.agency === agencyName);
};

/**
 * Deletes all offers associated with an agency
 * @param {string} agencyName - The agency name
 * @returns {number} - Number of deleted offers
 */
export const deleteOffersByAgency = (agencyName) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  const savedOffers = getSavedOffers();
  if (savedOffers) {
    offers = savedOffers;
  }
  
  const initialCount = offers.length;
  offers = offers.filter(offer => offer.agency !== agencyName);
  
  // Salvăm în localStorage
  saveOffersToStorage();
  
  return initialCount - offers.length;
};

/**
 * Simulates fetching offers from partner APIs
 * @returns {Promise} - Promise that resolves with the fetch result
 */
export const manualFetchOffers = async () => {
  // În implementarea reală, aici ar fi apeluri către API-urile partenerilor
  // Pentru simulare, vom adăuga câteva oferte noi aleatoriu
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // Reîncărcăm din localStorage pentru a asigura date actualizate
      const savedOffers = getSavedOffers();
      if (savedOffers) {
        offers = savedOffers;
      }
      
      // Generăm un număr aleatoriu de oferte noi (1-5)
      const newOffersCount = Math.floor(Math.random() * 5) + 1;
      const removedCount = 0; // În simulare, nu ștergem oferte
      
      // Obținem toate agențiile active
      const partners = JSON.parse(localStorage.getItem('partnerWebsites') || '[]');
      const activePartners = partners.filter(p => p.active);
      
      if (activePartners.length === 0) {
        resolve({
          success: true,
          message: 'Nu există agenții active pentru a actualiza ofertele.',
          newOffersCount: 0,
          removedCount: 0
        });
        return;
      }
      
      // Adăugăm oferte noi bazate pe cele existente, dar cu ID-uri și prețuri diferite
      const highestId = Math.max(...offers.map(offer => offer.id), 0);
      
      for (let i = 0; i < newOffersCount; i++) {
        // Alegem o agenție aleatorie din cele active
        const randomPartner = activePartners[Math.floor(Math.random() * activePartners.length)];
        
        // Creăm o ofertă nouă pentru această agenție
        const baseOffer = offers.length > 0 
          ? offers[Math.floor(Math.random() * offers.length)]
          : {
              destination: 'Destinație nouă',
              location: 'Locație nouă, Țară',
              price: 500,
              oldPrice: 600,
              duration: 7,
              transport: 'Avion',
              meals: 'All inclusive',
              stars: 4,
              image: 'https://source.unsplash.com/random/300x200/?travel',
              description: 'O nouă ofertă turistică cu cazare și transport incluse.'
            };
        
        const newOffer = {
          ...baseOffer,
          id: highestId + i + 1,
          agency: randomPartner.name,
          price: Math.floor(Math.random() * 500) + 300,
          oldPrice: Math.floor(Math.random() * 300) + 600,
          isNew: true,
          isLastMinute: Math.random() > 0.7
        };
        
        offers.push(newOffer);
      }
      
      // Salvăm în localStorage
      saveOffersToStorage();
      
      resolve({
        success: true,
        message: `Ofertele au fost actualizate cu succes.`,
        newOffersCount,
        removedCount
      });
    }, 1500); // Simulăm un delay de 1.5 secunde pentru a imita un apel API real
  });
};

/**
 * Automatically checks for updates based on timer
 * @returns {Promise} - Promise that resolves with the update result
 */
export const autoCheckForUpdates = async () => {
  // Verificăm dacă actualizările automate sunt activate
  const autoUpdatesEnabled = localStorage.getItem('autoUpdatesEnabled');
  
  // Implicit, actualizările automate sunt activate
  if (autoUpdatesEnabled === null || autoUpdatesEnabled === 'true') {
    // Simulăm un proces de actualizare automată
    return new Promise((resolve) => {
      setTimeout(() => {
        // Reîncărcăm din localStorage pentru a asigura date actualizate
        const savedOffers = getSavedOffers();
        if (savedOffers) {
          offers = savedOffers;
        }
        
        // Generăm un număr aleatoriu de oferte noi (0-3)
        const newOffersCount = Math.floor(Math.random() * 4);
        
        // Generăm un număr aleatoriu de oferte eliminate (0-2)
        const removedCount = Math.floor(Math.random() * 3);
        
        // Obținem toate agențiile active
        const partners = JSON.parse(localStorage.getItem('partnerWebsites') || '[]');
        const activePartners = partners.filter(p => p.active);
        
        if (activePartners.length === 0) {
          resolve({
            success: true,
            message: 'Nu există agenții active pentru a actualiza ofertele.',
            newOffersCount: 0,
            removedCount: 0
          });
          return;
        }
        
        // Adăugăm oferte noi
        if (newOffersCount > 0) {
          const highestId = Math.max(...offers.map(offer => offer.id), 0);
          
          for (let i = 0; i < newOffersCount; i++) {
            // Alegem o agenție aleatorie din cele active
            const randomPartner = activePartners[Math.floor(Math.random() * activePartners.length)];
            
            // Creăm o ofertă nouă pentru această agenție
            const baseOffer = offers.length > 0 
              ? offers[Math.floor(Math.random() * offers.length)]
              : {
                  destination: 'Destinație nouă',
                  location: 'Locație nouă, Țară',
                  price: 500,
                  oldPrice: 600,
                  duration: 7,
                  transport: 'Avion',
                  meals: 'All inclusive',
                  stars: 4,
                  image: 'https://source.unsplash.com/random/300x200/?travel',
                  description: 'O nouă ofertă turistică cu cazare și transport incluse.'
                };
            
            const newOffer = {
              ...baseOffer,
              id: highestId + i + 1,
              agency: randomPartner.name,
              price: Math.floor(Math.random() * 500) + 300,
              oldPrice: Math.floor(Math.random() * 300) + 600,
              isNew: true,
              isLastMinute: Math.random() > 0.7
            };
            
            offers.push(newOffer);
          }
        }
        
        // Eliminăm oferte expirate
        if (removedCount > 0 && offers.length > removedCount) {
          // Alegem aleatoriu oferte pentru a fi eliminate
          const offerIdsToRemove = [];
          for (let i = 0; i < removedCount; i++) {
            const randomIndex = Math.floor(Math.random() * offers.length);
            offerIdsToRemove.push(offers[randomIndex].id);
          }
          
          offers = offers.filter(offer => !offerIdsToRemove.includes(offer.id));
        }
        
        // Salvăm în localStorage
        saveOffersToStorage();
        
        // Resetăm timer-ul pentru următoarea actualizare
        resetUpdateTimer();
        
        resolve({
          success: true,
          message: `Actualizare automată completă.`,
          newOffersCount,
          removedCount
        });
      }, 2000); // Simulăm un delay de 2 secunde pentru a imita un proces de actualizare
    });
  } else {
    return Promise.resolve({
      success: false,
      message: 'Actualizările automate sunt dezactivate.',
      newOffersCount: 0,
      removedCount: 0
    });
  }
};

/**
 * Toggles automatic updates setting
 * @param {boolean} enabled - Whether to enable automatic updates
 * @returns {boolean} - The new setting value
 */
export const toggleAutoUpdates = (enabled) => {
  localStorage.setItem('autoUpdatesEnabled', enabled.toString());
  return enabled;
};

/**
 * Gets the next update time from localStorage
 * @returns {number|null} - Timestamp for next update or null if not set
 */
export const getNextUpdateTime = () => {
  const nextUpdateTime = localStorage.getItem('nextOfferUpdateTime');
  return nextUpdateTime ? parseInt(nextUpdateTime, 10) : null;
};

/**
 * Sets the next update time in localStorage
 * @param {number} timestamp - Timestamp for next update
 */
export const setNextUpdateTime = (timestamp) => {
  localStorage.setItem('nextOfferUpdateTime', timestamp.toString());
};

/**
 * Resets the update timer to default (30 minutes from now)
 */
export const resetUpdateTimer = () => {
  const nextUpdateTime = Date.now() + 30 * 60 * 1000; // 30 minute
  setNextUpdateTime(nextUpdateTime);
  return nextUpdateTime;
};

// Asigurăm-ne că avem oferte inițiale în localStorage
if (!getSavedOffers()) {
  saveOffersToStorage();
}

// Inițializăm timer-ul de actualizare dacă nu există
if (!getNextUpdateTime()) {
  resetUpdateTimer();
}
