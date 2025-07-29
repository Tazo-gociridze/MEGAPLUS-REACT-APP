import { useLocation } from 'react-router-dom';
import ContactUs from './components/contact-us';
import Location from './components/location';
import SocialMedia from './components/social-media';

const Footer = () => {
  const pathname = useLocation().pathname;
  return (
    <footer
      className={`${pathname !== '/docs' ? 'fixed-width' : 'hidden'} w-full !bg-red-50 !pt-10 text-white dark:!bg-[var(--dark-blue)]`}
    >
      <div className="footer-content !mb-10 grid grid-cols-2 justify-between">
        <div className="footer-contacts flex justify-start gap-x-10">
          <ContactUs />
          <SocialMedia />
        </div>
        <Location />
      </div>
      <div className="border-t-[1px] border-[#8080807e] !py-2 text-center text-[var(--dark-gray)] dark:border-[#ffffff2f] dark:text-[var(--white-gray)]">
        <span>© 2025 Copyright: MEGA PLUS</span>
      </div>
    </footer>
  );
};

export default Footer;
