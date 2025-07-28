import H2Title from '@/utils/h2title';
import { Image } from 'antd';
import { reportSuppliersOperationFields } from './data';

const ReportsSuppliers = () => {
  return (
    <div>
      <H2Title className="!mb-6 text-xl" title="რეპორტები / მომწოდებლები" />
      <Image
        height={'90%'}
        width={'90%'}
        src="https://megaplus.vercel.app/assets/images/docs/reports-reports-tab.png"
        preview={false}
      />
      <p>
        ამ მოდულში შეგვიძლია ვნახოთ მომწოდებლის ისტორია თარიღის მიხედვით. ავირჩიოთ თარიღი,
        შევიყვანოთ მომწოდებელი და დავაჭიროთ
        <Image
          className="inline-block align-middle"
          src="https://megaplus.vercel.app/assets/images/docs/reports-arrows-btn.png"
          preview={false}
        />
        ღილაკს.
      </p>
      <ul className="list-disc !pl-5 *:!mt-3">
        {reportSuppliersOperationFields.map((filter, index) => (
          <li key={index}>
            <strong>{filter.title}</strong> - {filter.description}
          </li>
        ))}
      </ul>
      <p className="!mt-4 !mb-1">
        ეს რეპორტი ხშირად გვჭირდება მომწოდებელთან შესადარებლად. თუ მომწოდებელს ვერ ვედრებით
        დავალიანებაში, შესაძლებელია, რომ გადახდა რომელიც ჩვენ დავაფიქსირეთ ან მიღება ან დაბრუნება არ
        უჩანდეს მომწოდებელს. ან პირიქით ჩვენ გვქონდეს არასწორად შესრულებული. ოპერაციები რომელიც
        პროგრამაში არჩეულ მომწოდებელზე არის დაფიქსირებული ამ ფანჯარაშია ნაჩვენები შესაბამისად,
        პროგრამა ამ ინფორმაციაზე დაყრდნობით ითვლის დავალიანებას. თუ მომწოდებელს ვერ ვედრებით
        ლოგიკურია, რომ ოპერაცია რომელიც შევასრულეთ არ ითვლის მომწოდებელი ან პირიქით.
      </p>
    </div>
  );
};

export default ReportsSuppliers;
