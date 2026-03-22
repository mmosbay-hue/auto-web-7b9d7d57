import React from 'react';

export default function Card({ children, className = '' }) {
  const cardClassName = `bg-[#10152c] rounded-xl shadow-lg shadow-blue-500/10 border border-gray-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 ${className}`;
  
  return (
    <div className={cardClassName}>
      {children}
    </div>
  );
}