import { Card, Collapse, Row, Col, Modal } from 'antd';
import H2Title from '../../../../utils/h2title';
import { IoIosArrowDown } from 'react-icons/io';
import useTariffsLogic from './useTariffsLogic';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

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
              <div className="!mb-6 flex items-center justify-between">
                <span className="text-2xl dark:text-[var(--white-gray)]">{tariff.name}</span>
                <button className="fancy-order-button" onClick={showModal}>
                  {t('tariffs-btn')}
                </button>
              </div>
              <div className="!mb-6 h-[1px] w-full bg-[#0000002a]"></div>

              <div className="!mb-6 flex items-center justify-between gap-y-3">
                <div className="mb-2 text-center text-3xl font-bold text-green-700">
                  {tariff.price}
                </div>

                <div
                  className="cursor-pointer rounded bg-red-400 !p-2 transition hover:opacity-80"
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
              
              <Collapse
                ghost
                activeKey={activePanels[index]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined
                    rotate={isActive ? 90 : 0}
                    className="text-black transition-colors duration-300 dark:!text-white"
                  />
                )}
                onChange={(keys) => {
                  const updatedPanels = [...activePanels];
                  updatedPanels[index] = Array.isArray(keys) ? keys : [keys];
                  setActivePanels(updatedPanels);
                }}
              >
                {tariff.features.map((feature, i) => (
                  <Panel
                    header={<span className="dark:text-[var(--white-gray)]">{feature.title}</span>}
                    key={i.toString()}
                  >
                    {feature.description.map((item) => (
                      <p
                        key={item.name}
                        className={`!mb-4 ${item.active ? 'text-green-600' : 'text-red-500 line-through'}`}
                      >
                        {item.name}
                      </p>
                    ))}
                  </Panel>
                ))}
              </Collapse>

              <div className="!mt-10 flex items-center justify-between">
                <div className="text-md text-center font-medium text-gray-700 dark:text-[var(--white-gray)]">
                  {t('nomenclature-quantity-key')}:
                </div>

                {tariff.badge && (
                  <div className="mt-1 text-center text-lg font-bold text-green-600">
                    {tariff.badge}
                  </div>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal open={isModalOpen} onCancel={handleCancel} footer={null} centered>
        <div className="space-y-4 !p-5 text-lg text-gray-800">
          <span className="!mb">{t('tariffs-modal-title')}</span>
          <div className="!mt-6 !mb-4 flex items-center gap-x-4">
            📞
            <a href="tel:+995599123456" className="!text-red-600 hover:!underline">
              +995 592 00 32 32
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            📧{' '}
            <a href="mailto:INFO@MEGAPLUS.GE" className="!text-red-600 hover:!underline">
              INFO@MEGAPLUS.GE
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tariffs;
