import { type FC } from 'react';
import type { Tariff } from '../../tariffs.types';
import { useTranslation } from 'react-i18next';

const Nomenclature: FC<{ tariff: Tariff }> = ({ tariff }) => {
  const { t } = useTranslation('tariffs');
  return (
    <div className="!mt-10 flex items-center justify-between">
      <div className="nomenclature-quantity-key text-sm text-center font-medium text-gray-700 dark:text-[var(--white-gray)]">
        {t('nomenclature-quantity-key')}:
      </div>

      {tariff.badge && (
        <div className="nomenclature-quantity-value mt-1 text-center text-sm font-bold text-green-600">{tariff.badge}</div>
      )}
    </div>
  );
};

export default Nomenclature;
