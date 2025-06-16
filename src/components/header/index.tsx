import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import NavLink from './components/nav-link';
import { SunOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex w-full justify-center bg-red-100 py-3 z-[9999]">
      <div className="horizontal-padding flex w-screen items-center justify-between px-72 !py-3">
        <div className="flex w-screen items-center gap-x-26">
          <Link to={'/'}>
            <img className="h-[40px] w-[100px] cursor-pointer" src={logo} alt="" />
          </Link>
          <nav className="ibm-plex-serif-regular noto-sans-georgian flex items-center justify-center gap-x-10 text-[18px]">
            <NavLink name={'Home'} path="/" />
            <NavLink name={'About'} path="/about" />
            <NavLink name={'Contacts'} path="/contacts" />
            <NavLink name={'Documentations'} path="/docs" />
          </nav>
        </div>
        <div className="flex items-center gap-x-5 text-xl *:cursor-pointer">
          <h1>
            <SunOutlined />
          </h1>
          <div className="w-[75px] text-center">
            <h1>En</h1>
            <div className="absolute w-[100%] h-56 flex-col gap-y-4 bg-amber-500 p-7 text-center *:w-[100%] *:bg-[#00000042] *:h-35px">
              <span>Ka</span>
              <span>Ru</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
