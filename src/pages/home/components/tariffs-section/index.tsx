import { useState } from 'react';
import { Card, Collapse, Row, Col } from 'antd';
import H2Title from '../../../../utils/h2title';
import { IoIosArrowDown } from 'react-icons/io';

const { Panel } = Collapse;

const tariffs = [
  {
    name: 'სუპერი',
    price: '150ლ',
    features: [
      { title: 'ძირითადი მოდულები', description: '...' },
      { title: 'ინვენტარიზაცია', description: '...' },
      { title: 'დამხმარე მოდულები', description: '...' },
      { title: 'რეპორტები', description: '...' },
      { title: 'ინტეგრაცია', description: '...' },
    ],
    badge: '1200',
    highlight: true,
  },
  {
    name: 'სტანდარტი',
    price: '118ლ',
    features: [
      { title: 'ძირითადი მოდულები', description: '...' },
      { title: 'ინვენტარიზაცია', description: '...' },
      { title: 'დამხმარე მოდულები', description: '...' },
      { title: 'რეპორტები', description: '...' },
      { title: 'ინტეგრაცია', description: '...' },
    ],
    badge: '1350',
    highlight: false,
  },
  {
    name: 'ბეისიკი',
    price: '50ლ',
    features: [
      { title: 'ძირითადი მოდულები', description: '...' },
      { title: 'ინვენტარიზაცია', description: '...' },
      { title: 'დამხმარე მოდულები', description: '...' },
      { title: 'რეპორტები', description: '...' },
      { title: 'ინტეგრაცია', description: '...' },
    ],
    badge: '1500',
    highlight: false,
  },
];

const Tariffs = () => {
  const [activePanels, setActivePanels] = useState<string[][]>(
    tariffs.map((tariff) => tariff.features.map((_, i) => i.toString()))
  );

  const toggleAllPanels = (index: number) => {
    const isOpen = activePanels[index].length === tariffs[index].features.length;

    const newActivePanels = [...activePanels];
    newActivePanels[index] = isOpen ? [] : tariffs[index].features.map((_, i) => i.toString());
    setActivePanels(newActivePanels);
  };

  return (
    <div className="!mt-[100px]">
      <H2Title title="ტარიფები" className="!mb-[80px]" />
      <Row gutter={[24, 24]}>
        {tariffs.map((tariff, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className={`rounded-2xl !p-3 shadow-md ${
                tariff.highlight ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <div className="!mb-6 flex items-center justify-between">
                <span className="text-2xl">{tariff.name}</span>
                <button className="fancy-order-button">შეკვეთა</button>
              </div>
              <div className="!mb-6 h-[1px] w-full bg-[#0000002a]"></div>

              <div className="flex items-center justify-between gap-y-3 !mb-6">
                <div className="mb-2 text-center text-3xl font-bold">{tariff.price}</div>

                <div
                  className="cursor-pointer rounded bg-red-400 !p-2 transition hover:opacity-80"
                  onClick={() => toggleAllPanels(index)}
                >
                  <IoIosArrowDown
                    className={`text-2xl text-white transition-transform  duration-300 ${activePanels[index].length === 0 ? '' : 'rotate-180'} `}
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
                    <p>{feature.description}</p>
                  </Panel>
                ))}
              </Collapse>

              <div className="!mt-10 flex items-center justify-between">
                <div className="text-center text-lg font-medium text-gray-700">
                  ნომენკლატურის რაოდენობა:
                </div>

                {tariff.badge && (
                  <div className="mt-1 text-center text-xl font-bold text-green-600">
                    {tariff.badge}
                  </div>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tariffs;
