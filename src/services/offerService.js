// Mock API endpoints for partner websites
export const partnerApiEndpoints = [
  'https://api.travelplus.com/offers',
  'https://api.holidayexpert.com/offers',
  'https://api.paradisetours.com/offers',
  'https://api.vacationdreams.com/offers',
  'https://api.sunnyescapes.com/offers',
  'https://api.worldtraveller.com/offers'
];

// Mock offers data
const offers = [
  {
    id: 1,
    destination: 'Barcelona, Spania',
    image: 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 399,
    oldPrice: 499,
    discount: 20,
    duration: 7,
    description: 'Bucură-te de o vacanță de vis în Barcelona, cu cazare la hotel 4* și mic dejun inclus. Explorează Sagrada Familia, Parcul Güell și savurează tapas autentice.',
    agency: 'TravelPlus',
    departureDate: '2023-07-15',
    returnDate: '2023-07-22',
    transport: 'Avion',
    meals: 'Mic dejun',
    accommodation: 'Hotel 4*',
    featured: true,
    isNew: true,
    isLastMinute: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    destination: 'Santorini, Grecia',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 599,
    oldPrice: 699,
    discount: 15,
    duration: 6,
    description: 'Descoperă frumusețea insulei Santorini, cu plaje vulcanice și apusuri spectaculoase. Pachetul include cazare la hotel boutique și transfer de la aeroport.',
    agency: 'HolidayExpert',
    departureDate: '2023-08-10',
    returnDate: '2023-08-16',
    transport: 'Avion',
    meals: 'Demipensiune',
    accommodation: 'Hotel Boutique',
    featured: true,
    isNew: false,
    isLastMinute: true,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() // 7 zile în urmă
  },
  {
    id: 3,
    destination: 'Roma, Italia',
    image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 449,
    oldPrice: 549,
    discount: 18,
    duration: 5,
    description: 'Vizitează Cetatea Eternă și descoperă istoria fascinantă a Romei. Pachetul include tur ghidat la Colosseum și Vatican, plus cazare în centrul istoric.',
    agency: 'ParadiseTours',
    departureDate: '2023-09-05',
    returnDate: '2023-09-10',
    transport: 'Avion',
    meals: 'Mic dejun',
    accommodation: 'Hotel 3*',
    featured: false,
    isNew: false,
    isLastMinute: false,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString() // 15 zile în urmă
  },
  {
    id: 4,
    destination: 'Paris, Franța',
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 499,
    oldPrice: 599,
    discount: 17,
    duration: 4,
    description: 'Experimentează romantismul Parisului cu un sejur de 4 zile. Vizitează Turnul Eiffel, Muzeul Luvru și bucură-te de o croazieră pe Sena.',
    agency: 'VacationDreams',
    departureDate: '2023-07-20',
    returnDate: '2023-07-24',
    transport: 'Avion',
    meals: 'Mic dejun',
    accommodation: 'Hotel 4*',
    featured: true,
    isNew: true,
    isLastMinute: false,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 zile în urmă
  },
  {
    id: 5,
    destination: 'Phuket, Thailanda',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 899,
    oldPrice: 1099,
    discount: 18,
    duration: 10,
    description: 'Relaxează-te pe plajele paradisiace din Phuket. Pachetul include cazare all inclusive la resort de lux, excursie la insule Phi Phi și masaj tradițional.',
    agency: 'SunnyEscapes',
    departureDate: '2023-10-15',
    returnDate: '2023-10-25',
    transport: 'Avion',
    meals: 'All inclusive',
    accommodation: 'Resort 5*',
    featured: false,
    isNew: false,
    isLastMinute: false,
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString() // 20 zile în urmă
  },
  {
    id: 6,
    destination: 'Praga, Cehia',
    image: 'https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 349,
    oldPrice: 429,
    discount: 19,
    duration: 5,
    description: 'Descoperă farmecul medieval al Pragăi, cu străzi pietruite și arhitectură gotică. Pachetul include tur ghidat al Castelului Praga și degustare de bere.',
    agency: 'WorldTraveller',
    departureDate: '2023-08-25',
    returnDate: '2023-08-30',
    transport: 'Avion',
    meals: 'Mic dejun',
    accommodation: 'Hotel 4*',
    featured: true,
    isNew: false,
    isLastMinute: true,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString() // 10 zile în urmă
  },
  {
    id: 7,
    destination: 'Bali, Indonezia',
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 999,
    oldPrice: 1299,
    discount: 23,
    duration: 12,
    description: 'Evadează în paradisul tropical din Bali. Pachetul include cazare la vilă privată cu piscină, excursii la temple și sesiune de yoga pe plajă.',
    agency: 'TravelPlus',
    departureDate: '2023-11-10',
    returnDate: '2023-11-22',
    transport: 'Avion',
    meals: 'Demipensiune',
    accommodation: 'Vilă privată',
    featured: false,
    isNew: false,
    isLastMinute: false,
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString() // 25 zile în urmă
  },
  {
    id: 8,
    destination: 'Londra, Marea Britanie',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 449,
    oldPrice: 529,
    discount: 15,
    duration: 5,
    description: 'Explorează capitala britanică cu un city break de 5 zile. Vizitează Big Ben, London Eye și Palatul Buckingham, plus shopping în Oxford Street.',
    agency: 'HolidayExpert',
    departureDate: '2023-09-15',
    returnDate: '2023-09-20',
    transport: 'Avion',
    meals: 'Mic dejun',
    accommodation: 'Hotel 3*',
    featured: false,
    isNew: false,
    isLastMinute: false,
    createdAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString() // 18 zile în urmă
  },
  {
    id: 9,
    destination: 'Maldive',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1499,
    oldPrice: 1899,
    discount: 21,
    duration: 8,
    description: 'Bucură-te de lux și relaxare în Maldive. Cazare în bungalow pe apă, all inclusive, snorkeling printre recifele de corali și cină romantică pe plajă.',
    agency: 'ParadiseTours',
    departureDate: '2023-10-05',
    returnDate: '2023-10-13',
    transport: 'Avion',
    meals: 'All inclusive',
    accommodation: 'Bungalow pe apă',
    featured: true,
    isNew: false,
    isLastMinute: false,
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString() // 12 zile în urmă
  },
  {
    id: 10,
    destination: 'New York, SUA',
    image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 999,
    oldPrice: 1199,
    discount: 17,
    duration: 7,
    description: 'Descoperă orașul care nu doarme niciodată. Pachetul include cazare în Manhattan, bilete la un musical pe Broadway și tur ghidat în Central Park.',
    agency: 'VacationDreams',
    departureDate: '2023-11-20',
    returnDate: '2023-11-27',
    transport: 'Avion',
    meals: 'Mic dejun',
    accommodation: 'Hotel 4*',
    featured: false,
    isNew: false,
    isLastMinute: false,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() // 30 zile în urmă
  },
  {
    id: 11,
    destination: 'Dubai, UAE',
    image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 799,
    oldPrice: 999,
    discount: 20,
    duration: 6,
    description: 'Experimentează luxul și opulența din Dubai. Pachetul include cazare la hotel 5*, safari în deșert, vizită la Burj Khalifa și shopping în Dubai Mall.',
    agency: 'SunnyEscapes',
    departureDate: '2023-08-05',
    returnDate: '2023-08-11',
    transport: 'Avion',
    meals: 'Demipensiune',
    accommodation: 'Hotel 5*',
    featured: true,
    isNew: false,
    isLastMinute: true,
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString() // 8 zile în urmă
  },
  {
    id: 12,
    destination: 'Viena, Austria',
    image: 'https://images.pexels.com/photos/3864424/pexels-photo-3864424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 399,
    oldPrice: 479,
    discount: 17,
    duration: 4,
    description: 'Descoperă eleganța și cultura Vienei. Pachetul include cazare în centru, bilete la concert de muzică clasică și tur ghidat la Palatul Schönbrunn.',
    agency: 'WorldTraveller',
    departureDate: '2023-12-10',
    returnDate: '2023-12-14',
    transport: 'Avion',
    meals: 'Mic dejun',
    accommodation: 'Hotel 4*',
    featured: false,
    isNew: true,
    isLastMinute: false,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 zile în urmă
  }
];

