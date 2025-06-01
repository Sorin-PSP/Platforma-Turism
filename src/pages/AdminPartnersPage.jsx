import React, { useState, useEffect } from 'react';
import { 
  FaGlobe, 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaToggleOn, 
  FaToggleOff,
  FaExclamationTriangle,
  FaCheck,
  FaSync
} from 'react-icons/fa';
import { 
  getAllPartners, 
  addPartner, 
  updatePartner, 
  deletePartner, 
  togglePartnerStatus 
} from '../services/partnerService';
import { manualFetchOffers, getOffersByAgency } from '../services/offerService';

const AdminPartnersPage = () => {
  const [partners, setPartners] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    apiEndpoint: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPartners();
    
    // Adăugăm un event listener pentru a detecta schimbările în localStorage
    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup la demontarea componentei
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleStorageChange = (e) => {
    // Verificăm dacă schimbarea este legată de parteneri
    if (e.key === 'partnerWebsites') {
      loadPartners();
    }
  };

  const loadPartners = () => {
    const partnersList = getAllPartners();
    
    // Pentru fiecare partener, verificăm numărul real de oferte
    const partnersWithOfferCounts = partnersList.map(partner => {
      const partnerOffers = getOffersByAgency(partner.name);
      return {
        ...partner,
        offersCount: partnerOffers.length
      };
    });
    
    setPartners(partnersWithOfferCounts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Numele este obligatoriu';
    }
    
    if (!formData.domain.trim()) {
      errors.domain = 'Domeniul este obligatoriu';
    } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(formData.domain)) {
      errors.domain = 'Domeniul nu este valid (ex: example.com)';
    }
    
    if (!formData.apiEndpoint.trim()) {
      errors.apiEndpoint = 'Endpoint-ul API este obligatoriu';
    } else if (!/^https?:\/\//.test(formData.apiEndpoint)) {
      errors.apiEndpoint = 'Endpoint-ul API trebuie să înceapă cu http:// sau https://';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddPartner = () => {
    setCurrentPartner(null);
    setFormData({
      name: '',
      domain: '',
      apiEndpoint: ''
    });
    setFormErrors({});
    setShowModal(true);
  };

  const handleEditPartner = (partner) => {
    setCurrentPartner(partner);
    setFormData({
      name: partner.name,
      domain: partner.domain,
      apiEndpoint: partner.apiEndpoint
    });
    setFormErrors({});
    setShowModal(true);
  };

  const handleDeletePartner = (partnerId) => {
    if (window.confirm('Sunteți sigur că doriți să ștergeți acest partener?')) {
      const success = deletePartner(partnerId);
      
      if (success) {
        showNotification('success', 'Partenerul a fost șters cu succes');
        loadPartners();
      } else {
        showNotification('error', 'A apărut o eroare la ștergerea partenerului');
      }
    }
  };

  const handleToggleStatus = (partnerId) => {
    const updatedPartner = togglePartnerStatus(partnerId);
    
    if (updatedPartner) {
      showNotification('success', `Partenerul a fost ${updatedPartner.active ? 'activat' : 'dezactivat'} cu succes`);
      loadPartners();
    } else {
      showNotification('error', 'A apărut o eroare la actualizarea statusului');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    if (currentPartner) {
      // Update existing partner
      const updatedPartner = updatePartner(currentPartner.id, formData);
      
      if (updatedPartner) {
        showNotification('success', 'Partenerul a fost actualizat cu succes');
        setShowModal(false);
        
        // Actualizăm ofertele pentru a reflecta schimbările
        await refreshOffers();
        loadPartners();
      } else {
        showNotification('error', 'A apărut o eroare la actualizarea partenerului');
      }
    } else {
      // Add new partner
      const newPartner = addPartner(formData);
      
      if (newPartner) {
        showNotification('success', 'Partenerul a fost adăugat cu succes');
        setShowModal(false);
        
        // Actualizăm ofertele pentru a reflecta noul partener
        await refreshOffers();
        loadPartners();
      } else {
        showNotification('error', 'A apărut o eroare la adăugarea partenerului');
      }
    }
  };

  const refreshOffers = async () => {
    setIsLoading(true);
    try {
      const result = await manualFetchOffers();
      if (result.success) {
        showNotification('success', `${result.message} S-au adăugat ${result.newOffersCount} oferte noi.`);
        // Reîncărcăm partenerii pentru a actualiza numărul de oferte
        loadPartners();
      } else {
        showNotification('error', 'A apărut o eroare la actualizarea ofertelor');
      }
    } catch (error) {
      showNotification('error', 'A apărut o eroare la actualizarea ofertelor');
      console.error('Error refreshing offers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Website-uri Partenere</h1>
          <p className="text-sm md:text-base text-gray-600">Gestionați website-urile partenere pentru preluarea ofertelor</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={refreshOffers}
            disabled={isLoading}
            className={`bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center text-sm md:text-base ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            <FaSync className={`mr-1 md:mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Actualizează Oferte
          </button>
          <button
            onClick={handleAddPartner}
            className="bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center text-sm md:text-base"
          >
            <FaPlus className="mr-1 md:mr-2" />
            Adaugă Partener
          </button>
        </div>
      </div>

      {notification && (
        <div className={`mb-4 p-2 md:p-3 rounded-md text-sm ${
          notification.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          <div className="flex items-center">
            {notification.type === 'success' ? (
              <FaCheck className="mr-2" />
            ) : (
              <FaExclamationTriangle className="mr-2" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nume
                </th>
                <th className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Domeniu
                </th>
                <th className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Endpoint API
                </th>
                <th className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Oferte
                </th>
                <th className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Ultima Actualizare
                </th>
                <th className="px-2 md:px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acțiuni
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {partners.map((partner) => (
                <tr key={partner.id}>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <FaGlobe className="text-gray-500 text-xs" />
                      </div>
                      <div className="ml-2 md:ml-3">
                        <div className="text-xs md:text-sm font-medium text-gray-900">{partner.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap">
                    <div className="text-xs md:text-sm text-gray-900">{partner.domain}</div>
                  </td>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap hidden md:table-cell">
                    <div className="text-xs md:text-sm text-gray-500 truncate max-w-[150px] lg:max-w-xs">{partner.apiEndpoint}</div>
                  </td>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap">
                    <span className={`px-1.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      partner.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {partner.active ? 'Activ' : 'Inactiv'}
                    </span>
                  </td>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-500">
                    {partner.offersCount}
                  </td>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-500 hidden md:table-cell">
                    {new Date(partner.lastFetch).toLocaleString('ro-RO')}
                  </td>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-right text-xs md:text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleToggleStatus(partner.id)}
                        className={`text-${partner.active ? 'yellow' : 'green'}-600 hover:text-${partner.active ? 'yellow' : 'green'}-900`}
                        title={partner.active ? 'Dezactivează' : 'Activează'}
                      >
                        {partner.active ? <FaToggleOn size={16} /> : <FaToggleOff size={16} />}
                      </button>
                      <button
                        onClick={() => handleEditPartner(partner)}
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Editează"
                      >
                        <FaEdit size={14} />
                      </button>
                      <button
                        onClick={() => handleDeletePartner(partner.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Șterge"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {partners.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-2 md:px-4 py-2 text-center text-xs md:text-sm text-gray-500">
                    Nu există parteneri. Adăugați primul partener folosind butonul de mai sus.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Partner Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-4 pb-3 sm:p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-2 text-center sm:mt-0 sm:ml-0 sm:text-left w-full">
                      <h3 className="text-base md:text-lg leading-6 font-medium text-gray-900">
                        {currentPartner ? 'Editează Partener' : 'Adaugă Partener Nou'}
                      </h3>
                      <div className="mt-3 space-y-3">
                        <div>
                          <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700">
                            Nume
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full border ${formErrors.name ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-1.5 px-2 text-xs md:text-sm focus:outline-none focus:ring-primary focus:border-primary`}
                          />
                          {formErrors.name && (
                            <p className="mt-1 text-xs text-red-600">{formErrors.name}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="domain" className="block text-xs md:text-sm font-medium text-gray-700">
                            Domeniu
                          </label>
                          <input
                            type="text"
                            name="domain"
                            id="domain"
                            value={formData.domain}
                            onChange={handleInputChange}
                            placeholder="example.com"
                            className={`mt-1 block w-full border ${formErrors.domain ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-1.5 px-2 text-xs md:text-sm focus:outline-none focus:ring-primary focus:border-primary`}
                          />
                          {formErrors.domain && (
                            <p className="mt-1 text-xs text-red-600">{formErrors.domain}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="apiEndpoint" className="block text-xs md:text-sm font-medium text-gray-700">
                            Endpoint API
                          </label>
                          <input
                            type="text"
                            name="apiEndpoint"
                            id="apiEndpoint"
                            value={formData.apiEndpoint}
                            onChange={handleInputChange}
                            placeholder="https://api.example.com/offers"
                            className={`mt-1 block w-full border ${formErrors.apiEndpoint ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-1.5 px-2 text-xs md:text-sm focus:outline-none focus:ring-primary focus:border-primary`}
                          />
                          {formErrors.apiEndpoint && (
                            <p className="mt-1 text-xs text-red-600">{formErrors.apiEndpoint}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:px-5 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-3 py-1.5 bg-primary text-xs md:text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto"
                  >
                    {currentPartner ? 'Salvează' : 'Adaugă'}
                  </button>
                  <button
                    type="button"
                    className="mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-3 py-1.5 bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto"
                    onClick={() => setShowModal(false)}
                  >
                    Anulează
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPartnersPage;
