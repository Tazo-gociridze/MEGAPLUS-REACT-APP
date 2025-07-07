import { useState, useEffect } from 'react';


export interface HeaderProps {
  setSidebar: (value: boolean) => void;
}

const useHeaderLogic = (setSidebar : (value: boolean) => void) => {
      const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth > 860);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && isWideScreen) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      const isWide = window.innerWidth > 860;
      setIsWideScreen(isWide);

      if (!isWide) {
        setIsScrolled(false);
      } else {
        handleScroll();
        setSidebar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isWideScreen, setSidebar]);
  return {
isScrolled
  }
}

export default useHeaderLogic