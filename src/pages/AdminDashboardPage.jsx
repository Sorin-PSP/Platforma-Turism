import React, { useState, useEffect } from 'react';
import { FaGlobe, FaList, FaSync, FaExclamationTriangle } from 'react-icons/fa';
import { getAllPartners } from '../services/partnerService';
import { getAllOffers, manualFetchOffers, getNextUpdateTime, autoCheckForUpdates } from '../services/offerService';
import OfferUpdateStatus from '../components/OfferUpdateStatus';

const AdminDashboardPage = () => {
  const [partners, setPartners] = useState([]);
  const [offers, setOffers] = useState([]);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState(null);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);

  useEffect(() => {
    // Load initial data
    loadDashboardData();

    // Set up timer for next update
    const timer = setInterval(() => {
      setUpdateInfo(getNextUpdateTime());
    }, 1000);

    // Listen for offer updates
    const handleOffersUpdated = (event) => {
      loadDashboardData(); // Reîncărcăm toate datele pentru a asigura sincronizarea
      setLastUpdateTime(new Date().toLocaleTimeString());
    };

    window.addEventListener('offersUpdated', handleOffersUpdated);
    
    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (e.key === 'partnerWebsites' || e.key === 'offers') {
        loadDashboardData();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearInterval(timer);
      window.removeEventListener('offersUpdated', handleOffersUpdated);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const loadDashboardData = () => {
    // Încărcăm partenerii și ofertele
    const allPartners = getAllPartners();
    const allOffers = getAllOffers();
    
    // Actualizăm numărul de oferte pentru fiecare partener
    const partnersWithUpdatedCounts = allPartners.map(partner => {
      const partnerOffers = allOffers.filter(offer => offer.agency === partner.name);
      return {
        ...partner,
        offersCount: partnerOffers.length
      };
    });
    
    setPartners(partnersWithUpdatedCounts);
    setOffers(allOffers);
    
    // Verificăm dacă există un timestamp pentru ultima actualizare
    const lastUpdate = localStorage.getItem('lastOfferUpdateTime');
    if (lastUpdate) {
      setLastUpdateTime(new Date(parseInt(lastUpdate, 10)).toLocaleTimeString());
    }
  };

  const handleManualUpdate = async () => {
    if (isUpdating) return; // Prevenim actualizări multiple simultane
    
    setIsUpdating(true);
    setUpdateMessage({ type: 'info', text: 'Se actualizează ofertele...' });

    try {
      const updatedOffers = await manualFetchOffers();
      
      // Reîncărcăm datele pentru a asigura sincronizarea
      loadDashboardData();
      
      // Salvăm timestamp-ul actualizării
      const now = Date.now();
      localStorage.setItem('lastOfferUpdateTime', now.toString());
      setLastUpdateTime(new Date(now).toLocaleTimeString());
      
      setUpdateMessage({ 
        type: 'success', 
        text: `Ofertele au fost actualizate cu succes! ${updatedOffers.newOffersCount} oferte noi adăugate, ${updatedOffers.removedCount} oferte expirate eliminate.` 
      });
    } catch (error) {
      console.error('Error updating offers:', error);
      setUpdateMessage({ type: 'error', text: 'A apărut o eroare la actualizarea ofertelor.' });
    } finally {
      setIsUpdating(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setUpdateMessage(null);
      }, 5000);
    }
  };

  const handleAutoUpdate = async () => {
    if (isUpdating) return; // Prevenim actualizări multiple simultane
    
    setIsUpdating(true);
    setUpdateMessage({ type: 'info', text: 'Se verifică automat ofertele...' });

    try {
      const result = await autoCheckForUpdates();
      
      // Reîncărcăm datele pentru a asigura sincronizarea
      loadDashboardData();
      
      // Salvăm timestamp-ul actualizării
      const now = Date.now();
      localStorage.setItem('lastOfferUpdateTime', now.toString());
      setLastUpdateTime(new Date(now).toLocaleTimeString());
      
      setUpdateMessage({ 
        type: 'success', 
        text: `Actualizare automată completă! ${result.newOffersCount} oferte noi adăugate, ${result.removedCount} oferte expirate eliminate.` 
      });
    } catch (error) {
      console.error('Error during auto update:', error);
      setUpdateMessage({ type: 'error', text: 'A apărut o eroare la actualizarea automată a ofertelor.' });
    } finally {
      setIsUpdating(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setUpdateMessage(null);
      }, 5000);
    }
  };

  const activePartners = partners.filter(p => p.active).length;
  const totalOffers = offers.length;

  // Group offers by location - with null check to prevent split error
  const offersByLocation = offers.reduce((acc, offer) => {
    // Check if offer.location exists before trying to split it
    if (offer && offer.location) {
      const location = offer.location.split(',')[0].trim();
      acc[location] = (acc[location] || 0) + 1;
    } else if (offer && offer.destination) {
      const location = offer.destination.split(',')[0].trim();
      acc[location] = (acc[location] || 0) + 1;
    }
    return acc;
  }, {});

  // Group offers by agency - with null check to prevent errors
  const offersByAgency = offers.reduce((acc, offer) => {
    if (offer && offer.agency) {
      acc[offer.agency] = (acc[offer.agency] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Bine ați venit în panoul de administrare</p>
        {lastUpdateTime && (
          <p className="text-sm text-gray-500 mt-1">
            Ultima actualizare: {lastUpdateTime}
          </p>
        )}
      </div>

      {updateMessage && (
        <div className={`mb-6 p-4 rounded-md ${
          updateMessage.type === 'success' ? 'bg-green-50 text-green-700' :
          updateMessage.type === 'error' ? 'bg-red-50 text-red-700' :
          'bg-blue-50 text-blue-700'
        }`}>
          <div className="flex items-center">
            {updateMessage.type === 'success' ? (
              <FaSync className="mr-2" />
            ) : updateMessage.type === 'error' ? (
              <FaExclamationTriangle className="mr-2" />
            ) : (
              <FaSync className="mr-2 animate-spin" />
            )}
            <span>{updateMessage.text}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
              <FaGlobe />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Website-uri Partenere</div>
              <div className="text-2xl font-semibold">{partners.length}</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <span className="text-green-500 font-medium">{activePartners} active</span> din {partners.length} total
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
              <FaList />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Oferte Totale</div>
              <div className="text-2xl font-semibold">{totalOffers}</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            De la {Object.keys(offersByAgency).length} agenții diferite
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500 mr-4">
              <FaSync />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Următoarea Actualizare</div>
              <div className="text-2xl font-semibold">
                <OfferUpdateStatus onUpdateNeeded={handleAutoUpdate} showTimer={true} />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button 
              onClick={handleManualUpdate}
              disabled={isUpdating}
              className={`text-sm px-3 py-1 rounded bg-primary text-white hover:bg-primary-dark transition-colors ${
                isUpdating ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isUpdating ? 'Se actualizează...' : 'Actualizare manuală'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Oferte după Destinație</h2>
          <div className="space-y-4">
            {Object.entries(offersByLocation)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 8) // Limitează la primele 8 destinații
              .map(([location, count]) => (
                <div key={location} className="flex items-center">
                  <div className="w-32 font-medium">{location}</div>
                  <div className="flex-1">
                    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-primary"
                        style={{ width: `${(count / totalOffers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 text-right text-gray-600">{count}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Oferte după Agenție</h2>
          <div className="space-y-4">
            {Object.entries(offersByAgency)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 8) // Limitează la primele 8 agenții
              .map(([agency, count]) => (
                <div key={agency} className="flex items-center">
                  <div className="w-32 font-medium">{agency}</div>
                  <div className="flex-1">
                    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-secondary"
                        style={{ width: `${(count / totalOffers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 text-right text-gray-600">{count}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
