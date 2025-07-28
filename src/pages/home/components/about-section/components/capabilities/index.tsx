import { useTranslation } from 'react-i18next';
import { CiBoxList } from 'react-icons/ci';
import Tag from '@/utils/tag';
import Text from './components/text';
import ListItem from './components/list-item';
import H2Title from '@/utils/h2title';

const AboutData = [
  { name: 'რეალიზაცია', link: 'https://www.youtube.com/watch?v=70z7lGud-yI&ab_channel=MEGAPLIUS' },
  {
    name: 'შესყიდვები RS-ის მეშვეობით',
    link: 'https://www.youtube.com/watch?v=TEA4kk8HIPM&ab_channel=MEGAPLIUS',
  },
  {
    name: 'შესყიდვის დროს პროდუქციის ჩაშლა',
    link: 'https://www.youtube.com/watch?v=S93PRnDv8Gw&ab_channel=MEGAPLIUS',
  },
  {
    name: 'ასაწონი პროდუქციის შესყიდვა',
    link: 'https://www.youtube.com/watch?v=0MWK3-l2TVc&list=PLoA1FSF4ia01GnmUHZlF2fQiFPbcy33y-&index=4&ab_channel=MEGAPLIUS',
  },
  {
    name: 'შესყიდვები შესყიდვის აქტით',
    link: 'https://www.youtube.com/watch?v=FqOeWmeQdK8&list=PLoA1FSF4ia01GnmUHZlF2fQiFPbcy33y-&index=2&ab_channel=MEGAPLIUS',
  },
  {
    name: 'დაბრუნება RS-ის მეშვეობით',
    link: 'https://www.youtube.com/watch?v=BCs1Z434H3Y&ab_channel=MEGAPLIUS',
  },
  {
    name: 'მომწოდებლები და დავალიანების მართვა',
    link: 'https://www.youtube.com/watch?v=RMDNpSwMXx8&ab_channel=MEGAPLIUS',
  },
  {
    name: 'ინვენტარიზაცია',
    link: 'https://www.youtube.com/watch?v=B776amdYHqc&list=PLoA1FSF4ia03xLLSn1XgA9G5uZnfM102M&ab_channel=MEGAPLIUS',
  },
];

const Capabilities = () => {
  const { t } = useTranslation('home');
  return (
    <div className="capabilities-section w-full grid-cols-2 gap-x-36 rounded-b-3xl border-l-4 border-red-500 bg-[#ffffffd2] !p-[30px] !pt-[70px] dark:bg-[var(--dark-light-blue)]">
      <div className="about-image-2 h-full bg-red-200"></div>
      <div>
        <span className="flex items-center justify-between">
          <Tag text={t('about-tag')} />
          <CiBoxList className="text-4xl text-red-400" />
        </span>
        <H2Title className='text-xl' title={t('capabilities-title')} />
        <Text />
        <div className="!mt-10 dark:text-[var(--white-gray)]">
          {AboutData.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
        <div className="!mt-12 h-[1px] bg-red-200"></div>
      </div>
    </div>
  );
};

export default Capabilities;
