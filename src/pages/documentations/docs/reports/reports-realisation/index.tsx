import H2Title from '@/utils/h2title';
import { Image } from 'antd';
import { salesFilterFields } from './data';

const ReportsRealisation = () => {
  return (
    <div>
      <H2Title className="text-xl" title="რეპორტები / რეალიზაცია" />
      <div>
        <Image
          className="!my-6"
          src="https://megaplus.vercel.app/assets/images/docs/reports-fillter-window.png"
          preview={false}
        />
        <p className="!mb-3">
          რეპორტებში შესვლისას, პირველი გვხვდება რეალიზაციები. აქ შეგვიძლია გავფილტროთ რეალიზაციები
          სხვადასხვა კატეგორიით:
        </p>
        <ul className="list-disc space-y-4 !pl-5 text-sm text-gray-700 *:!mt-3">
          {salesFilterFields.map((field) => (
            <li key={field.key}>
              <strong>{field.label}</strong>: {field.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="!mt-6">
        <p className="!my-4">
          რეალიზაციების დღეების მიხედვით დალაგება. მაგ: თუ ავირჩევთ 1 თვის ჭრილის რეალიზაციას ამ
          ღილაკზე დაჭერით შეგვიძლია ვნახოთ თითოეულ დღეს რამდენი ლარის პროდუქცია გავყიდეთ. მოვნიშნოთ
          „თვეებით“და დავაჭიროთ ღილაკს „ნავაჭრი დღეებით“ ამ შემთხვევაში მთლიანი თვის რეალიზაციებს
          დააჯამებს.
        </p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/reports-merchandise-btn.png"
          preview={false}
        />
      </div>

      <div className="!mt-6">
        <p className="!my-3">
          რეალიზაციების ჯგუფების მიხედვით დალაგება. თუ მოვნიშნავთ „ქვეჯგუფით“ ასევე გვაჩვენებს
          ქვეჯგუფებს.
        </p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/reports-group-btn.png"
          preview={false}
        />
      </div>

      <div className="!mt-6">
        <p>
          პროდუქციის რეალიზაციებში გვხვდება 0 რაოდენობა. ეს არის რეალიზაციაში ამოშლილი პროდუქციები.
        </p>
        <Image
          className="!my-3"
          src="https://megaplus.vercel.app/assets/images/docs/reports-sales-part.png"
          preview={false}
        />
        <p>
          ამ ნაწილში დაჯამებულია გაყიდული პროდუქციების რაოდენობა, გაყიდვების ჯამი(სარეალიზაციო
          ფასით), გაყიდვების თვითღირებულება, მოგება თანხობრივად/პროცენტულად.
        </p>
      </div>
    </div>
  );
};

export default ReportsRealisation;
