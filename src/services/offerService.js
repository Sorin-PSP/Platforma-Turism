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
    featured: true
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
    featured: true
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
    featured: false
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
    featured: true
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
    featured: false
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
    featured: true
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
    featured: false
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
    featured: false
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
    featured: true
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
    featured: false
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
    featured: true
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
    featured: false
  }
];

/**
 * Gets all offers
 * @returns {Array} - List of all offers
 */
export const getAllOffers = () => {
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
    ...offerData
  };
  
  offers.push(newOffer);
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
  return true;
};

/**
 * Gets the next update time for offers
 * @returns {Date} - The next update time
 */
export const getNextUpdateTime = () => {
  // Return a time 24 hours from now
  const nextUpdate = new Date();
  nextUpdate.setHours(nextUpdate.getHours() + 24);
  return nextUpdate;
};

/**
 * Manually fetches offers from partner websites
 * @returns {Promise<Array>} - Promise resolving to a list of new offers
 */
export const manualFetchOffers = async () => {
  // Simulate fetching offers from partner websites
  console.log('Manually fetching offers from partner websites...');
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return a success message (in a real app, this would return new offers)
  return {
    success: true,
    message: 'Ofertele au fost actualizate cu succes!',
    newOffersCount: Math.floor(Math.random() * 10) + 1 // Random number of new offers
  };
};
