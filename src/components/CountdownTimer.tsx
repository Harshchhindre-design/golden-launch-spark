
import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  endDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate }) => {
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const difference = +endDate - +new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };
  
  const { days, hours, minutes, seconds } = timeLeft;
  
  return (
    <div className="text-center py-8 px-4 bg-dark-lighter rounded-lg border border-gold/20">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gold">Offer Ends in</h3>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-bold text-gold">{formatTime(days)}</div>
          <div className="text-xs md:text-sm text-gold/70">Days</div>
        </div>
        <div className="text-2xl md:text-4xl font-bold text-gold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-bold text-gold">{formatTime(hours)}</div>
          <div className="text-xs md:text-sm text-gold/70">Hours</div>
        </div>
        <div className="text-2xl md:text-4xl font-bold text-gold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-bold text-gold">{formatTime(minutes)}</div>
          <div className="text-xs md:text-sm text-gold/70">Minutes</div>
        </div>
        <div className="text-2xl md:text-4xl font-bold text-gold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-bold text-gold animate-pulse-gold">{formatTime(seconds)}</div>
          <div className="text-xs md:text-sm text-gold/70">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
