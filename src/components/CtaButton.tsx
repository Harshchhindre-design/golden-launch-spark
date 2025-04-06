
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaButtonProps {
  children: React.ReactNode;
  filled?: boolean;
  className?: string;
  onClick?: () => void;
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  children, 
  filled = false, 
  className = '',
  onClick 
}) => {
  return (
    <button 
      className={`${filled ? 'cta-button-filled' : 'cta-button'} flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </button>
  );
};

export default CtaButton;
