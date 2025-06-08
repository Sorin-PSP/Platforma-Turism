import React, { useState, useEffect } from 'react';
import { FaStar, FaCheck, FaCrown } from 'react-icons/fa';
import { updatePremiumStatus } from '../services/userService';

const PremiumActivation = ({ user, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  // Check for payment confirmation from URL
  useEffect(() => {
    const handlePaymentConfirmation = async () => {
      // Check if we have a payment confirmation in the URL
      const urlParams = new URLSearchParams(window.location.search);
      const paymentStatus = urlParams.get('payment_status');
      const paymentReference = urlParams.get('payment_reference');
      
      // If we have a successful payment confirmation
      if (paymentStatus === 'success' && paymentReference && user && !user.isPremium) {
        setIsSubmitting(true);
        setMessage({ text: 'Se verifică plata...', type: 'info' });
        
        try {
          // Verify payment with backend (simulated here)
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Update user premium status
          const result = await updatePremiumStatus(user.id, true);
          
          if (result.success) {
            setMessage({ 
              text: 'Contul premium a fost activat cu succes!', 
              type: 'success' 
            });
            
            // Call success callback if provided
            if (onSuccess) {
              setTimeout(() => {
                onSuccess(result.user);
              }, 1500);
            }
            
            // Clean up URL parameters
            const newUrl = window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
          } else {
            setMessage({ 
              text: result.message || 'A apărut o eroare la activarea contului premium.', 
              type: 'error' 
            });
          }
        } catch (error) {
          setMessage({ 
            text: 'A apărut o eroare la verificarea plății. Vă rugăm contactați suportul.', 
            type: 'error' 
          });
          console.error('Payment verification error:', error);
        } finally {
          setIsSubmitting(false);
        }
      }
    };
    
    handlePaymentConfirmation();
  }, [user, onSuccess]);
  
  const handleActivatePremium = async () => {
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });
    
    try {
      // In a real implementation, this would redirect to an actual payment processor
      // with proper parameters including user ID, amount, etc.
      
      // Simulate payment processor redirect
      // IMPORTANT: This is just a simulation. In a real app, this would be a full redirect to an external payment page
      const paymentProcessorUrl = "#payment-processor";
      window.location.href = paymentProcessorUrl;
      
      // IMPORTANT: The code below would NOT execute in a real implementation because the page would be redirected
      // The activation would happen only after returning from the payment processor with a success confirmation
      
      // For demo purposes only - to simulate the payment process
      // In a real implementation, remove this setTimeout block entirely
      setTimeout(() => {
        // This is just for demo purposes to show the loading state
        // In a real implementation, the user would be redirected to the payment processor
        setMessage({ 
          text: 'Redirecționare către procesatorul de plăți...', 
          type: 'info' 
        });
        setIsSubmitting(false);
        
        // Simulate what would happen if user manually returns without payment
        console.log('In a real implementation, the user would be redirected to the payment processor.');
        console.log('Premium activation would only happen after returning with a successful payment confirmation.');
      }, 2000);
      
    } catch (error) {
      setMessage({ 
        text: 'A apărut o eroare la redirecționarea către procesatorul de plăți. Vă rugăm încercați din nou.', 
        type: 'error' 
      });
      console.error('Payment redirect error:', error);
      setIsSubmitting(false);
    }
  };
  
  const handleDeactivatePremium = async () => {
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });
    
    try {
      const result = await updatePremiumStatus(user.id, false);
      
      if (result.success) {
        setMessage({ 
          text: 'Contul premium a fost dezactivat.', 
          type: 'success' 
        });
        
        // Call success callback if provided
        if (onSuccess) {
          setTimeout(() => {
            onSuccess(result.user);
          }, 1500);
        }
      } else {
        setMessage({ 
          text: result.message || 'A apărut o eroare la dezactivarea contului premium.', 
          type: 'error' 
        });
      }
    } catch (error) {
      setMessage({ 
        text: 'A apărut o eroare la dezactivarea contului premium. Vă rugăm încercați din nou.',
        type: 'error'
      });
      console.error('Premium deactivation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const premiumBenefits = [
    'Oferte personalizate în funcție de preferințele tale',
    'Notificări prioritare pentru cele mai bune oferte',
    'Reduceri exclusive pentru clienții premium',
    'Asistență dedicată 24/7',
    'Acces la oferte speciale înainte de publicarea lor'
  ];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <FaCrown className="text-yellow-500 mr-2" size={20} />
        <h2 className="text-xl font-bold text-primary">Deschidere cont premium</h2>
      </div>
      
      {message.text && (
        <div className={`mb-4 p-3 rounded ${
          message.type === 'success' ? 'bg-green-100 text-green-700' : 
          message.type === 'info' ? 'bg-blue-100 text-blue-700' : 
          'bg-red-100 text-red-700'
        }`}>
          {message.text}
        </div>
      )}
      
      <div className="mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Beneficii cont premium</h3>
          <ul className="space-y-2">
            {premiumBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-primary bg-opacity-5 p-4 rounded-lg border border-primary border-opacity-20">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-primary">Cont Premium</h3>
            <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              Doar 4,99€/lună
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Activează contul premium pentru a beneficia de toate avantajele și a primi oferte personalizate direct pe telefonul tău.
          </p>
          
          {user.isPremium ? (
            <button
              onClick={handleDeactivatePremium}
              disabled={isSubmitting}
              className={`w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Se procesează...' : 'Dezactivează cont premium'}
            </button>
          ) : (
            <button
              onClick={handleActivatePremium}
              disabled={isSubmitting}
              className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Se procesează...' : 'Activează cont premium'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumActivation;
