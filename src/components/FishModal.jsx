// src/components/FishModal.jsx
import React from 'react';

const FishModal = ({ fish, onClose }) => {
  if (!fish) return null;

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop dengan Blur Kuat */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn" 
        onClick={onClose}
      ></div>

      {/* Modal Content dengan Animasi Scale */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scaleUp ring-1 ring-black/5">
        
        {/* Close Button Floating */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-200 md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Image Section (Kiri/Atas) */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-slate-100 group">
          <img 
            src={fish.image} 
            alt={fish.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:hidden">
             <h2 className="text-2xl font-bold text-white">{fish.name}</h2>
             <p className="text-sm text-slate-200 italic">{fish.scientificName}</p>
          </div>
        </div>

        {/* Info Section (Kanan/Bawah) */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto custom-scrollbar">
          {/* Header Desktop */}
          <div className="hidden md:block mb-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg mb-2 uppercase tracking-wider border border-blue-100">
                  {fish.category}
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">{fish.name}</h2>
                <p className="text-slate-500 italic mt-1">{fish.scientificName}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>

          {/* Detail Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <InfoItem icon="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" label="Family" value={fish.family} />
            <InfoItem icon="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" label="Habitat" value={fish.habitat} />
            <InfoItem icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" label="Asal" value={fish.origin} />
            <InfoItem icon="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" label="Ukuran" value={fish.size} />
          </div>

          {/* Description & Price */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Deskripsi</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {fish.description}
              </p>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">Kisaran Harga Pasar</p>
                  <p className="text-2xl font-bold text-emerald-700">
                    Rp{fish.price.min.toLocaleString('id-ID')} - {fish.price.max.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
              <p className="text-[10px] text-emerald-600/70 mt-2 text-right">*Harga estimasi per ekor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Kecil untuk Item Informasi agar kode lebih rapi
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} /></svg>
    <div>
      <p className="text-xs text-slate-500 font-medium uppercase">{label}</p>
      <p className="text-sm font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

export default FishModal;