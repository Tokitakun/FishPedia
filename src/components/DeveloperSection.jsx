// src/components/DeveloperSection.jsx
import React from 'react';

const DeveloperSection = () => {
  const embedUrl = "https://tree.icqr.com/s/MDVodHRwczovL3Rva2l0YS5ubGZ0cy5kZXYv";

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 mb-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Bagian Kiri: Deskripsi & Info */}
        <div className="space-y-6">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
              Digital Identity
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Muhammad Dzurunnafis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Khairuddin 
              </span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Frontend Engineer & UI/UX Enthusiast yang berfokus pada menciptakan pengalaman digital yang interaktif. Jelajahi portofolio, proyek, dan koneksi profesional saya melalui portal digital di bawah ini.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {['React.js', 'Tailwind CSS', 'UI/UX Design', ].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg border border-slate-200">
                {tech}
              </span>
            ))}
          </div>

          <a 
            href={embedUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 group"
          >
            Visit Full Portfolio
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        {/* Bagian Kanan: Iframe Window */}
        <div className="relative">
          {/* Decorative Blur Behind */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-20 blur-2xl -z-10"></div>

          <div className="relative bg-slate-900 rounded-2xl p-2 shadow-2xl ring-1 ring-black/5 overflow-hidden">
            
            {/* Browser Header Mini */}
            <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between rounded-t-xl border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-[10px] text-slate-400 font-mono bg-slate-900 px-3 py-1 rounded border border-slate-700">
                tree.icqr.com
              </div>
              <div className="w-8"></div>
            </div>

            {/* Iframe Area with Scaling */}
            <div className="relative w-full h-[400px] lg:h-[500px] bg-white rounded-b-xl overflow-hidden flex items-start justify-center">
              <div 
                className="origin-top transition-transform duration-300"
                style={{ 
                  width: '1280px', 
                  height: '800px', 
                  transform: 'scale(0.6)' // Scale sedikit lebih kecil agar muat di kolom samping
                }}
              >
                <iframe 
                  src={embedUrl}
                  title="Nafis Digital Tree Desktop"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeveloperSection;