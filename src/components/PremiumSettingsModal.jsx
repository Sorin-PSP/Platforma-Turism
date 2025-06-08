import React, { useState } from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';
import PremiumSettings from './PremiumSettings';
import PremiumActivation from './PremiumActivation';

const PremiumSettingsModal = ({ isOpen, onClose, onSuccess, user }) => {
  const [activeTab, setActiveTab] = useState('settings');
  
  if (!isOpen) return null;
  
  const handleSuccess = (updatedUser) => {
    if (onSuccess) {
      onSuccess(updatedUser);
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 overflow-y-auto">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl mx-auto my-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaTimes size={18} />
        </button>
        
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-2 font-medium text-center text-sm ${
              activeTab === 'settings'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Setare mesaje premium
          </button>
          <button
            className={`flex-1 py-2 font-medium text-center text-sm ${
              activeTab === 'activation'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('activation')}
          >
            Deschidere cont premium
          </button>
        </div>
        
        <div className="p-4 max-h-[80vh] overflow-y-auto">
          {activeTab === 'settings' ? (
            <PremiumSettings 
              user={user}
              onSuccess={handleSuccess}
              onActivationClick={() => setActiveTab('activation')}
            />
          ) : (
            <PremiumActivation 
              user={user}
              onSuccess={handleSuccess}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumSettingsModal;
