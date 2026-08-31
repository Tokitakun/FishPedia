// src/components/FishCard.jsx
import React from 'react';

const FishCard = ({ fish, onClick }) => {
  // Helper untuk menampilkan origin lebih rapi
  const displayOrigin = fish.origin.length > 15 
    ? fish.origin.split(',')[0] + '...' 
    : fish.origin;

  return (
    <div 
      onClick={() => onClick(fish)}
      className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full relative"
    >
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden bg-slate-100">
        <img 
          src={fish.image} 
          alt={fish.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Family Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-slate-100 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          {fish.family}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="font-bold text-xl text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
            {fish.name}
          </h3>
          <p className="text-xs text-slate-400 italic mt-1 font-medium">{fish.scientificName}</p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          {/* Origin with Icon */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="truncate max-w-[100px]" title={fish.origin}>{displayOrigin}</span>
          </div>

          {/* Price Tag */}
          <div className="text-right bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
            <p className="text-[10px] text-emerald-700 uppercase font-bold tracking-wider mb-0.5">Estimasi</p>
            <p className="font-bold text-emerald-700 text-sm">
              Rp{(fish.price.min / 1000).toFixed(0)}k - {(fish.price.max / 1000).toFixed(0)}k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishCard;