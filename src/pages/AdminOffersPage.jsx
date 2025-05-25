import React, { useState, useEffect } from 'react';
import { FaStar, FaSearch, FaFilter, FaEye } from 'react-icons/fa';
import { getAllOffers } from '../services/offerService';
import { Link } from 'react-router-dom';

const AdminOffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    agency: '',
    transport: '',
    meals: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filter dropdowns
  const locations = [...new Set(offers.map(offer => offer.location.split(',')[0].trim()))];
  const agencies = [...new Set(offers.map(offer => offer.agency))];
  const transports = [...new Set(offers.map(offer => offer.transport))];
  const mealTypes = [...new Set(offers.map(offer => offer.meals))];

  useEffect(() => {
    // Load initial data
    const allOffers = getAllOffers();
    setOffers(allOffers);
    setFilteredOffers(allOffers);

    // Listen for offer updates
    const handleOffersUpdated = (event) => {
      const { offers } = event.detail;
      setOffers(offers);
      applyFilters(offers, searchTerm, filters);
    };

    window.addEventListener('offersUpdated', handleOffersUpdated);

    return () => {
      window.removeEventListener('offersUpdated', handleOffersUpdated);
    };
  }, []);

  useEffect(() => {
    applyFilters(offers, searchTerm, filters);
  }, [searchTerm, filters]);

  const applyFilters = (offersList, search, filterCriteria) => {
    let result = [...offersList];

    // Apply search term
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(offer => 
        offer.title.toLowerCase().includes(searchLower) ||
        offer.location.toLowerCase().includes(searchLower) ||
        offer.agency.toLowerCase().includes(searchLower)
      );
    }

    // Apply filters
    if (filterCriteria.location) {
      result = result.filter(offer => 
        offer.location.split(',')[0].trim() === filterCriteria.location
      );
    }

    if (filterCriteria.agency) {
      result = result.filter(offer => offer.agency === filterCriteria.agency);
    }

    if (filterCriteria.transport) {
      result = result.filter(offer => offer.transport === filterCriteria.transport);
    }

    if (filterCriteria.meals) {
      result = result.filter(offer => offer.meals === filterCriteria.meals);
    }

    setFilteredOffers(result);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      location: '',
      agency: '',
      transport: '',
      meals: ''
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Oferte</h1>
          <p className="text-gray-600">Vizualizați toate ofertele disponibile</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Caută oferte..."
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-gray-700 hover:text-primary mr-4"
            >
              <FaFilter className="mr-2" />
              <span>{showFilters ? 'Ascunde filtrele' : 'Arată filtrele'}</span>
            </button>
            
            {(searchTerm || filters.location || filters.agency || filters.transport || filters.meals) && (
              <button
                onClick={clearFilters}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Resetează filtrele
              </button>
            )}
          </div>
        </div>
        
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Destinație
              </label>
              <select
                id="location"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Toate destinațiile</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="agency" className="block text-sm font-medium text-gray-700 mb-1">
                Agenție
              </label>
              <select
                id="agency"
                name="agency"
                value={filters.agency}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Toate agențiile</option>
                {agencies.map(agency => (
                  <option key={agency} value={agency}>{agency}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="transport" className="block text-sm font-medium text-gray-700 mb-1">
                Transport
              </label>
              <select
                id="transport"
                name="transport"
                value={filters.transport}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Toate tipurile</option>
                {transports.map(transport => (
                  <option key={transport} value={transport}>{transport}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="meals" className="block text-sm font-medium text-gray-700 mb-1">
                Masă
              </label>
              <select
                id="meals"
                name="meals"
                value={filters.meals}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Toate tipurile</option>
                {mealTypes.map(meal => (
                  <option key={meal} value={meal}>{meal}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ofertă
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destinație
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preț
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agenție
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transport
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Masă
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durată
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acțiuni
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOffers.map((offer) => (
                <tr key={offer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md object-cover" src={offer.image} alt={offer.title} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{offer.title}</div>
                        <div className="flex items-center">
                          {[...Array(offer.stars)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xs" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{offer.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">{offer.price} €</div>
                    <div className="text-sm text-gray-500 line-through">{offer.oldPrice} €</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{offer.agency}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{offer.transport}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{offer.meals}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{offer.duration} zile</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to={`/oferta/${offer.id}`}
                      target="_blank"
                      className="text-primary hover:text-primary-dark"
                      title="Vizualizează"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))}
              {filteredOffers.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                    Nu s-au găsit oferte care să corespundă criteriilor de căutare.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOffersPage;
