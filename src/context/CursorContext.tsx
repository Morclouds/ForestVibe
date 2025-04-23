import React, { createContext, useState, useContext, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorContextType {
  position: CursorPosition;
  isActive: boolean;
  updatePosition: (x: number, y: number) => void;
  setIsActive: (active: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  position: { x: 0, y: 0 },
  isActive: true,
  updatePosition: () => {},
  setIsActive: () => {},
});

export const useCursor = () => useContext(CursorContext);

interface CursorProviderProps {
  children: React.ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(true);

  const updatePosition = (x: number, y: number) => {
    setPosition({ x, y });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const handleMouseEnter = () => {
      setIsActive(true);
    };

    // Add class to body to hide default cursor
    document.body.classList.add('custom-cursor-active');

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      // Remove class when component unmounts
      document.body.classList.remove('custom-cursor-active');
      
      // Remove event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ position, isActive, updatePosition, setIsActive }}>
      {children}
    </CursorContext.Provider>
  );
};