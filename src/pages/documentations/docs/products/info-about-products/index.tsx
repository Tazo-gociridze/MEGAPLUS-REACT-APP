import H2Title from '@/utils/h2title';
import { Image } from 'antd';

import { docItems } from './data';

const InfoAboutProducts = () => {
  return (
    <div>
      <div>
        <H2Title className="!mb-6 text-xl" title="ინფორმაცია პროდუქციის შესახებ" />
        <p className="!mb-6">
          პროდუქციის ფანჯარაში ნაჩვენებია ყველა ის პროდუქცია, რომელიც გვაქვს ფიზიკურად მაღაზიაში.
          შესაბამისი დასახელებითა და შტრიხკოდებით. ამ ფანჯარაში შესაძლებელია: შევამოწმოთ პროგრამული
          ნაშთი სასურველ პოზიციაზე, შევქმნათ ახალი ნომენკლატურა, შევცვალოთ ინფორმაცია პროდუქციაზე და
          მოდით პირველ რიგში ვნახოთ, რა ინფორმაცია გვხვდება, პროდუქციის ფანჯარაში, ნომენკლატურებზე.
        </p>
        <Image src="https://megaplus.vercel.app/assets/images/docs/product-img.png" />
      </div>

      <div className="!mt-12 flex flex-col gap-y-10">
        {docItems.map(({ src, text, width, height }, idx) => (
          <div key={idx} className="flex items-center gap-x-12">
            <Image preview={false} src={src} width={width} height={height} />
            <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoAboutProducts;
