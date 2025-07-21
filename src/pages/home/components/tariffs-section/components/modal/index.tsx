import { Modal } from 'antd';
import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ContactModalPropsType {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const ContactModal: FC<ContactModalPropsType> = ({ isModalOpen, handleCancel }) => {
  const { t } = useTranslation('tariffs');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://megaplus.com.ge/email_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      const result = await response.text();
      setMessage(result);
    } catch (err) {
      console.error(err);
      setMessage('დაფიქსირდა შეცდომა. სცადე ხელახლა.');
    }
  };
  return (
    <Modal open={isModalOpen} onCancel={handleCancel} footer={null} centered>
      <div className="space-y-4 !p-5 text-lg text-gray-800">
        <div>
          <span className="!mb">{t('tariffs-modal-title')}</span>
          <div className="!mt-6 !mb-4 flex items-center gap-x-4">
            📞
            <a href="tel:+995599123456" className="!text-red-600 hover:!underline">
              +995 322-500-601
            </a>
          </div>
          <div className="!mt-6 !mb-4 flex items-center gap-x-4">
            📞
            <a href="tel:+995599123456" className="!text-red-600 hover:!underline">
              +995 322-344-425
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            📧{' '}
            <a href="mailto:info@megaplus.ge" className="!text-red-600 hover:!underline">
              info@megaplus.ge
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <p className="!mt-10 text-gray-600 dark:text-white text-sm">
            დაგვიტოვეთ ნომერი და ჩვენ დაგიკავშირდებით
          </p>
          <div className="!mt-5 grid grid-cols-1 gap-y-4 *:rounded-4xl *:border-[1px] *:border-[#665e5e49] *:!px-4 *:!py-2 text-sm">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="!mt-6 cursor-pointer rounded-4xl bg-red-500 !px-6 !py-2 font-medium text-sm text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-red-600 hover:shadow-md"
          >
            Submit
          </button>
          {message && <p className="mt-4 text-green-600 dark:text-white">{message}</p>}
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
