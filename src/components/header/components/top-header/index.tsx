import { useTranslation } from 'react-i18next';
import { CiClock2, CiLocationOn, CiMail } from 'react-icons/ci';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const TopHeader = () => {
  const { t } = useTranslation('header');
  return (
    <div
      className={`top-header fixed-width flex h-[60px] w-full justify-between border-b-[1px] border-solid border-red-100 bg-red-50 transition-opacity duration-500 *:h-full *:border-x-[1px] *:border-solid *:border-red-100 *:!px-10 dark:border-[#ffffff10] dark:bg-[var(--dark-blue)] *:dark:border-[#ffffff10] *:dark:bg-[var(--dark-blue)]`}
    >
      <div className="flex items-center gap-x-4 rounded-2xl bg-red-50">
        <IoPhonePortraitOutline className="text-3xl text-red-500 dark:text-red-500" />
        <a
          href="tel:995322500601"
          className="hover:text-red-500 hover:underline dark:text-[var(--white-gray)]"
        >
          +995 322-500-601
        </a>
      </div>
      <div className="flex items-center gap-x-4 rounded-2xl bg-red-50">
        <a
          href="mailto:info@megaplus.ge"
          className="flex items-center gap-x-3 text-[var(--dark-blue)] hover:text-red-500 hover:underline dark:text-[var(--white-gray)]"
        >
          <CiMail className="text-3xl text-red-500" />
          <span>info@megaplus.ge</span>
        </a>
      </div>
      <div className="flex items-center gap-x-4 rounded-2xl bg-red-50">
        <a
          className="flex items-center gap-x-3 text-[var(--dark-blue)] hover:text-red-500 hover:underline dark:text-[var(--white-gray)]"
          href="https://maps.app.goo.gl/Q5sABRxT8McCZ5Ts6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLocationOn className="text-3xl text-red-500 dark:text-red-500" />
          <span className="dark:text-[var(--white-gray)]">{t('header-address')}</span>
        </a>
      </div>
      <div className="flex items-center gap-x-4 rounded-2xl bg-red-50 select-none">
        <CiClock2 className="text-3xl text-red-500 dark:text-red-500" />
        <span className="dark:text-[var(--white-gray)]">10:00 - 18:00</span>
      </div>
    </div>
  );
};

export default TopHeader;
