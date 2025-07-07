import type { FC } from 'react';
import type { Tariff } from '../../tariffs.types';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

interface PricePropsTypes {
  tariff: Tariff;
  toggleAllPanels: (index: number) => void;
  index: number;
  activePanels: string[][];
}

const Price: FC<PricePropsTypes> = ({ toggleAllPanels, tariff, index, activePanels }) => {
  const { t } = useTranslation('tariffs');
  return (
    <>
      <div className="!mb-6 flex items-center justify-between gap-y-3">
        <div className="mb-2 text-center text-3xl font-bold text-green-700">{tariff.price}</div>

        <div
          className="cursor-pointer rounded bg-[#ef4444] !p-2 transition hover:opacity-80"
          onClick={() => toggleAllPanels(index)}
        >
          <IoIosArrowDown
            className={`text-2xl text-white transition-transform duration-300 ${
              activePanels[index].length === 0 ? '' : 'rotate-180'
            }`}
          />
        </div>
      </div>

      <div className="!mb-6 text-center text-sm text-gray-500 dark:text-[var(--white-gray)]">
        {t('additional-license-text')}
      </div>
    </>
  );
};

export default Price;
