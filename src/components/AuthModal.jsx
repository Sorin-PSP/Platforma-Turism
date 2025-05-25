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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 md:mx-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaTimes size={20} />
        </button>
        
        {customMessage && (
          <div className="bg-primary bg-opacity-10 p-4 text-primary text-center font-medium border-b border-primary border-opacity-20">
            {customMessage}
          </div>
        )}
        
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-3 font-medium text-center ${
              activeTab === 'login'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Autentificare
          </button>
          <button
            className={`flex-1 py-3 font-medium text-center ${
              activeTab === 'register'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('register')}
          >
            Înregistrare
          </button>
        </div>
        
        <div className="p-6">
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
