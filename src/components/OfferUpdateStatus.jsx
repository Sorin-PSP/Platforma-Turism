import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';
import { getNextUpdateTime, resetUpdateTimer } from '../services/offerService';

const OfferUpdateStatus = ({ onUpdateNeeded, showTimer = false }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 30,
    seconds: 0
  });
  
  useEffect(() => {
    // Verificăm dacă există un timestamp salvat
    const nextUpdateTime = getNextUpdateTime();
    
    if (nextUpdateTime) {
      const now = Date.now();
      
      // Dacă timpul salvat este în viitor, calculăm timpul rămas
      if (nextUpdateTime > now) {
        const remainingMs = nextUpdateTime - now;
        const remainingMinutes = Math.floor(remainingMs / (1000 * 60));
        const remainingSeconds = Math.floor((remainingMs % (1000 * 60)) / 1000);
        
        setTimeRemaining({
          minutes: remainingMinutes,
          seconds: remainingSeconds
        });
      } else {
        // Dacă timpul a expirat, resetăm cronometrul și declanșăm actualizarea
        resetUpdateTimer();
        if (onUpdateNeeded) {
          setTimeout(() => {
            onUpdateNeeded();
          }, 500);
        }
      }
    } else {
      // Dacă nu există un timestamp salvat, setăm unul pentru 30 de minute în viitor
      resetUpdateTimer();
    }
    
    // Setăm un interval pentru a actualiza cronometrul în fiecare secundă
    const timerInterval = setInterval(() => {
      setTimeRemaining(prev => {
        // Calculăm timpul rămas bazat pe timestamp-ul din localStorage
        const nextUpdateTime = getNextUpdateTime();
        if (nextUpdateTime) {
          const now = Date.now();
          
          if (nextUpdateTime <= now) {
            // Timpul a expirat, resetăm cronometrul și declanșăm actualizarea
            resetUpdateTimer();
            if (onUpdateNeeded) {
              setTimeout(() => {
                onUpdateNeeded();
              }, 500);
            }
            return { minutes: 30, seconds: 0 };
          }
          
          // Calculăm timpul rămas
          const remainingMs = nextUpdateTime - now;
          const remainingMinutes = Math.floor(remainingMs / (1000 * 60));
          const remainingSeconds = Math.floor((remainingMs % (1000 * 60)) / 1000);
          
          return {
            minutes: remainingMinutes,
            seconds: remainingSeconds
          };
        }
        
        // Dacă nu există timestamp, continuăm cu decrementarea normală
        if (prev.minutes === 0 && prev.seconds === 0) {
          resetUpdateTimer();
          if (onUpdateNeeded) {
            setTimeout(() => {
              onUpdateNeeded();
            }, 500);
          }
          return { minutes: 30, seconds: 0 };
        }
        
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: prev.minutes, seconds: prev.seconds - 1 };
        }
      });
    }, 1000);
    
    // Cleanup la demontarea componentei
    return () => {
      clearInterval(timerInterval);
    };
  }, [onUpdateNeeded]);
  
  // Formatăm timpul pentru afișare
  const formattedMinutes = timeRemaining.minutes.toString().padStart(2, '0');
  const formattedSeconds = timeRemaining.seconds.toString().padStart(2, '0');
  
  // Dacă showTimer este false, nu afișăm nimic
  if (!showTimer) {
    return null;
  }
  
  return (
    <div className="flex items-center text-gray-600">
      <FaClock className="mr-2" />
      <span className="font-mono">
        {formattedMinutes}:{formattedSeconds}
      </span>
    </div>
  );
};

export default OfferUpdateStatus;
