import { Card, Row, Col } from 'antd';
import H2Title from '@/utils/h2title';
import useTariffsLogic from './useTariffsLogic';
import OrderBtn from './components/tariffs-btn';
import Price from './components/price';
import Nomenclature from './components/nomenclature-quantity';
import ContactModal from './components/modal';
import DropdownContent from './components/collapse';

const Tariffs = () => {
  const {
    tariffs,
    isModalOpen,
    activePanels,
    setActivePanels,
    toggleAllPanels,
    showModal,
    handleCancel,
    t,
  } = useTariffsLogic();

  return (
    <div className="!mt-[100px]">
      <H2Title id="tariffs" title={t('title')} className="!mb-[40px]" />
      <p className="!mb-[40px] text-xl text-green-900 dark:text-[var(--white-gray)]">
        {t('tariffs-text')}
      </p>
      <Row gutter={[24, 24]}>
        {tariffs.map((tariff, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className={`!border-b-solid rounded-2xl !border-b-[5px] border-gray-200 !border-b-red-500 !p-3 shadow-md dark:!border-gray-600 dark:!border-b-red-500 dark:!bg-[var(--dark-light-blue)]`}
            >
              <OrderBtn showModal={showModal} tariff={tariff} />

              <Price
                toggleAllPanels={toggleAllPanels}
                tariff={tariff}
                index={index}
                activePanels={activePanels}
              />

              <DropdownContent
                activePanels={activePanels}
                index={index}
                setActivePanels={setActivePanels}
                tariff={tariff}
              />

              <Nomenclature tariff={tariff} />
            </Card>
          </Col>
        ))}
      </Row>
      <ContactModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </div>
  );
};

export default Tariffs;
