import { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import HeaderTools from './components/header-tools';
import { CiClock2, CiLocationOn, CiMail } from 'react-icons/ci';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {t} = useTranslation('header')
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);



  return (
    <header
      className={`fixed z-50 flex w-full flex-col justify-center py-3 transition-[0.5s] dark:bg-[var(--dark-blue)] ${isScrolled ? 'top-[-60px] left-0' : 'top-0 left-0'}`}
    >
      <div
        className={`top-header flex h-[60px] w-full justify-between border-b-[1px] border-solid border-red-200 dark:border-[#ffffff1e]
           bg-red-100 !px-72 transition-opacity duration-500 *:h-full *:border-x-[1px] *:border-solid *:border-red-200
            *:dark:border-[#ffffff1e] *:!px-10 dark:bg-[var(--dark-blue)]`}
      >
        <div className="flex items-center gap-x-4">
          <IoPhonePortraitOutline className="text-3xl text-red-500 dark:text-red-300" />
          <a href="tel:995597050364" className='dark:text-[var(--white-gray)]'>+995 557-567-789</a>
        </div>
        <div className="flex items-center gap-x-4">
          <CiMail className="text-3xl text-red-500 dark:text-red-300" />
          <span className="text-md dark:text-[var(--white-gray)]">megaplus@gmail.com</span>
        </div>
        <div className="flex items-center gap-x-4 ">
          <CiLocationOn className="text-3xl text-red-500 dark:text-red-300" />
          <span className='dark:text-[var(--white-gray)]'>{t('header-address')}</span>
        </div>
        <div className="!mr-5 flex items-center gap-x-4">
          <CiClock2 className="text-3xl text-red-500 dark:text-red-300" />
          <span className='dark:text-[var(--white-gray)]'>10:00 - 18:00</span>
        </div>
      </div>
      <div className="horizontal-padding bottom-header flex w-screen items-center justify-between bg-red-100 px-72 !py-3 dark:bg-[var(--dark-blue)]">
        <NavBar />
        <HeaderTools />
      </div>
    </header>
  );
};

export default Header;
