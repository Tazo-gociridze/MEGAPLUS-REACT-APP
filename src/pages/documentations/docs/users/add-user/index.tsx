import H2Title from '@/utils/h2title';
import { Image } from 'antd';
import { userFields, userRoles } from './data';

const AddUser = () => {
  return (
    <div>
      <H2Title className="!mb-6 text-xl" title="მომხმარებლები" />
      <div>
        <p>
          მომხმარებლების ფანჯრიდან შეგვიძლია შევქმნათ იუზერები ჩვენი თანამშრომლებისთვის. ამ
          ფანჯარაში შესვლისას გამოგვიჩნდება არსებული მომხმარებლები შესაბამისი უფლებებით.
        </p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/users-table.png"
          preview={false}
        />
        <p>მომხმარებლის შესაქმნელად ფანჯრის მარჯვენა მხარეს დავაჭიროთ:</p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/users-add-btn.png"
          preview={false}
        />
      </div>

      <div className="!mt-8">
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/users-get-back.png"
          preview={false}
        />
        <ul className="!mt-4 list-disc !pl-5 *:!mt-3">
          {userFields.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="!mt-8">
        <p>ავირჩიოთ ობიექტი რომელ ობიექტზეც ვამატებთ მოცემულ იუზერს და ავირჩიოთ დონე:</p>
        <ul className='list-disc !pl-5 *:!mt-3 !my-4'>
          {userRoles.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - {item.description}
            </li>
          ))}
        </ul>
        <p>
          დავაჭიროთ{' '}
          <Image
            className="inline-block align-middle"
            src="https://megaplus.vercel.app/assets/images/users-save-btn.png"
            preview={false}
          />{' '}
          რის შემდეგაც დაემატება მომხმარებელი.
        </p>
      </div>
    </div>
  );
};

export default AddUser;
