import H2Title from '@/utils/h2title';
import { Image } from 'antd';
import { extraFunctionalityIcons } from './data';

const AdditionalFunctions = () => {
  return (
    <div>
      <div>
        <H2Title className="!mb-8 text-xl" title="მოდით სიმარტივისთვის დავნომროთ ხატულები." />
        <Image
          width={'80%'}
          height={'80%'}
          src="https://megaplus.vercel.app/assets/images/docs/extrafunctionality-table.png"
        />
      </div>
      <div className="!mt-8 *:!mb-12">
        {extraFunctionalityIcons.map((icon, index) => (
          <div key={index} className="flex items-center gap-x-4">
            <Image preview={false} src={icon.src} width={icon.width} height={icon.height} />
            <p>{icon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalFunctions;
