import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PremiumSettings = ({ user, onSuccess, onActivationClick }) => {
  const [formData, setFormData] = useState({
    destination: '',
    departureDate: '',
    frequency: 'instant'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.destination.trim()) {
      newErrors.destination = 'Destinația este obligatorie';
    }
    
    if (!formData.departureDate) {
      newErrors.departureDate = 'Data plecării este obligatorie';
    }
    
    if (!formData.frequency) {
      newErrors.frequency = 'Frecvența este obligatorie';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    if (!user.isPremium) {
      setMessage({
        text: 'Trebuie să activați contul premium pentru a salva preferințele.',
        type: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // In a real app, this would save the premium settings to the user's profile
      
      setMessage({
        text: 'Preferințele premium au fost salvate cu succes!',
        type: 'success'
      });
      
      // Call success callback if provided
      if (onSuccess) {
        setTimeout(() => {
          onSuccess(user);
        }, 1000);
      }
    } catch (error) {
      setMessage({
        text: 'A apărut o eroare la salvarea preferințelor. Vă rugăm încercați din nou.',
        type: 'error'
      });
      console.error('Premium settings error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const frequencyOptions = [
    { value: 'instant', label: 'De fiecare dată când apar oferte' },
    { value: 'twice_daily', label: 'De două ori pe zi' },
    { value: 'daily', label: 'Zilnic' },
    { value: 'twice_weekly', label: 'De două ori pe săptămână' },
    { value: 'weekly', label: 'Săptămânal' }
  ];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <FaStar className="text-yellow-500 mr-2" size={20} />
        <h2 className="text-xl font-bold text-primary">Setare mesaje premium</h2>
      </div>
      
      {!user.isPremium && (
        <div className="mb-4 p-3 rounded bg-yellow-100 text-yellow-800 text-sm">
          <p>Nu aveți un cont premium activ. Activați contul premium pentru a primi oferte personalizate.</p>
          <button 
            onClick={onActivationClick}
            className="mt-2 text-primary hover:underline font-medium"
          >
            Activează cont premium
          </button>
        </div>
      )}
      
      {message.text && (
        <div className={`mb-4 p-3 rounded ${
          message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={user.isPremium ? '' : 'opacity-60 pointer-events-none'}>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700 mb-1">Destinația dorită</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Grecia, Turcia, nume hotel, etc."
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.destination ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="departureDate" className="block text-gray-700 mb-1">Data plecării</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.departureDate ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.departureDate && (
            <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="frequency" className="block text-gray-700 mb-1">Frecvența ofertelor</label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.frequency ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {frequencyOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.frequency && (
            <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !user.isPremium}
          className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors ${
            (isSubmitting || !user.isPremium) ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Se procesează...' : 'Salvează preferințe'}
        </button>
      </form>
    </div>
  );
};

export default PremiumSettings;
