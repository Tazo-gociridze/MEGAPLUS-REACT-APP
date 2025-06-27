import { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import HeaderTools from './components/header-tools';
import TopHeader from './components/top-header';

interface HeaderProps {
  setSidebar: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebar }) => {
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

  return (
    <header
      className={`fixed z-50 flex w-full flex-col justify-center py-3 transition-[0.5s] dark:bg-[var(--dark-blue)] ${
        isScrolled ? 'top-[-60px] left-0 shadow-lg' : 'top-0 left-0'
      }`}
    >
      <TopHeader />

      <div className="fixed-width horizontal-padding flex w-full items-center bg-red-50 !justify-between !py-3 dark:bg-[var(--dark-blue)]">
        <NavBar />
        <HeaderTools setSidebar={setSidebar} />
      </div>
    </header>
  );
};

export default Header;
