import React, { useState } from 'react';
import { ArrowUpRight, Building2, Phone, ClipboardCheck, MapPin } from 'lucide-react';

const DustupLanding = () => {
  const [activeIntent, setActiveIntent] = useState(null);

  const intentPaths = [
    {
      id: 'quote',
      title: 'Get a Quote',
      description: 'Quick, no-obligation quote for your facility',
      icon: ClipboardCheck,
      customColor: '#3B82F6',
      hoverColor: '#2563EB'
    },
    {
      id: 'services',
      title: 'Our Services',
      description: 'High-elevation dust extraction solutions',
      icon: Building2,
      customColor: '#6366F1',
      hoverColor: '#4F46E5'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'Direct line to our team',
      icon: Phone,
      customColor: '#A855F7',
      hoverColor: '#9333EA'
    },
    {
      id: 'areas',
      title: 'Service Areas',
      description: 'Where we operate',
      icon: MapPin,
      customColor: '#69E515',
      hoverColor: '#5ACC13'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">DUSTUP</h1>
        <p className="text-2xl text-gray-300">We Take Dust Down</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {intentPaths.map((path) => (
          <div
            key={path.id}
            className="relative group"
            onMouseEnter={() => setActiveIntent(path.id)}
            onMouseLeave={() => setActiveIntent(null)}
          >
            <div 
              className={`
                p-6 rounded-lg border border-gray-700
                transition-all duration-300 ease-in-out
                transform hover:scale-105 cursor-pointer
                bg-gray-800
              `}
              style={{
                backgroundColor: activeIntent === path.id ? path.customColor : '',
                boxShadow: activeIntent === path.id 
                  ? `0 0 25px ${path.customColor}40, 0 0 15px ${path.customColor}30`
                  : 'none'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <path.icon className={`w-6 h-6 text-white`} />
                  <h3 className="text-xl font-semibold text-white">{path.title}</h3>
                </div>
                <ArrowUpRight 
                  className={`w-5 h-5 transition-transform duration-300 text-white
                    ${activeIntent === path.id ? 'translate-x-1 -translate-y-1' : ''}`} 
                />
              </div>
              <p className={`text-gray-300`}>
                {path.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-300 text-lg">
          Industrial-grade dust extraction at any height. 
          Professional. Safe. Efficient.
        </p>
      </div>
    </div>
  );
};

export default DustupLanding;