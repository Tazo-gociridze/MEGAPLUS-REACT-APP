import { RiContactsBook3Line } from 'react-icons/ri';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation('footer');
  return (
    <div className="flex flex-col items-start text-[var(--dark-gray)] dark:text-[var(--white-gray)]">
      <span className="!mb-4 flex items-center gap-x-3 text-[1.2rem]">
        <span>{t('contact-us')}</span> <RiContactsBook3Line className="text-red-500" />
      </span>
      <ul className="flex flex-col items-start gap-y-2">
        <li className="flex items-center gap-x-3 hover:text-red-500 hover:underline">
          <IoPhonePortraitOutline className="text-lg text-red-500" />
          <a href="tel:+995322500601">+995 322-500-601</a>
        </li>
        <li className="flex items-center gap-x-3 hover:text-red-500 hover:underline">
          <IoPhonePortraitOutline className="text-lg text-red-500" />
          <a href="tel:+995322344425">+995 322-344-425</a>
        </li>
        <li>
          <a
            href="mailto:info@megaplus.ge"
            className="flex items-center gap-x-3 hover:text-red-500 hover:underline"
          >
            <CiMail className="text-lg text-red-500" />
            <span>info@megaplus.ge</span>
          </a>
        </li>
        <li className="flex items-center gap-x-3">
          <CiLocationOn className="text-lg text-red-500" />
          <span>{t('location')}</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
