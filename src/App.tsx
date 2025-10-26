import React, { useState, useEffect } from 'react';
import { Sun, Moon, Check, Box, Layers, Zap, Truck, Shield } from 'lucide-react';

// --- Fictional Product Data and Content ---
const product = {
  name: "VCI Films",
  tagline: "Advanced Volatile Corrosion Inhibitor technology providing superior protection for metal parts and components during storage and transportation.",
  // Using a solid blue for the hero section, similar to the image
  heroBgClass: 'bg-gradient-to-br from-indigo-800 to-blue-900',
  imagePlaceholder: "https://placehold.co/800x400/29326d/fff?text=VCI+Film+Application", 
};

type TabId = 'overview' | 'benefits' | 'compliance' | 'properties' | 'formats' | 'sustainability';
type Theme = 'light' | 'dark';

const TABS: { id: TabId, label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'properties', label: 'Properties' },
  { id: 'formats', label: 'Formats' },
  { id: 'sustainability', label: 'Sustainability' },
];

const BENEFITS = [
  { title: "No Surface Preparation Required", icon: Layers, description: "Clean and dry protection without oils or coatings" },
  { title: "Multi-Metal Protection", icon: Shield, description: "Protects ferrous and non-ferrous metals simultaneously" },
  { title: "Self-Replenishing", icon: Zap, description: "VCI molecules continuously protect until the bag is opened" },
  { title: "Cost-Effective", icon: Truck, description: "Reduces labor costs and eliminates need for rust preventive oils" },
  { title: "Transparent Material", icon: Box, description: "Easy identification and inspection without opening" },
  { title: "Heat Sealable", icon: Check, description: "Create custom sized bags or ensure hermetic sealing" },
];

const FORMATS = [
    { title: "2D Flat Bags", subtitle: "Perfect for flat components", description: "Ideal for protecting sheet metal, flat parts, and components that don't require 3D containment. Available in various sizes and thicknesses.", icon: Box },
    { title: "3D Gusseted Bags", subtitle: "For complex shapes", description: "Designed with gussets to accommodate bulky, irregularly shaped parts. Provides complete protection for complex geometries.", icon: Layers },
];

// --- Sub-Components for Tab Content ---

const BenefitsContent = ({ isDark }: { isDark: boolean }) => (
  <div className="p-6 sm:p-8">
    <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {BENEFITS.map((item, index) => (
        <div key={index} className={`flex items-start space-x-3 p-4 rounded-xl transition-all duration-300 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-indigo-50'}`}>
          <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-lg mb-1">{item.title}</p>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FormatsContent = ({ isDark }: { isDark: boolean }) => (
  <div className="p-6 sm:p-8">
    <h3 className="text-2xl font-bold mb-6">Available Formats</h3>
    <div className="space-y-6">
      {FORMATS.map((format, index) => (
        <div 
          key={index} 
          className={`p-6 rounded-xl border transition-shadow duration-300 ${isDark ? 'bg-gray-700 border-gray-600 shadow-xl shadow-gray-900' : 'bg-gray-50 border-gray-200 shadow-lg'}`}
        >
          <div className="flex items-start space-x-4">
            <format.icon className="w-8 h-8 text-indigo-500 flex-shrink-0" />
            <div>
              <p className="text-xl font-bold mb-1">{format.title}</p>
              <p className="text-sm text-indigo-400 font-semibold mb-3">{format.subtitle}</p>
              <p className="opacity-80">{format.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PlaceholderContent = ({ tabId }: { tabId: TabId }) => (
  <div className="p-8 text-center opacity-70 italic h-40 flex items-center justify-center">
    Content for "{TABS.find(t => t.id === tabId)?.label}" goes here.
  </div>
);


// --- Main Application Component ---
const App = () => {
  // --- State Management ---
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  const [activeTab, setActiveTab] = useState<TabId>(TABS[0].id);

  // --- Theme Toggle Logic ---
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to update the DOM class and localStorage when the theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Theme-dependent colors
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';

  const renderContent = () => {
    switch (activeTab) {
      case 'benefits':
        return <BenefitsContent isDark={isDark} />;
      case 'formats':
        return <FormatsContent isDark={isDark} />;
      default:
        return <PlaceholderContent tabId={activeTab} />;
    }
  };

  return (
    // Outer container for full responsiveness and theme application
    <div 
      className={`min-h-screen transition-colors duration-500 
                 ${isDark ? 'bg-gray-900' : 'bg-gray-100'} ${textColor} font-sans`}
    >
      
      {/* --- Hero Section (Fixed Blue/Indigo Background) --- */}
      <div className={`p-8 sm:p-12 ${product.heroBgClass} text-white`}>
        <header className="w-full max-w-6xl mx-auto flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-wider">
            CorroGuard
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 hover:bg-white/10 text-white"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
              <Moon className="h-6 w-6 text-indigo-200" />
            )}
          </button>
        </header>

        {/* Hero Content Grid */}
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
              {product.name}
            </h2>
            <p className="text-xl opacity-90 border-l-4 pl-4 border-indigo-400">
              {product.tagline}
            </p>
          </div>
          <div className="hidden md:block">
            <img 
              src={product.imagePlaceholder} 
              alt="VCI Film Application" 
              className="w-full h-auto rounded-xl shadow-2xl border-2 border-indigo-400/50" 
            />
          </div>
        </div>
      </div>

      {/* --- Content Area with Tabs --- */}
      <div className="w-full max-w-6xl mx-auto -mt-8 relative z-10">
        
        {/* Tab Navigation */}
        <div 
          className={`flex overflow-x-auto whitespace-nowrap border-b-2 dark:border-gray-700 border-gray-200 
                      p-2 rounded-t-xl ${cardBg} shadow-xl`}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-lg font-medium transition-all duration-300 rounded-lg mx-1
                          ${activeTab === tab.id 
                            ? 'text-indigo-600 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-400' 
                            : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                          `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`rounded-b-3xl rounded-tr-3xl min-h-[500px] shadow-2xl ${cardBg}`}>
          {renderContent()}
        </div>
        
      </div>

      {/* Spacer for bottom margin */}
      <div className="h-16"></div> 
    </div>
  );
};

export default App;
