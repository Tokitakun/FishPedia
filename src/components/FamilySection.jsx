// src/components/FamilySection.jsx
import React, { useState } from 'react';
import FishCard from './FishCard';

const FamilySection = ({ familyName, fishes, onFishClick }) => {
  const [isOpen, setIsOpen] = useState(false); 

  if (!fishes || fishes.length === 0) return null;

  return (
    <div className="mb-4 border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
      {/* Bagian Judul Family (Header Dropdown) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {/* Ikon kecil atau garis penanda */}
          <div className={`h-6 w-1 rounded-full ${isOpen ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">{familyName}</h2>
            <p className="text-xs text-slate-500">{fishes.length} Spesies</p>
          </div>
        </div>
        
        {/* Panah */}
        <svg 
          className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Bagian Isi (Grid Ikan) - Hanya muncul jika isOpen true */}
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-slate-50 border-t border-slate-100">
          {fishes.map((fish) => (
            <FishCard key={fish.id} fish={fish} onClick={onFishClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilySection;