import { useTranslation } from 'react-i18next';
import type { Tariff } from './tariffs.types';
import { useState } from 'react';

const useTariffsLogic = () => {
  const { t } = useTranslation('tariffs');

  const tariffs: Tariff[] = [
    {
      name: t('tariff-super'),
      price: '150₾',
      features: [
        {
          title: t('main-modules'),
          description: [
            { name: t('cash-register-standard'), active: true },
            { name: t('cash-register-food'), active: true },
            { name: t('purchase-rs'), active: true },
            { name: t('return-rs'), active: true },
            { name: t('product-writeoff'), active: true },
            { name: t('cash-management'), active: true },
            { name: t('stock-management'), active: true },
            { name: t('warehouse-management'), active: true },
            { name: t('category-management'), active: true },
            { name: t('debt-management'), active: true },
            { name: t('contract-management'), active: true },
            { name: t('warehouse-transfer'), active: true },
            { name: t('staff-data-management'), active: true },
            { name: t('staff-function-management'), active: true },
          ],
        },
        {
          title: t('inventory'),
          description: [
            { name: t('inventory-by-group'), active: true },
            { name: t('inventory-by-supplier'), active: true },
            { name: t('inventory-by-list'), active: true },
            { name: t('inventory-android-module'), active: true },
          ],
        },
        {
          title: t('additional-modules'),
          description: [
            { name: t('cash-book'), active: true },
            { name: t('promo-management'), active: true },
            { name: t('auto-backup'), active: true },
            { name: t('accumulation-module'), active: true },
            { name: t('loyalty-module'), active: true },
            { name: t('autonomous-cash-register'), active: true },
            { name: t('auto-orders'), active: true },
            { name: t('calculation-production'), active: true },
            { name: t('product-conversion'), active: true },
            { name: t('hourly-discounts'), active: true },
          ],
        },
        {
          title: t('reports'),
          description: [
            { name: t('purchase-reports'), active: true },
            { name: t('sales-reports'), active: true },
            { name: t('goods-movement-report'), active: true },
            { name: t('invoiced-sales'), active: true },
          ],
        },
        {
          title: t('integration'),
          description: [
            { name: t('bog-import-xlsx'), active: true },
            { name: t('tbc-import-xlsx'), active: true },
            { name: t('tbc-integration'), active: true },
            { name: t('cash-register-integration'), active: true },
            { name: t('bank-terminal-integration'), active: true },
            { name: t('smart-scale-integration'), active: true },
            { name: t('barcode-scanner-integration'), active: true },
            { name: t('list-printer-integration'), active: true },
          ],
        },
      ],
      badge: t('nomenclature-quantity-value'),
      highlight: true,
    },

    {
      name: t('tariff-extra'),
      price: '118₾',
      features: [
        {
          title: t('main-modules'),
          description: [
            { name: t('cash-register-standard'), active: true },
            { name: t('cash-register-food'), active: false },
            { name: t('purchase-rs'), active: true },
            { name: t('return-rs'), active: true },
            { name: t('product-writeoff'), active: true },
            { name: t('cash-management'), active: true },
            { name: t('stock-management'), active: true },
            { name: t('warehouse-management'), active: false },
            { name: t('category-management'), active: true },
            { name: t('debt-management'), active: true },
            { name: t('contract-management'), active: false },
            { name: t('warehouse-transfer'), active: false },
            { name: t('staff-data-management'), active: true },
            { name: t('staff-function-management'), active: true },
          ],
        },
        {
          title: t('inventory'),
          description: [
            { name: t('inventory-by-group'), active: true },
            { name: t('inventory-by-supplier'), active: true },
            { name: t('inventory-by-list'), active: true },
            { name: t('inventory-android-module'), active: true },
          ],
        },
        {
          title: t('additional-modules'),
          description: [
            { name: t('cash-book'), active: true },
            { name: t('promo-management'), active: true },
            { name: t('auto-backup'), active: true },
            { name: t('accumulation-module'), active: true },
            { name: t('loyalty-module'), active: true },
            { name: t('autonomous-cash-register'), active: true },
            { name: t('auto-orders'), active: true },
            { name: t('calculation-production'), active: false },
            { name: t('product-conversion'), active: true },
            { name: t('hourly-discounts'), active: true },
          ],
        },
        {
          title: t('reports'),
          description: [
            { name: t('purchase-reports'), active: true },
            { name: t('sales-reports'), active: true },
            { name: t('goods-movement-report'), active: true },
            { name: t('invoiced-sales'), active: true },
          ],
        },
        {
          title: t('integration'),
          description: [
            { name: t('bog-import-xlsx'), active: true },
            { name: t('tbc-import-xlsx'), active: true },
            { name: t('tbc-integration'), active: true },
            { name: t('cash-register-integration'), active: true },
            { name: t('bank-terminal-integration'), active: true },
            { name: t('smart-scale-integration'), active: true },
            { name: t('barcode-scanner-integration'), active: true },
            { name: t('list-printer-integration'), active: true },
          ],
        },
      ],
      badge: t('nomenclature-quantity-value'),
      highlight: false,
    },

    {
      name: t('tariff-mini'),
      price: '59₾',
      features: [
        {
          title: t('main-modules'),
          description: [
            { name: t('cash-register-standard'), active: true },
            { name: t('cash-register-food'), active: false },
            { name: t('purchase-rs'), active: true },
            { name: t('return-rs'), active: true },
            { name: t('product-writeoff'), active: true },
            { name: t('cash-management'), active: true },
            { name: t('stock-management'), active: true },
            { name: t('warehouse-management'), active: false },
            { name: t('category-management'), active: true },
            { name: t('debt-management'), active: true },
            { name: t('contract-management'), active: false },
            { name: t('warehouse-transfer'), active: false },
            { name: t('staff-data-management'), active: true },
            { name: t('staff-function-management'), active: true },
          ],
        },
        {
          title: t('inventory'),
          description: [
            { name: t('inventory-by-group'), active: true },
            { name: t('inventory-by-supplier'), active: true },
            { name: t('inventory-by-list'), active: true },
            { name: t('inventory-android-module'), active: false },
          ],
        },
        {
          title: t('additional-modules'),
          description: [
            { name: t('cash-book'), active: false },
            { name: t('promo-management'), active: true },
            { name: t('auto-backup'), active: true },
            { name: t('accumulation-module'), active: true },
            { name: t('loyalty-module'), active: true },
            { name: t('autonomous-cash-register'), active: true },
            { name: t('auto-orders'), active: true },
            { name: t('calculation-production'), active: true },
            { name: t('product-conversion'), active: true },
            { name: t('hourly-discounts'), active: true },
          ],
        },
        {
          title: t('reports'),
          description: [
            { name: t('purchase-reports'), active: true },
            { name: t('sales-reports'), active: true },
            { name: t('goods-movement-report'), active: true },
            { name: t('invoiced-sales'), active: true },
          ],
        },
        {
          title: t('integration'),
          description: [
            { name: t('bog-import-xlsx'), active: true },
            { name: t('tbc-import-xlsx'), active: true },
            { name: t('tbc-integration'), active: true },
            { name: t('cash-register-integration'), active: true },
            { name: t('bank-terminal-integration'), active: true },
            { name: t('smart-scale-integration'), active: false },
            { name: t('barcode-scanner-integration'), active: true },
            { name: t('list-printer-integration'), active: true },
          ],
        },
      ],
      badge: '1500',
      highlight: false,
    },
  ];

  const [activePanels, setActivePanels] = useState<string[][]>(
    tariffs.map((tariff) => tariff.features.map((_, i) => i.toString()))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAllPanels = (index: number) => {
    const isOpen = activePanels[index].length === tariffs[index].features.length;

    const newActivePanels = [...activePanels];
    newActivePanels[index] = isOpen ? [] : tariffs[index].features.map((_, i) => i.toString());
    setActivePanels(newActivePanels);
  };

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return {
    tariffs,
    isModalOpen,
    activePanels,
    setActivePanels,
    toggleAllPanels,
    showModal,
    handleCancel,
    t,
  };
};

export default useTariffsLogic;
