import { useTranslation } from 'react-i18next';
import { FaSquareFacebook } from 'react-icons/fa6';
import { GoPersonAdd } from 'react-icons/go';
import { IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';

const SocialMedia = () => {
  const { t } = useTranslation('footer');
  return (
    <div className="flex flex-col items-start text-[var(--dark-gray)] dark:text-[var(--white-gray)]">
      <span className="!mb-6 flex items-center gap-x-3 text-2xl">
        <span>{t('social-media')}</span> <GoPersonAdd className="text-red-500" />
      </span>
      <ul className="flex items-start gap-x-4 text-4xl">
        <li className="cursor-pointer hover:text-red-300 hover:underline">
          <a href="https://www.facebook.com/MEGAPLUS.GE" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook className="text-blue-600" />
          </a>
        </li>

        <li className="cursor-pointer">
          <a
            href="https://www.linkedin.com/company/megaplus-retail/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
  );
};

export default SocialMedia;
