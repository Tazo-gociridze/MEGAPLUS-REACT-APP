import { useTranslation } from 'react-i18next';

const Text = () => {
  const { t } = useTranslation('home');
  return <p className="!mt-12 w-[90%] dark:text-[var(--white-gray)]">{t('capabilities-text')}</p>;
};

export default Text;
