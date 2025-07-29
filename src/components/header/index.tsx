import NavBar from './components/nav-bar';
import HeaderTools from './components/header-tools';
import TopHeader from './components/top-header';
import useHeaderLogic, { type HeaderProps } from './hooks/useHeaderLogic';
import { useLocation } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({ setSidebar }) => {
  const location = useLocation().pathname;
  const { isScrolled } = useHeaderLogic(setSidebar);

  return (
    <>
      {location === '/docs' ? (
        <header
          className={`fixed top-[-60px] z-50 flex w-full flex-col justify-center py-[12px] transition-[0.5s] dark:bg-[var(--dark-blue)]`}
        >
          <TopHeader />

          <div className="horizontal-padding flex w-full items-center !justify-between bg-red-50 !px-10 !py-3 dark:bg-[var(--dark-blue)]">
            <NavBar />
            <HeaderTools setSidebar={setSidebar} />
          </div>
        </header>
      ) : (
        <header
          className={`fixed z-50 flex w-full flex-col justify-center py-3 transition-[0.5s] dark:bg-[var(--dark-blue)] ${
            isScrolled ? 'top-[-60px] left-0 shadow-lg' : 'top-0 left-0'
          }`}
        >
          <TopHeader />

          <div className="fixed-width horizontal-padding flex w-full items-center !justify-between bg-red-50 !py-3 dark:bg-[var(--dark-blue)]">
            <NavBar />
            <HeaderTools setSidebar={setSidebar} />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
