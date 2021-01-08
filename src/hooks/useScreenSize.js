import { useEffect, useState } from 'react';

function detectSize(width) {
  const TABLET = 768;
  const DESKTOP = 1230;
  if (width < TABLET) return 'MOBILE';
  if (width < DESKTOP) return 'TABLET';
  return 'DESKTOP';
}

export default function useScreenSize() {
  const [screenWidth, setscreenWidth] = useState(null);

  const handleResize = () => {
    setscreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return detectSize(screenWidth);
}
