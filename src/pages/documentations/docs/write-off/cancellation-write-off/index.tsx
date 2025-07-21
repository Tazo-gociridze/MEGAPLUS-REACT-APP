import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const CancelationWriteOff = () => {
  return (
    <div>
      <H2Title title="ჩამოწერის გაუქმება" className="!mb-6 text-xl" />
      <p className='!mb-3'>
        ჩამოწერის გასაუქმებლად უნდა გადავიდეთ დოკუმენტებში, მოვძებნოთ დოკუმენტი რომელი დოკუმენტიც
        გვინდა რომ წავშალოთ.
      </p>
      <Image
        src="https://megaplus.vercel.app/assets/images/docs/write-off-product-table.png"
        preview={false}
      />
      <p className='!mt-4'>
        ავირჩიოთ დოკუმენტი, ავირჩიოთ პროდუქცია რომლის წაშლაც გვინდა, მოვნიშნოთ წაშლის დადასტურება და
        დავაჭიროთ წაშლის ღილაკს
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/write-off-delete.png"
          className="inline-block align-middle !ml-2"
          preview={false}
        />
      </p>
    </div>
  );
};

export default CancelationWriteOff;
