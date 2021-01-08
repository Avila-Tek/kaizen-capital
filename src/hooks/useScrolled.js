import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  const [pos, setPos] = useState(null);
  const handleScrollPos = () => setPos(window.scrollY);
  useEffect(() => {
    handleScrollPos();
    window.addEventListener('scroll', handleScrollPos);
    return () => window.removeEventListener('scroll', handleScrollPos);
  }, []);
  return pos > 0;
}