// Verificăm dacă există oferte salvate în localStorage
const loadOffersFromStorage = () => {
  const savedOffers = localStorage.getItem('tourismOffers');
  if (savedOffers) {
    const parsedOffers = JSON.parse(savedOffers);
    // Înlocuim array-ul de oferte cu cel din localStorage
    offers.length = 0;
    offers.push(...parsedOffers);
  }
};

// Salvăm ofertele în localStorage
const saveOffersToStorage = () => {
  localStorage.setItem('tourismOffers', JSON.stringify(offers));
};

// Încărcăm ofertele la inițializare
loadOffersFromStorage();

// Funcție pentru a genera oferte pentru un partener
const generateOffersForPartner = (partner) => {
  const destinations = [
    'Paris, Franța', 'Roma, Italia', 'Londra, UK', 'Barcelona, Spania',
    'Amsterdam, Olanda', 'Praga, Cehia', 'Viena, Austria', 'Berlin, Germania',
    'Atena, Grecia', 'Istanbul, Turcia', 'Lisabona, Portugalia', 'Budapesta, Ungaria'
  ];
  
  const images = [
    'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];
  
  // Adăugăm 2-4 oferte pentru partener
  const numOffers = Math.floor(Math.random() * 3) + 2;
  const newOffers = [];
  
  for (let i = 0; i < numOffers; i++) {
    const price = Math.floor(Math.random() * 500) + 300;
    const discount = Math.floor(Math.random() * 20) + 5;
    const oldPrice = Math.floor(price * (1 + discount / 100));
    const duration = Math.floor(Math.random() * 7) + 3;
    
    const randomDestIndex = Math.floor(Math.random() * destinations.length);
    const randomImgIndex = Math.floor(Math.random() * images.length);
    
    // Calculăm data de plecare (între 7 și 60 de zile în viitor)
    const daysToAdd = Math.floor(Math.random() * 53) + 7;
    const departureDate = new Date();
    departureDate.setDate(departureDate.getDate() + daysToAdd);
    
    // Calculăm data de întoarcere
    const returnDate = new Date(departureDate);
    returnDate.setDate(returnDate.getDate() + duration);
    
    // Determinăm dacă oferta este nouă sau last minute
    const isNew = Math.random() > 0.7; // 30% șansă să fie nouă
    const isLastMinute = !isNew && daysToAdd < 14; // Last minute dacă pleacă în mai puțin de 14 zile
    
    const newOffer = {
      id: offers.length > 0 ? Math.max(...offers.map(o => o.id)) + 1 + i : 1 + i,
      destination: destinations[randomDestIndex],
      image: images[randomImgIndex],
      price: price,
      oldPrice: oldPrice,
      discount: discount,
      duration: duration,
      description: `Descoperă frumusețea orașului ${destinations[randomDestIndex].split(',')[0]} cu acest pachet special de la ${partner.name}. Include cazare, transport și ghid local.`,
      agency: partner.name,
      departureDate: departureDate.toISOString().split('T')[0],
      returnDate: returnDate.toISOString().split('T')[0],
      transport: 'Avion',
      meals: 'Mic dejun',
      accommodation: 'Hotel 4*',
      featured: Math.random() > 0.7, // 30% șansă să fie featured
      isNew: isNew,
      isLastMinute: isLastMinute,
      createdAt: new Date().toISOString()
    };
    
    newOffers.push(newOffer);
  }
  
  return newOffers;
};

// Verificăm dacă există oferte pentru un partener
const hasOffersForPartner = (partnerName) => {
  return offers.some(offer => offer.agency === partnerName);
};

// Adăugăm un event listener pentru a actualiza ofertele când se schimbă partenerii
window.addEventListener('storage', (e) => {
  // Verificăm dacă schimbarea este legată de parteneri
  if (e.key === 'partnerWebsites') {
    updateOffersForPartners();
  }
});

// Funcție pentru a actualiza ofertele pentru toți partenerii
const updateOffersForPartners = () => {
  const savedPartners = localStorage.getItem('partnerWebsites');
  if (savedPartners) {
    const partners = JSON.parse(savedPartners);
    
    // Verificăm dacă există parteneri care nu au oferte asociate
    partners.forEach(partner => {
      if (!hasOffersForPartner(partner.name) && partner.active) {
        const newOffers = generateOffersForPartner(partner);
        offers.push(...newOffers);
        
        // Salvăm ofertele actualizate în localStorage
        saveOffersToStorage();
      }
    });
  }
};

// Inițializăm ofertele pentru partenerii existenți
updateOffersForPartners();

/**
 * Gets all offers
 * @returns {Array} - List of all offers
 */
export const getAllOffers = () => {
  // Asigurăm-ne că avem oferte pentru toți partenerii activi
  updateOffersForPartners();
  return [...offers];
};

/**
 * Gets featured offers
 * @returns {Array} - List of featured offers
 */
export const getFeaturedOffers = () => {
  return offers.filter(offer => offer.featured);
};

/**
 * Gets new offers (added in the last 7 days)
 * @returns {Array} - List of new offers
 */
export const getNewOffers = () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  return offers.filter(offer => {
    const createdAt = new Date(offer.createdAt);
    return createdAt >= sevenDaysAgo || offer.isNew;
  });
};

