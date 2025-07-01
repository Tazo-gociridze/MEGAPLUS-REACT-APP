import { useState } from 'react';
import { Card, Collapse, Row, Col, Modal } from 'antd';
import H2Title from '../../../../utils/h2title';
import { IoIosArrowDown } from 'react-icons/io';
import { tariffs } from './tariffs-data';

const { Panel } = Collapse;

const Tariffs = () => {
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

  return (
    <div className="!mt-[100px]">
      <H2Title id="tariffs" title="ტარიფები" className="!mb-[40px]" />
      <p className="!mb-[40px] text-xl text-green-900">
        ფასი არის ყოველთვიური და მოიცავს მომსახურებასაც. თანხები მოცემულია დღგ-ს ჩათვლით!
      </p>
      <Row gutter={[24, 24]}>
        {tariffs.map((tariff, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className={`rounded-2xl !p-3 shadow-md !border-b-[5px] !border-b-solid !border-b-red-500 ${
                tariff.highlight ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <div className="!mb-6 flex items-center justify-between">
                <span className="text-2xl">{tariff.name}</span>
                <button className="fancy-order-button" onClick={showModal}>
                  შეკვეთა
                </button>
              </div>
              <div className="!mb-6 h-[1px] w-full bg-[#0000002a]"></div>

              <div className="!mb-6 flex items-center justify-between gap-y-3">
                <div className="mb-2 text-center text-3xl font-bold text-green-700">{tariff.price}</div>

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

              <div className="!mb-6 text-center text-sm text-gray-500">დამატებითი ლიცენზია 50ლ</div>

              <Collapse
                ghost
                activeKey={activePanels[index]}
                onChange={(keys) => {
                  const updatedPanels = [...activePanels];
                  updatedPanels[index] = Array.isArray(keys) ? keys : [keys];
                  setActivePanels(updatedPanels);
                }}
              >
                {tariff.features.map((feature, i) => (
                  <Panel header={feature.title} key={i.toString()}>
                    {feature.description.map((item) => (
                      <p
                        key={item.name}
                        className={`!mb-4 select-none ${
                          item.active ? 'text-green-600' : 'text-red-500 line-through'
                        }`}
                      >
                        {item.name}
                      </p>
                    ))}
                  </Panel>
                ))}
              </Collapse>

              <div className="!mt-10 flex items-center justify-between">
                <div className="text-md text-center font-medium text-gray-700">
                  ნომენკლატურის რაოდენობა:
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
        <div className="space-y-4 text-lg !p-5 text-gray-800 ">
          <span className='!mb'>დაგვიკავშირდით</span>
          <div className='!mb-4 !mt-6 flex items-center gap-x-4'>
            📞 <strong>ტელ:</strong>
            <a href="tel:+995599123456" className="!text-red-600 hover:!underline ">
              +995 592 00 32 32
            </a>
          </div>
          <div>
            📧  <strong>ელ.ფოსტა:</strong>{' '}
            <a href="mailto:support@example.com" className="!text-red-600 hover:!underline">
              INFO@MEGAPLUS.GE
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tariffs;
