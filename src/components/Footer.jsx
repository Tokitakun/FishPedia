// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Bagian Tentang */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-bold text-xl text-white tracking-tight">
                Fish<span className="text-blue-500">pedia</span>
              1.0</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Fishpedia adalah ensiklopedia ikan digital interaktif yang dirancang untuk membantu penghobi akuarium mengenali berbagai spesies, memahami habitat aslinya, dan mengetahui kisaran harga pasar terkini.
            </p>
          </div>

          {/* Bagian Tugas / Project Info */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Tentang Proyek</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">▹</span>
                <span>Dibangun sebagai proyek portofolio Frontend Development.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">▹</span>
                <span>Menggunakan React.js, Tailwind CSS, dan manajemen state modern.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">▹</span>
                <span>Fokus pada pengalaman pengguna (UI/UX) yang responsif dan data-driven.</span>
              </li>
            </ul>
            
            {/* Social Links Kecil di Footer */}
            <div className="mt-6 flex gap-4">
              <a href="https://github.com/Tokitakun" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://instagram.com/_nafietzsche" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

        </div>
        
        {/* Garis Pemisah Tipis di Bawah */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
          Muhammad Dzurunnafis Khairuddin | XII-SIJA
        </div>
      </div>
    </footer>
  );
};

export default Footer;