/**
 * Gets last minute offers (departure in less than 14 days)
 * @returns {Array} - List of last minute offers
 */
export const getLastMinuteOffers = () => {
  const now = new Date();
  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
  
  return offers.filter(offer => {
    const departureDate = new Date(offer.departureDate);
    return (departureDate >= now && departureDate <= twoWeeksFromNow) || offer.isLastMinute;
  });
};

/**
 * Gets an offer by ID
 * @param {number} id - The offer ID
 * @returns {object|undefined} - The offer or undefined if not found
 */
export const getOfferById = (id) => {
  return offers.find(offer => offer.id === parseInt(id));
};

/**
 * Gets offers by agency
 * @param {string} agencyName - The agency name
 * @returns {Array} - List of offers from the specified agency
 */
export const getOffersByAgency = (agencyName) => {
  return offers.filter(offer => offer.agency === agencyName);
};

/**
 * Searches offers based on criteria
 * @param {object} criteria - The search criteria
 * @returns {Array} - List of matching offers
 */
export const searchOffers = (criteria) => {
  let results = [...offers];
  
  if (criteria.destination) {
    results = results.filter(offer => 
      offer.destination.toLowerCase().includes(criteria.destination.toLowerCase())
    );
  }
  
  if (criteria.startDate) {
    results = results.filter(offer => 
      new Date(offer.departureDate) >= new Date(criteria.startDate)
    );
  }
  
  if (criteria.endDate) {
    results = results.filter(offer => 
      new Date(offer.returnDate) <= new Date(criteria.endDate)
    );
  }
  
  if (criteria.minPrice) {
    results = results.filter(offer => offer.price >= criteria.minPrice);
  }
  
  if (criteria.maxPrice) {
    results = results.filter(offer => offer.price <= criteria.maxPrice);
  }
  
  return results;
};

