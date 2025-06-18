import NavBar from './components/nav-bar';
import HeaderTools from './components/header-tools';

const Header = () => {
 
  return (
    <header className="fixed top-0 left-0 flex w-full justify-center bg-red-100 dark:bg-[#25233f] transition-[0.3s] py-3">
      <div className="horizontal-padding flex w-screen items-center justify-between px-72 !py-3">
        <NavBar/>
        <HeaderTools />
      </div>
    </header>
  );
};

export default Header;
