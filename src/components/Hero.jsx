// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    // Ubah pb-48 menjadi pb-32 agar tidak terlalu panjang ke bawah
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32 pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/80 to-slate-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm shadow-lg shadow-blue-500/20">
          Ensiklopedia Ikan Digital 🐟
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
          Jelajahi Keindahan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Dunia Bawah Air
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed drop-shadow-md">
          Katalog interaktif untuk para penghobi. Temukan informasi habitat, family, hingga kisaran harga pasar terkini.
        </p>
      </div>
    </div>
  );
};

export default Hero;