/**
 * Adds a new offer
 * @param {object} offerData - The offer data
 * @returns {object} - The added offer
 */
export const addOffer = (offerData) => {
  const newId = Math.max(...offers.map(o => o.id)) + 1;
  
  const newOffer = {
    id: newId,
    ...offerData,
    isNew: true,
    createdAt: new Date().toISOString()
  };
  
  offers.push(newOffer);
  
  // Salvăm ofertele actualizate în localStorage
  saveOffersToStorage();
  
  return newOffer;
};

/**
 * Updates an existing offer
 * @param {number} id - The offer ID
 * @param {object} offerData - The updated offer data
 * @returns {object|null} - The updated offer or null if not found
 */
export const updateOffer = (id, offerData) => {
  const index = offers.findIndex(offer => offer.id === parseInt(id));
  
  if (index === -1) {
    return null;
  }
  
  offers[index] = {
    ...offers[index],
    ...offerData
  };
  
  // Salvăm ofertele actualizate în localStorage
  saveOffersToStorage();
  
  return offers[index];
};

/**
 * Deletes an offer
 * @param {number} id - The offer ID to delete
 * @returns {boolean} - Whether the deletion was successful
 */
export const deleteOffer = (id) => {
  const index = offers.findIndex(offer => offer.id === parseInt(id));
  
  if (index === -1) {
    return false;
  }
  
  offers.splice(index, 1);
  
  // Salvăm ofertele actualizate în localStorage
  saveOffersToStorage();
  
  return true;
};

