import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import Tag from '../../../../../../utils/tag';
import H2Title from '../../../../../../utils/h2title';

const AboutCompany = () => {
  const { t } = useTranslation('home');
  return (
    <div className="!mt-22 grid w-full grid-cols-2 gap-x-36 rounded-t-3xl border-r-4 border-red-500 bg-[#ffffffd2] dark:bg-[var(--dark-light-blue)] !p-[30px]">
      <div>
        <Tag text={t('about-tag')}/>
        <H2Title title={t('about-title')}/>

        <p className="!mt-12 w-[90%] dark:text-[var(--white-gray)]">{t('about-text')}</p>
        <div className="!mt-12 flex gap-x-5 *:cursor-pointer *:rounded-[100px]">
          <a href="#tariffs" className='flex items-center gap-x-3 bg-red-500 !px-8 !py-2 text-[white]'>
              <span>{t('about-get-btn')}</span>
              <FaArrowRight className="!mt-[2px]" />
          </a>
          {/* <button className="bg-red-200 !px-5 !py-2">{t('about-view-btn')}</button> */}
        </div>
        <div className="!mt-12 h-[1px] bg-red-200"></div>
        <div className="!my-12 flex justify-between text-[#000000b6] dark:text-[var(--white-gray)] *:text-7xl">
          <span>95%</span>
          <span>100+</span>
          <span>1000</span>
        </div>
      </div>
      <div className="about-image h-full bg-red-200"></div>
    </div>
  );
};

export default AboutCompany;
