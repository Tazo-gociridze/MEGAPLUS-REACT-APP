import H2Title from '@/utils/h2title';
import { Image } from 'antd';
import { filters } from './data';

const ReportsReception = () => {
  return (
    <div>
      <H2Title className="!mb-6 text-xl" title="რეპორტები / მიღება" />
      <Image
        src="https://megaplus.vercel.app/assets/images/docs/reports-recieve.png"
        preview={false}
      />
      <ul className='list-disc !pl-5 *:!mt-3'>
        {filters.map((filter, index) => (
          <li key={index}>
            <strong>{filter.title}</strong> - {filter.description}
          </li>
        ))}
      </ul>
      <p className='!mt-4 !mb-1'>მიღებების ნახვა ზედნადებების მიხედვით:</p>
      <Image src='https://megaplus.vercel.app/assets/images/docs/reports-according-btn.png' preview={false}/>
    </div>
  );
};

export default ReportsReception;
