// src/components/DisclaimerAlert.jsx
import React from 'react';

const DisclaimerAlert = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative animate-scaleUp border border-slate-100 overflow-hidden">
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>

        {/* Header Badge */}
        <div className="flex justify-between items-start mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100 uppercase tracking-wide">
            FishPedia v1.0
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
          Selamat Datang di <span className="text-blue-600">FishPedia</span>
        </h2>
        
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8">
          <p>
            Terima kasih telah mencoba prototipe awal kami. Saat ini aplikasi masih menggunakan 
            <span className="font-semibold text-slate-800"> Dummy Data</span> untuk keperluan demonstrasi UI/UX.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <p className="font-bold text-slate-800 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Coming Soon: v1.1
              </p>
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">UI & Data</span>
            </div>
            
            <ul className="space-y-2 text-slate-600 text-xs">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-500">▹</span>
                <span><strong>Dark Mode:</strong> Tampilan malam yang nyaman di mata.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-500">▹</span>
                <span><strong>Advanced Search:</strong> Sorting berdasarkan nama & harga.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-500">▹</span>
                <span><strong>Favorites:</strong> Simpan ikan favoritmu via LocalStorage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-500">▹</span>
                <span><strong>Detail Page:</strong> Halaman khusus untuk setiap spesies.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Button */}
        <button 
          onClick={onClose}
          className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-95"
        >
          Mulai!
        </button>
      </div>
    </div>
  );
};

export default DisclaimerAlert;