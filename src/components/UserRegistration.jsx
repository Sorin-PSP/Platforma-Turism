import React, { useState } from 'react';
import { registerUser } from '../services/userService';

const UserRegistration = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    desiredDestination: '',
    desiredDepartureDate: '',
    offerFrequency: 'weekly_one',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const frequencyOptions = [
    { value: 'daily_one', label: 'O ofertă pe zi' },
    { value: 'daily_two', label: 'Două oferte pe zi' },
    { value: 'weekly_two', label: 'Două oferte pe săptămână' },
    { value: 'weekly_one', label: 'O ofertă pe săptămână' }
  ];
  
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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Numele este obligatoriu';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Prenumele este obligatoriu';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Adresa de email nu este validă';
    }
    
    if (!formData.password) {
      newErrors.password = 'Parola este obligatorie';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Parola trebuie să aibă minim 6 caractere';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Parolele nu coincid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });
    
    try {
      const result = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        desiredDestination: formData.desiredDestination,
        desiredDepartureDate: formData.desiredDepartureDate,
        offerFrequency: formData.offerFrequency,
        password: formData.password
      });
      
      if (result.success) {
        setMessage({ text: result.message, type: 'success' });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          desiredDestination: '',
          desiredDepartureDate: '',
          offerFrequency: 'weekly_one',
          password: '',
          confirmPassword: ''
        });
        
        // Call success callback if provided
        if (onSuccess) {
          setTimeout(() => {
            onSuccess(result.user);
          }, 1500);
        }
      } else {
        setMessage({ text: result.message, type: 'error' });
      }
    } catch (error) {
      setMessage({ 
        text: 'A apărut o eroare la înregistrare. Vă rugăm încercați din nou.',
        type: 'error'
      });
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg w-full">
      <h2 className="text-lg font-bold text-primary mb-2">Creează cont nou</h2>
      
      {message.text && (
        <div className={`mb-2 p-1.5 rounded text-xs ${
          message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="text-xs">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-0.5">Nume</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-0.5">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-0.5">Prenume</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-0.5">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700 mb-0.5">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label htmlFor="desiredDestination" className="block text-gray-700 mb-0.5">
              Destinația dorită
            </label>
            <input
              type="text"
              id="desiredDestination"
              name="desiredDestination"
              value={formData.desiredDestination}
              onChange={handleChange}
              placeholder="Ex: Grecia, Turcia..."
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="desiredDepartureDate" className="block text-gray-700 mb-0.5">
              Data plecării
            </label>
            <input
              type="date"
              id="desiredDepartureDate"
              name="desiredDepartureDate"
              value={formData.desiredDepartureDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        
        <div className="mb-2">
          <label htmlFor="offerFrequency" className="block text-gray-700 mb-0.5">
            Frecvența ofertelor
          </label>
          <select
            id="offerFrequency"
            name="offerFrequency"
            value={formData.offerFrequency}
            onChange={handleChange}
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {frequencyOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-0.5">Parolă</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-0.5">{errors.password}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-0.5">Confirmă parola</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-0.5">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary text-white py-1 px-4 rounded-md hover:bg-primary-dark transition-colors mt-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Se procesează...' : 'Creează cont'}
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
