import { useTranslation } from 'react-i18next';
import type { Tariff } from '../../tariffs.types';
import type { FC } from 'react';

interface OrderBtnPropsTypes {
  tariff: Tariff;
  showModal: () => void;
}

const OrderBtn: FC<OrderBtnPropsTypes> = ({ tariff, showModal }) => {
  const { t } = useTranslation('tariffs');
  return (
    <>
      <div className="!mb-6 flex items-center justify-between">
        <span className="tariff-name text-2xl dark:text-[var(--white-gray)]">{tariff.name}</span>
        <button className="fancy-order-button text-[1rem]" onClick={showModal}>
          {t('tariffs-btn')}
        </button>
      </div>
      <div className="!mb-6 h-[1px] w-full bg-[#0000002a]"></div>
    </>
  );
};

export default OrderBtn;
