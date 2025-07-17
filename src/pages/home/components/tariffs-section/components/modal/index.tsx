import { Modal } from 'antd';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ContactModalPropsType {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const ContactModal: FC<ContactModalPropsType> = ({ isModalOpen, handleCancel }) => {
  const { t } = useTranslation('tariffs');
  return (
    <Modal open={isModalOpen} onCancel={handleCancel} footer={null} centered>
      <div className="space-y-4 !p-5 text-lg text-gray-800">
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
    </Modal>
  );
};

export default ContactModal;
