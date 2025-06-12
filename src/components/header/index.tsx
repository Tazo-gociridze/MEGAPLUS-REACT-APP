import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import NavLink from './components/nav-link';

const Header = () => {

  return (
    <header className="fixed top-0 left-0 flex w-full justify-center bg-red-100 py-3">
      <div className="horizontal-padding flex w-screen items-center gap-x-26 px-72 !py-3">
        <Link to={'/'}>
          <img className="h-[40px] w-[100px] cursor-pointer" src={logo} alt="" />
        </Link>
        <nav className="flex items-center justify-center gap-x-10 text-[18px]">
          <NavLink name={'Home'} path='/'/>
          <NavLink name={'About'} path='/about'/>
          <NavLink name={'Contacts'} path='/contacts'/>
          <NavLink name={'Documentations'} path='/docs'/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