/**
 * Deletes all offers for a specific agency/partner
 * @param {string} agencyName - The agency/partner name
 * @returns {number} - Number of offers deleted
 */
export const deleteOffersByAgency = (agencyName) => {
  // Reîncărcăm din localStorage pentru a asigura date actualizate
  loadOffersFromStorage();
  
  // Numărăm câte oferte vor fi șterse
  const initialLength = offers.length;
  
  // Filtrăm ofertele, păstrându-le doar pe cele care NU aparțin agenției specificate
  const remainingOffers = offers.filter(offer => offer.agency !== agencyName);
  
  // Calculăm câte oferte au fost eliminate
  const deletedCount = initialLength - remainingOffers.length;
  
  // Actualizăm array-ul de oferte
  offers.length = 0;
  offers.push(...remainingOffers);
  
  // Salvăm ofertele actualizate în localStorage
  saveOffersToStorage();
  
  // Declanșăm un eveniment pentru a notifica alte componente
  const offersUpdatedEvent = new CustomEvent('offersUpdated', {
    detail: { offers: [...offers] }
  });
  window.dispatchEvent(offersUpdatedEvent);
  
  return deletedCount;
};

/**
 * Gets the next update time for offers
 * @returns {object} - The next update time with formatted time string
 */
export const getNextUpdateTime = () => {
  const savedTimestamp = localStorage.getItem('nextOfferUpdateTime');
  let nextUpdate;
  
  if (savedTimestamp) {
    nextUpdate = new Date(parseInt(savedTimestamp, 10));
  } else {
    nextUpdate = new Date();
    nextUpdate.setMinutes(nextUpdate.getMinutes() + 30);
    localStorage.setItem('nextOfferUpdateTime', nextUpdate.getTime().toString());
  }
  
  // Format time as HH:MM:SS
  const hours = nextUpdate.getHours().toString().padStart(2, '0');
  const minutes = nextUpdate.getMinutes().toString().padStart(2, '0');
  const seconds = nextUpdate.getSeconds().toString().padStart(2, '0');
  
  return {
    date: nextUpdate,
    formattedTime: `${hours}:${minutes}:${seconds}`
  };
};

/**
 * Removes expired offers (departure date in the past)
 * @returns {number} - Number of offers removed
 */
export const removeExpiredOffers = () => {
  const now = new Date();
  const initialLength = offers.length;
  
  // Filtrăm ofertele expirate (data de plecare în trecut)
  const validOffers = offers.filter(offer => {
    const departureDate = new Date(offer.departureDate);
    return departureDate >= now;
  });
  
  // Actualizăm array-ul de oferte
  offers.length = 0;
  offers.push(...validOffers);
  
  // Salvăm ofertele actualizate în localStorage
  saveOffersToStorage();
  
  return initialLength - offers.length;
};

/**
 * Updates offer categories (new, last minute)
 */
export const updateOfferCategories = () => {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
  
  // Actualizăm categoriile pentru fiecare ofertă
  offers.forEach(offer => {
    // Verificăm dacă oferta este nouă (adăugată în ultimele 7 zile)
    const createdAt = new Date(offer.createdAt);
    offer.isNew = createdAt >= sevenDaysAgo;
    
    // Verificăm dacă oferta este last minute (plecare în mai puțin de 14 zile)
    const departureDate = new Date(offer.departureDate);
    offer.isLastMinute = departureDate >= now && departureDate <= twoWeeksFromNow;
  });
  
  // Salvăm ofertele actualizate în localStorage
  saveOffersToStorage();
};

/**
 * Manually fetches offers from partner websites
 * @returns {Promise<Object>} - Promise resolving to a result object
 */
