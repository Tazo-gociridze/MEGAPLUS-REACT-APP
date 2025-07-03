import { useTranslation } from 'react-i18next';
import { CiClock2, CiLocationOn, CiMail } from 'react-icons/ci';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const TopHeader = () => {
  const { t } = useTranslation('header');
  return (
    <div
      className={`top-header fixed-width flex h-[60px] w-full justify-between border-b-[1px] border-solid border-red-100
         bg-red-50 transition-opacity duration-500 *:h-full *:border-x-[1px] *:border-solid *:border-red-100 *:!px-10
          dark:border-[#ffffff10] dark:bg-[var(--dark-blue)] *:dark:border-[#ffffff10] *:dark:bg-[var(--dark-blue)]`}
    >
      <div className="flex items-center gap-x-4 rounded-2xl bg-red-50">
        <IoPhonePortraitOutline className="text-3xl text-red-500 dark:text-red-300" />
        <a href="tel:995597050364" className="dark:text-[var(--white-gray)]">
          +995 592 00 32 32
        </a>
      </div>
      <div className="flex items-center gap-x-4 rounded-2xl bg-red-50">
        <CiMail className="text-3xl text-red-500 dark:text-red-300" />
        <span className="dark:text-[var(--white-gray)]">INFO@MEGAPLUS.GE</span>
      </div>
      <div className="flex items-center gap-x-4 rounded-2xl bg-red-50">
        <CiLocationOn className="text-3xl text-red-500 dark:text-red-300" />
        <span className="dark:text-[var(--white-gray)]">{t('header-address')}</span>
      </div>
      <div className="flex items-center gap-x-4 rounded-2xl bg-red-50">
        <CiClock2 className="text-3xl text-red-500 dark:text-red-300" />
        <span className="dark:text-[var(--white-gray)]">10:00 - 18:00</span>
      </div>
    </div>
  );
};

export default TopHeader;
