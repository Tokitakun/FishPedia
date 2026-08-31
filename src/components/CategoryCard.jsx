// src/components/CategoryCard.jsx
import React from 'react';

const categories = [
  { 
    id: 'predator', 
    name: 'Predator', 
    desc: 'Ikan buas dengan karakter tangguh dan dominan.',
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z" 
  },
  { 
    id: 'hias', 
    name: 'Hias', 
    desc: 'Keindahan warna dan bentuk untuk estetika ruangan.',
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
  },
  { 
    id: 'aquascape', 
    name: 'Aquascape', 
    desc: 'Penghuni taman air yang damai dan bersimbiosis dengan tanaman.',
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
  }
];

const CategoryCard = ({ activeCategory, onSelect }) => {
  return (
    // Hapus negative margin (-mt-xx), biarkan natural
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`
              group relative overflow-hidden rounded-3xl p-8 text-left transition-all duration-500
              ${isActive 
                ? 'bg-slate-900 text-white shadow-2xl scale-[1.02]' 
                : 'bg-white text-slate-600 hover:bg-slate-50 hover:shadow-xl border border-slate-100'}
            `}
          >
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-100"></div>
            )}
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-900 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={cat.iconPath} />
                  </svg>
                </div>
                
                <h3 className="font-bold text-2xl mb-2 tracking-tight">{cat.name}</h3>
                <p className={`text-sm leading-relaxed ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                  {cat.desc}
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Jelajahi Koleksi 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryCard;