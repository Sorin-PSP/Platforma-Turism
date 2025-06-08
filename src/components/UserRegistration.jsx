import React, { useState, useEffect } from 'react';
import { registerUser } from '../services/userService';

const UserRegistration = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscribeToOffers: false,
    verificationCode: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [verificationSent, setVerificationSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [verificationStep, setVerificationStep] = useState(false);
  
  // Pentru debugging - afișează codul generat în consolă
  useEffect(() => {
    if (generatedCode) {
      console.log('Cod de verificare generat:', generatedCode);
    }
  }, [generatedCode]);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
  
  const validateVerificationCode = () => {
    const newErrors = {};
    
    if (!formData.verificationCode.trim()) {
      newErrors.verificationCode = 'Codul de verificare este obligatoriu';
    } else if (formData.verificationCode !== generatedCode) {
      newErrors.verificationCode = 'Codul de verificare este incorect';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const generateVerificationCode = () => {
    // Generate a 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Cod nou generat:', code);
    return code;
  };
  
  const sendVerificationCode = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });
    
    try {
      // Generate a verification code
      const code = generateVerificationCode();
      setGeneratedCode(code);
      
      // In a real application, this would send an email with the code
      // For this demo, we'll simulate sending the code
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setVerificationSent(true);
      setVerificationStep(true);
      setMessage({ 
        text: `Un cod de verificare a fost trimis la adresa ${formData.email}. Vă rugăm să verificați și căsuța de spam. (Cod: ${code})`, 
        type: 'success' 
      });
      
      // In a real application, you would not show the code in the UI
      console.log('Verification code:', code);
    } catch (error) {
      setMessage({ 
        text: 'A apărut o eroare la trimiterea codului de verificare. Vă rugăm încercați din nou.',
        type: 'error'
      });
      console.error('Verification code error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (verificationStep) {
      if (!validateVerificationCode()) {
        return;
      }
      
      setIsSubmitting(true);
      setMessage({ text: '', type: '' });
      
      try {
        const result = await registerUser({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subscribeToOffers: formData.subscribeToOffers,
          password: formData.password
        });
        
        if (result.success) {
          setMessage({ text: result.message, type: 'success' });
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            subscribeToOffers: false,
            verificationCode: ''
          });
          setVerificationStep(false);
          setVerificationSent(false);
          setGeneratedCode('');
          
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
    } else {
      sendVerificationCode();
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
        {!verificationStep ? (
          <>
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
            
            <div className="mb-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="subscribeToOffers"
                  name="subscribeToOffers"
                  checked={formData.subscribeToOffers}
                  onChange={handleChange}
                  className="mt-0.5 mr-2"
                />
                <label htmlFor="subscribeToOffers" className="text-gray-700">
                  Sunt de acord să primesc oferte și noutăți pe email
                </label>
              </div>
            </div>
          </>
        ) : (
          <div className="mb-4">
            <label htmlFor="verificationCode" className="block text-gray-700 mb-0.5">
              Cod de verificare
            </label>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
              placeholder="Introduceți codul primit pe email"
              className={`w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.verificationCode ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.verificationCode && (
              <p className="text-red-500 text-xs mt-0.5">{errors.verificationCode}</p>
            )}
            <p className="text-gray-500 text-xs mt-1">
              Nu ați primit codul? 
              <button 
                type="button" 
                onClick={sendVerificationCode} 
                className="text-primary ml-1 hover:underline"
                disabled={isSubmitting}
              >
                Retrimite cod
              </button>
            </p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary text-white py-1 px-4 rounded-md hover:bg-primary-dark transition-colors mt-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting 
            ? 'Se procesează...' 
            : verificationStep 
              ? 'Finalizează înregistrarea' 
              : 'Continuă'}
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
