import { useEffect, useState } from 'react';

const useMainLayoutLogic = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return {
    sidebar,
    setSidebar,
    showScrollTop,
    scrollToTop,
  };
};

export default useMainLayoutLogic;
