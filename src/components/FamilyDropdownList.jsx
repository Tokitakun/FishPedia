// src/components/FamilyDropdownList.jsx
import React, { useState } from 'react';
import FishCard from './FishCard';

const FamilyDropdownList = ({ processedData, onFishClick }) => {
  const [openFamily, setOpenFamily] = useState(null);
  const families = Object.keys(processedData);

  if (families.length === 0) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-3">
      {families.map((familyName) => {
        const fishes = processedData[familyName];
        const isOpen = openFamily === familyName;

        return (
          <div 
            key={familyName} 
            className={`
              rounded-xl border transition-all duration-300 overflow-hidden
              ${isOpen ? 'bg-white border-blue-200 shadow-md ring-1 ring-blue-100' : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'}
            `}
          >
            <button
              onClick={() => setOpenFamily(isOpen ? null : familyName)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <div className={`
                  h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold transition-colors
                  ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}
                `}>
                  {familyName.charAt(0)}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">{familyName}</h2>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    {fishes.length} Spesies Ditemukan
                  </p>
                </div>
              </div>

              <svg 
                className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-slate-100 mt-2">
                {fishes.map((fish) => (
                  <FishCard key={fish.id} fish={fish} onClick={onFishClick} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FamilyDropdownList;