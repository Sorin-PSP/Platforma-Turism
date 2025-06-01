import React, { useState } from 'react';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import { FaTimes } from 'react-icons/fa';

const AuthModal = ({ isOpen, onClose, onAuthSuccess, customMessage }) => {
  const [activeTab, setActiveTab] = useState('login');
  
  if (!isOpen) return null;
  
  const handleAuthSuccess = (user) => {
    if (onAuthSuccess) {
      onAuthSuccess(user);
    }
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 overflow-y-auto">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-auto my-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaTimes size={18} />
        </button>
        
        {customMessage && (
          <div className="bg-primary bg-opacity-10 p-2 text-primary text-center text-sm font-medium border-b border-primary border-opacity-20">
            {customMessage}
          </div>
        )}
        
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-2 font-medium text-center text-sm ${
              activeTab === 'login'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Autentificare
          </button>
          <button
            className={`flex-1 py-2 font-medium text-center text-sm ${
              activeTab === 'register'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('register')}
          >
            Înregistrare
          </button>
        </div>
        
        <div className="p-3 max-h-[80vh] overflow-y-auto">
          {activeTab === 'login' ? (
            <UserLogin 
              onSuccess={handleAuthSuccess} 
              onRegisterClick={() => setActiveTab('register')}
            />
          ) : (
            <UserRegistration 
              onSuccess={handleAuthSuccess}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
