import { useTranslation } from 'react-i18next';
import { CiBoxList } from 'react-icons/ci';
import Tag from '@/utils/tag';
import Text from './components/text';
import ListItem from './components/list-item';
import H2Title from '@/utils/h2title';


const AboutData: string[] = [
  'lorem ipsum dolor molor color lorem ipsum dolor molor color lorem ipsum dolor molor color lorem ipsum dolor molor color',
  'lorem ipsum dolor molor color',
  'lorem ipsum dolor molor color',
  'lorem ipsum dolor molor color',
  'lorem ipsum dolor molor color',
  'lorem ipsum dolor molor color',
  'lorem ipsum dolor molor color',
  'lorem ipsum dolor molor color',
];

const Capabilities = () => {
  const { t } = useTranslation('home');
  return (
    <div className="grid w-full grid-cols-2 gap-x-36 rounded-b-3xl border-l-4 border-red-500 bg-[#ffffffd2] !p-[30px] !pt-[70px] dark:bg-[var(--dark-light-blue)]">
      <div className="about-image-2 h-full bg-red-200"></div>
      <div>
        <span className="flex items-center justify-between">
          <Tag text={t('about-tag')} />
          <CiBoxList className="text-4xl text-red-400" />
        </span>
        <H2Title title={t('capabilities-title')} />
        <Text />
        <div className="!mt-10 dark:text-[var(--white-gray)]">
          {AboutData.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </div>
        <div className="!mt-12 h-[1px] bg-red-200"></div>
      </div>
    </div>
  );
};

export default Capabilities;
