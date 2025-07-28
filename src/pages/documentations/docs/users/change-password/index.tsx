import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const ChangePassword = () => {
  return (
    <div>
      <H2Title className="!mb-6 text-xl" title="პაროლის შეცვლა" />
      <div>
        <p>
          პაროლის ცვლილებისთვის უნდა ავირჩიოთ მომხმარებელი რომლის პაროლის შეცვლაც გვინდა. დავაჭიროთ
          ღილაკს მარჯვენა მხარეს{' '}
          <Image
            className="inline-block align-middle"
            src="https://megaplus.vercel.app/assets/images/docs/users-password-change.png"
            preview={false}
          />
        </p>
        <Image
          className="!my-4"
          src="https://megaplus.vercel.app/assets/images/docs/users-password-change-input.png"
          preview={false}
        />
        <p>
          შევიყვანოთ ახალი პაროლი დავამოწმოთ (მეორე ველშიც ვწერთ ახალ პაროლს) და დავაჭიროთ{' '}
          <Image
            className="inline-block align-middle"
            src="https://megaplus.vercel.app/assets/images/docs/users-password-saved.png"
            preview={false}
          />
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
