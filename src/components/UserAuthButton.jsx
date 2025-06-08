import React, { useState, useEffect, useRef } from 'react';
import { isUserLoggedIn, getCurrentUser, logoutUser } from '../services/userService';
import AuthModal from './AuthModal';
import PremiumSettingsModal from './PremiumSettingsModal';
import { FaUser, FaSignOutAlt, FaStar } from 'react-icons/fa';

const UserAuthButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
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
    
    // Add click outside listener to close dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleAuthSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setIsAuthModalOpen(false);
  };
  
  const handlePremiumSuccess = (updatedUser) => {
    setUser(updatedUser);
    setIsPremiumModalOpen(false);
  };
  
  const handleLogout = async () => {
    await logoutUser();
    setIsAuthenticated(false);
    setUser(null);
    setShowDropdown(false);
  };
  
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setShowDropdown(prev => !prev);
  };
  
  const handlePremiumClick = () => {
    setIsPremiumModalOpen(true);
    setShowDropdown(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
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
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                <p className="text-gray-500 text-xs truncate">{user?.email}</p>
              </div>
              
              {/* Câmp Clienti premium */}
              <button
                onClick={handlePremiumClick}
                className="w-full text-left px-4 py-2 text-sm border-b border-gray-100 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-2" />
                  <span className="font-medium">Clienti premium</span>
                </div>
                <p className="text-gray-500 text-xs mt-1 pl-6">
                  {user?.isPremium ? 'Client premium activ' : 'Devino client premium'}
                </p>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                <FaSignOutAlt className="mr-2" />
                Deconectare
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="flex items-center gap-2 text-gray-700 hover:text-primary focus:outline-none"
        >
          <FaUser className="text-primary" />
          <span className="hidden md:inline">Autentificare</span>
        </button>
      )}
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
      
      <PremiumSettingsModal
        isOpen={isPremiumModalOpen}
        onClose={() => setIsPremiumModalOpen(false)}
        onSuccess={handlePremiumSuccess}
        user={user}
      />
    </div>
  );
};

export default UserAuthButton;
