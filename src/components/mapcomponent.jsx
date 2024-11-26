import React, { useState, useEffect } from 'react';
import { MapPin, Sparkles, Building2, Factory, Workflow } from 'lucide-react';

const FloatingIcon = ({ children, delay = 0 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.sin(Date.now() / 1000 + delay) * 10,
        y: Math.cos(Date.now() / 1000 + delay) * 10
      });
    }, 50);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div 
      className="absolute transition-transform duration-500 hover:scale-125"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};

const MapComponent = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMapClick = (location) => {
    if (location.distanceFromMapleRidge > 70) {
      window.location.href = 'https://www.dustup.xyz/contact_us';
    } else {
      console.log(`Selected location: ${location.name}`);
    }
  };

  // Simulate map locations
  const locations = [
    { id: 1, name: "Woodshop A", x: 20, y: 20, type: "woodshop" },
    { id: 2, name: "Factory B", x: 40, y: 60, type: "factory" },
    { id: 3, name: "Industry C", x: 80, y: 30, type: "industry" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon delay={0}>
          <Sparkles className="text-green-400 w-6 h-6 absolute top-20 left-20" />
        </FloatingIcon>
        <FloatingIcon delay={1}>
          <Building2 className="text-green-400 w-6 h-6 absolute top-40 right-40" />
        </FloatingIcon>
        <FloatingIcon delay={2}>
          <Factory className="text-green-400 w-6 h-6 absolute bottom-20 left-40" />
        </FloatingIcon>
        <FloatingIcon delay={3}>
          <Workflow className="text-green-400 w-6 h-6 absolute bottom-40 right-20" />
        </FloatingIcon>
      </div>

      {/* Main map container */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="relative h-[80vh] border-2 border-green-400 rounded-lg bg-slate-800 shadow-[0_0_15px_rgba(74,222,128,0.5)] overflow-hidden">
          {/* Map placeholder - replace with actual map implementation */}
          <div className="absolute inset-0 bg-slate-800">
            {locations.map((location) => (
              <button
                key={location.id}
                className="absolute p-2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                onMouseEnter={() => setHoveredLocation(location)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => handleMapClick(location)}
              >
                <MapPin 
                  className={`w-6 h-6 ${
                    hoveredLocation?.id === location.id 
                      ? 'text-green-400 animate-pulse' 
                      : 'text-white'
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* Location info tooltip */}
          {hoveredLocation && (
            <div 
              className="absolute bg-slate-700 text-white p-3 rounded border border-green-400 shadow-lg z-10 transform -translate-x-1/2 -translate-y-full"
              style={{ left: `${hoveredLocation.x}%`, top: `${hoveredLocation.y}%` }}
            >
              <p className="text-sm font-semibold">{hoveredLocation.name}</p>
              <p className="text-xs text-green-400">{hoveredLocation.type}</p>
            </div>
          )}

          {/* Interactive cursor trail */}
          <div 
            className="pointer-events-none fixed w-4 h-4 border-2 border-green-400 rounded-full transition-all duration-200 ease-out"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MapComponent;