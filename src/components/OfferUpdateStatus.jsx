import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

const OfferUpdateStatus = ({ onUpdateNeeded }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 30,
    seconds: 0
  });
  
  useEffect(() => {
    // Verificăm dacă există un timestamp salvat în localStorage
    const savedTimestamp = localStorage.getItem('nextOfferUpdateTime');
    
    if (savedTimestamp) {
      const nextUpdateTime = parseInt(savedTimestamp, 10);
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
        resetTimer();
        if (onUpdateNeeded) {
          setTimeout(() => {
            onUpdateNeeded();
          }, 500);
        }
      }
    } else {
      // Dacă nu există un timestamp salvat, setăm unul pentru 30 de minute în viitor
      const nextUpdateTime = Date.now() + 30 * 60 * 1000;
      localStorage.setItem('nextOfferUpdateTime', nextUpdateTime.toString());
    }
    
    // Setăm un interval pentru a actualiza cronometrul în fiecare secundă
    const timerInterval = setInterval(() => {
      setTimeRemaining(prev => {
        // Calculăm timpul rămas bazat pe timestamp-ul din localStorage
        const savedTimestamp = localStorage.getItem('nextOfferUpdateTime');
        if (savedTimestamp) {
          const nextUpdateTime = parseInt(savedTimestamp, 10);
          const now = Date.now();
          
          if (nextUpdateTime <= now) {
            // Timpul a expirat, resetăm cronometrul și declanșăm actualizarea
            resetTimer();
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
          resetTimer();
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
  
  // Funcție pentru a reseta cronometrul
  const resetTimer = () => {
    const nextUpdateTime = Date.now() + 30 * 60 * 1000;
    localStorage.setItem('nextOfferUpdateTime', nextUpdateTime.toString());
    setTimeRemaining({ minutes: 30, seconds: 0 });
  };
  
  // Formatăm timpul pentru afișare
  const formattedMinutes = timeRemaining.minutes.toString().padStart(2, '0');
  const formattedSeconds = timeRemaining.seconds.toString().padStart(2, '0');
  
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
