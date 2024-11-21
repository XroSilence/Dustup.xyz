import React, { useState } from 'react';
import { ArrowUpRight, Building2, Phone, ClipboardCheck, MapPin, Wind } from 'lucide-react';

export default function DustupLanding() {
  const [activeIntent, setActiveIntent] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* Enhanced Hero Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center relative">
        <div 
          className="inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wind 
              className={`w-10 h-10 text-white transition-transform duration-500 ${
                isHovered ? 'rotate-180' : ''
              }`}
            />
            <h1 className="text-6xl font-bold tracking-tight">DUSTUP</h1>
          </div>
          <div className={`
            transition-all duration-500 ease-in-out
            ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-80 transform -translate-y-1'}
          `}>
            <p className="text-2xl text-slate-300 font-medium">We Take Dust Down</p>
          </div>
        </div>
      </div>

      {/* Enhanced Intent-based Navigation */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {intentPaths.map((path) => (
          <div
            key={path.id}
            className="relative group"
            onMouseEnter={() => setActiveIntent(path.id)}
            onMouseLeave={() => setActiveIntent(null)}
          >
            <div 
              className={`
                p-8 rounded-lg border
                transition-all duration-300 ease-in-out
                cursor-pointer relative overflow-hidden
                ${activeIntent === path.id ? 'border-transparent' : 'border-slate-700 bg-slate-800/50'}
              `}
              style={{
                backgroundColor: activeIntent === path.id ? path.customColor : '',
                boxShadow: activeIntent === path.id 
                  ? `0 0 30px ${path.customColor}40, 0 0 20px ${path.customColor}30`
                  : 'none',
                transform: activeIntent === path.id ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <path.icon className={`w-7 h-7 ${
                    activeIntent === path.id ? 'text-white' : 'text-slate-300'
                  }`} />
                  <h3 className="text-2xl font-semibold">{path.title}</h3>
                </div>
                <ArrowUpRight className={`w-6 h-6 transition-all duration-300 
                  ${activeIntent === path.id ? 'translate-x-1 -translate-y-1 opacity-100' : 'opacity-50'}`} />
              </div>
              <p className={`text-lg ${
                activeIntent === path.id ? 'text-white' : 'text-slate-300'
              }`}>
                {path.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Focus Statement */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-slate-300 text-xl font-medium leading-relaxed">
          Industrial-grade dust extraction at any height.
          <br />
          <span className="text-white font-semibold">Professional. Safe. Efficient.</span>
        </p>
      </div>
    </div>
  );
}