export const manualFetchOffers = async () => {
  // Simulate fetching offers from partner websites
  console.log('Manually fetching offers from partner websites...');
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Eliminăm ofertele expirate
  const removedCount = removeExpiredOffers();
  
  // Actualizăm categoriile ofertelor existente
  updateOfferCategories();
  
  // Forțăm actualizarea ofertelor pentru toți partenerii
  const savedPartners = localStorage.getItem('partnerWebsites');
  let newOffersCount = 0;
  
  if (savedPartners) {
    const partners = JSON.parse(savedPartners);
    
    // Generăm oferte noi pentru toți partenerii activi
    partners.forEach(partner => {
      if (partner.active) {
        // Verificăm câte oferte are partenerul în prezent
        const existingOffers = offers.filter(offer => offer.agency === partner.name);
        
        // Generăm oferte noi pentru a ajunge la numărul dorit
        if (existingOffers.length < partner.offersCount) {
          const numNewOffers = Math.min(3, partner.offersCount - existingOffers.length);
          const newOffers = [];
          
          for (let i = 0; i < numNewOffers; i++) {
            const destinations = [
              'Paris, Franța', 'Roma, Italia', 'Londra, UK', 'Barcelona, Spania',
              'Amsterdam, Olanda', 'Praga, Cehia', 'Viena, Austria', 'Berlin, Germania',
              'Atena, Grecia', 'Istanbul, Turcia', 'Lisabona, Portugalia', 'Budapesta, Ungaria'
            ];
            
            const images = [
              'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ];
            
            const price = Math.floor(Math.random() * 500) + 300;
            const discount = Math.floor(Math.random() * 20) + 5;
            const oldPrice = Math.floor(price * (1 + discount / 100));
            const duration = Math.floor(Math.random() * 7) + 3;
            
            const randomDestIndex = Math.floor(Math.random() * destinations.length);
            const randomImgIndex = Math.floor(Math.random() * images.length);
            
            // Calculăm data de plecare (între 7 și 60 de zile în viitor)
            const daysToAdd = Math.floor(Math.random() * 53) + 7;
            const departureDate = new Date();
            departureDate.setDate(departureDate.getDate() + daysToAdd);
            
            // Calculăm data de întoarcere
            const returnDate = new Date(departureDate);
            returnDate.setDate(returnDate.getDate() + duration);
            
            // Determinăm dacă oferta este nouă sau last minute
            const isNew = true; // Toate ofertele noi sunt marcate ca "noi"
            const isLastMinute = daysToAdd < 14; // Last minute dacă pleacă în mai puțin de 14 zile
            
            const newOffer = {
              id: offers.length > 0 ? Math.max(...offers.map(o => o.id)) + 1 + i : 1 + i,
              destination: destinations[randomDestIndex],
              image: images[randomImgIndex],
              price: price,
              oldPrice: oldPrice,
              discount: discount,
              duration: duration,
              description: `Descoperă frumusețea orașului ${destinations[randomDestIndex].split(',')[0]} cu acest pachet special de la ${partner.name}. Include cazare, transport și ghid local.`,
              agency: partner.name,
              departureDate: departureDate.toISOString().split('T')[0],
              returnDate: returnDate.toISOString().split('T')[0],
              transport: 'Avion',
              meals: 'Mic dejun',
              accommodation: 'Hotel 4*',
              featured: Math.random() > 0.7, // 30% șansă să fie featured
              isNew: isNew,
              isLastMinute: isLastMinute,
              createdAt: new Date().toISOString()
            };
            
            newOffers.push(newOffer);
          }
          
          offers.push(...newOffers);
          newOffersCount += newOffers.length;
          
          // Salvăm ofertele actualizate în localStorage
          saveOffersToStorage();
        }
      }
    });
  }
  
  // Resetăm cronometrul pentru următoarea actualizare
  const nextUpdateTime = Date.now() + 30 * 60 * 1000; // 30 minute
  localStorage.setItem('nextOfferUpdateTime', nextUpdateTime.toString());
  
  // Declanșăm un eveniment pentru a notifica alte componente
  const offersUpdatedEvent = new CustomEvent('offersUpdated', {
    detail: { offers: [...offers] }
  });
  window.dispatchEvent(offersUpdatedEvent);
  
  // Return a success message
  return {
    success: true,
    message: 'Ofertele au fost actualizate cu succes!',
    newOffersCount: newOffersCount,
    removedCount: removedCount
  };
};

/**
 * Automatically checks for updates (called by timer)
 * @returns {Promise<Object>} - Promise resolving to a result object
 */
export const autoCheckForUpdates = async () => {
  console.log('Auto-checking for updates...');
  return await manualFetchOffers();
};
