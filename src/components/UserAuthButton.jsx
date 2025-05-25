import React, { useState, useEffect } from 'react';
import { isUserLoggedIn, getCurrentUser, logoutUser } from '../services/userService';
import AuthModal from './AuthModal';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

const UserAuthButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  useEffect(() => {
    // Check authentication status on component mount
    const checkAuth = () => {
      const authStatus = isUserLoggedIn();
      setIsAuthenticated(authStatus);
      
      if (authStatus) {
        setUser(getCurrentUser());
      }
    };
    
    checkAuth();
    
    // Add event listener for storage changes (for multi-tab support)
    const handleStorageChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleAuthSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setIsModalOpen(false);
  };
  
  const handleLogout = async () => {
    await logoutUser();
    setIsAuthenticated(false);
    setUser(null);
    setShowDropdown(false);
  };
  
  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };
  
  return (
    <div className="relative">
      {isAuthenticated ? (
        <div>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 text-gray-700 hover:text-primary focus:outline-none"
          >
            <FaUser className="text-primary" />
            <span className="hidden md:inline">{user?.firstName || 'Utilizator'}</span>
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                <p className="text-gray-500 text-xs truncate">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaSignOutAlt className="mr-2" />
                Deconectare
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-gray-700 hover:text-primary focus:outline-none"
        >
          <FaUser className="text-primary" />
          <span className="hidden md:inline">Autentificare</span>
        </button>
      )}
      
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default UserAuthButton;
