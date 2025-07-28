import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const ProductsAddEdit = () => {
  return (
    <div>
      <H2Title className="!mb-6 text-xl" title="პროდუქციის შექმნა" />
      <div>
        <p>
          {' '}
          ისეთი პროდუქციის მიღების დროს, რომელსაც ვიღებთ პირველად , იქიდან გამომდინარე, რომ
          პროდუქცია არ გვაქვს პროგრამაში, მოგვიწევს პროდუქციის შექმნა. შექმნა შეგვიძლია პროდუქციის
          ფანჯრიდან.
        </p>
        <span className="!my-5 flex items-center gap-x-3">
          <span>პირველ რიგში, უნდა დავაჭიროთ </span>
          <span>
            <Image preview={false} src="https://megaplus.vercel.app/assets/images/docs/C-img.png" />
          </span>
          <span className="">
            ღილაკს, რადგან გასუფთავდეს ველები. შევიყვანოთ ველებში ინფორმაცია:
          </span>
        </span>
        <Image
          preview={false}
          src="https://megaplus.vercel.app/assets/images/docs/create-product-img.png"
        />
        <ul className="!mt-5 list-disc space-y-2 !pl-4 *:!mb-3">
          <li>
            <strong>შტრიხკოდი</strong> — შევიყვანოთ (ჩავასკანეროთ) პროდუქციის შტრიხკოდი.
          </li>
          <li>
            <strong>კოდი</strong> — ალტერნატიული შტრიხკოდი, შეგვიძლია ჩავწეროთ იგივე რაც შტრიხკოდში.
          </li>
          <li>
            <strong>დასახელება</strong> — შევიყვანოთ პროდუქციის დასახელება, რეკომენდირებულია
            შევიყვანოთ რაც შეიძლება კონკრეტული დასახელება.
          </li>
          <li>
            <strong>დასახელება 2</strong> — დასახელებაზე “ENTER”- ზე დაჭერით ავტომატურად ჩაიწერება
            დასახელება.
          </li>
          <li>
            <strong>ერთეული</strong> — შევიყვანოთ რა ერთეულში უნდა გაიყიდოს პროდუქცია, წონა თუ
            ცალობა. ვუთითებთ „ცალი“ ან „კგ“ <br />{' '}
            <span>
              (წონის პროდუქციაზე აუცილებლად უნდა მივუთითოთ „კგ“!!! კილო, კილოგრამი არ შეიძლება, არ
              გადაიგზავნება სასწორზე.)
            </span>
          </li>
          <li>
            <strong>ფასი</strong> — ვუთითებთ რა ფასშიც უნდა გავყიდოთ პროდუქცია.
          </li>
          <li>
            <strong>დღგ &gt;</strong> — მიღების დღგ.
          </li>
          <li>
            <strong>დღგ &lt;</strong> — გატანის დღგ.
          </li>
        </ul>

        <span className="!mt-6">ყველა ზოლის შევსების შემდეგ ვაწვებით შექმნა-ს</span>

        <H2Title className="!mb-6 text-xl" title="პროდუქციის ჩასწორება" />
        <p className="!mb-6">
          იმ შემთხვევაში თუ გვინდა პროდუქციაზე ინფორმაციის შეცვლა, უნდა ავირჩიოთ პროდუქცია რის
          შემდეგაც ავტომატურად შეივსება ველები :
        </p>
        <Image
          preview={false}
          className="!mb-6"
          src="https://megaplus.vercel.app/assets/images/docs/create-product-img.png"
        />
        <p>
          ჩავასწოროთ სასურველი ინფორმაცია და დავაჭიროთ ღილაკს: <strong>ჩასწორება</strong>
        </p>
      </div>
    </div>
  );
};

export default ProductsAddEdit;
