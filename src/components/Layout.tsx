import React from 'react';
import CustomCursor from './CustomCursor';
import ForestBackground from './ForestBackground';
import Particles from './Particles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background elements */}
      <ForestBackground />
      <Particles />
      
      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {children}
      </main>
      
      {/* Custom cursor */}
      <CustomCursor />
    </div>
  );
};

export default Layout;