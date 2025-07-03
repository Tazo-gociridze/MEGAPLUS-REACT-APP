import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaSquareFacebook } from 'react-icons/fa6';
import { GoPersonAdd } from 'react-icons/go';
import { IoLogoLinkedin, IoLogoYoutube, IoPhonePortraitOutline } from 'react-icons/io5';
import { RiContactsBook3Line } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="fixed-width w-full !bg-red-50 !pt-10 text-white dark:!bg-[var(--dark-blue)]">
      <div className="!mb-10 grid grid-cols-2 gap-x-20">
        <div className="flex justify-between">
          <div className="flex flex-col items-start text-[var(--dark-gray)] dark:text-[var(--white-gray)]">
            <span className="!mb-4 flex items-center gap-x-3 text-2xl">
              <span>კონტაქტი</span> <RiContactsBook3Line className="text-red-500" />
            </span>
            <ul className="flex flex-col items-start gap-y-2">
              <li className="flex items-center gap-x-3 hover:text-red-500 hover:underline">
                <IoPhonePortraitOutline className="text-lg text-red-500" />
                <a href="tel:+995592003232">+995 00 32 32</a>
              </li>
              <li>
                <a
                  href="mailto:INFO@MEGAPLUS.GE"
                  className="flex items-center gap-x-3 hover:text-red-500 hover:underline"
                >
                  <CiMail className="text-lg text-red-500" />
                  <span>INFO@MEGAPLUS.GE</span>
                </a>
              </li>
              <li className="flex items-center gap-x-3">
                <CiLocationOn className="text-lg text-red-500" />
                <span>თბილისი, წერეთლის გამზირი №116</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start text-[var(--dark-gray)] dark:text-[var(--white-gray)]">
            <span className="!mb-6 flex items-center gap-x-3 text-2xl">
              <span>სოციალური მედია</span> <GoPersonAdd className="text-red-500" />
            </span>
            <ul className="flex items-start gap-x-4 text-4xl">
              <li className="cursor-pointer hover:text-red-300 hover:underline">
                <a href="">
                  <FaSquareFacebook className="text-blue-600" />
                </a>
              </li>

              <li className="cursor-pointer">
                <a href="">
                  <IoLogoLinkedin className="text-blue-300" />
                </a>
              </li>
              <li className="cursor-pointer hover:text-red-300 hover:underline">
                <a
                  href="https://www.youtube.com/channel/UCFHXhna5JW6MC-QIriJagLw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube className="text-red-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[250px] w-full overflow-hidden rounded-xl shadow-2xl dark:shadow-sm">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.7483805953681!2d44.78028855424945!3d41.73852674122025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447294cd8c4faf%3A0xb98074af2e79b7b2!2sDidube%20Plaza!5e0!3m2!1sen!2sge!4v1751446187879!5m2!1sen!2sge"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
      <div className="border-t-[1px] border-[#8080807e] !py-2 text-center dark:border-[#ffffff2f] text-[var(--dark-gray)] dark:text-[var(--white-gray)]">
        <span>© 2025 Copyright: MEGA PLUS</span>
      </div>
    </footer>
  );
};

export default Footer;
