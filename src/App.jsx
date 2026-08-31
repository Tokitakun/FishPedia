// src/App.jsx
import React, { useState, useMemo } from 'react';
import { fishData } from './data/fishData';

// Components
import DisclaimerAlert from './components/DisclaimerAlert'; // Import Alert
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import FamilyFilter from './components/FamilyFilter';
import FishCard from './components/FishCard';
import FishModal from './components/FishModal';
import DeveloperSection from './components/DeveloperSection';
import Footer from './components/Footer';

const App = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('all');
  const [selectedFish, setSelectedFish] = useState(null);
  
  // State untuk Alert Popup
  const [showAlert, setShowAlert] = useState(true);

  const { filteredFishes, uniqueFamilies } = useMemo(() => {
    let result = activeCategory 
      ? fishData.filter(fish => fish.category === activeCategory)
      : [];

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      const source = activeCategory ? result : fishData;
      result = source.filter(fish => 
        fish.name.toLowerCase().includes(lowerQuery) || 
        fish.family.toLowerCase().includes(lowerQuery)
      );
    }

    if (selectedFamily !== 'all') {
      result = result.filter(fish => fish.family === selectedFamily);
    }

    const allFishesInCategory = activeCategory 
      ? fishData.filter(f => f.category === activeCategory)
      : [];
    
    const families = [...new Set(allFishesInCategory.map(f => f.family))].sort();

    return { filteredFishes: result, uniqueFamilies: families };
  }, [activeCategory, searchQuery, selectedFamily]);

  const handleGoHome = () => {
    setActiveCategory(null);
    setSearchQuery('');
    setSelectedFamily('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    setSelectedFamily('all');
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* Popup Alert - Muncul jika showAlert true */}
      {showAlert && <DisclaimerAlert onClose={() => setShowAlert(false)} />}

      <Navbar onSearch={setSearchQuery} onLogoClick={handleGoHome} />
      
      <main className="flex-grow min-h-[calc(100vh-4rem)] pt-24 pb-12">
        
        {!activeCategory && !searchQuery && <Hero />}
        
        <div className="relative z-10 mt-8 mb-12">
          <CategoryCard activeCategory={activeCategory} onSelect={setActiveCategory} />
        </div>

        {(activeCategory || searchQuery) && (
          <div className="py-8 animate-fadeIn">
            <FamilyFilter 
              families={uniqueFamilies} 
              selectedFamily={selectedFamily} 
              onSelect={setSelectedFamily} 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {filteredFishes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredFishes.map((fish) => (
                    <FishCard key={fish.id} fish={fish} onClick={setSelectedFish} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <p className="text-xl font-bold text-slate-800">Tidak ada hasil ditemukan</p>
                  <p className="text-slate-500 mt-2">Coba kata kunci lain atau ubah filter family.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <DeveloperSection />
      <Footer />

      {selectedFish && (
        <FishModal fish={selectedFish} onClose={() => setSelectedFish(null)} />
      )}
    </div>
  );
};

export default App;