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
      {
        title: 'ძირითადი მოდულები',
        description: [
          { name: 'სტანდარტული სალაროს მოდული', active: true },
          { name: 'კვების ობიექტის სალაროს მოდული', active: true },
          { name: 'შესყიდვები RS-ს მეშვეობით', active: true },
          { name: 'დაბრუნება RS-ს მეშვეობით', active: true },
          { name: 'პროდუქციის ჩამოწერა', active: true },
          { name: 'სალაროს მართვა', active: true },
          { name: 'ნაშთების მართვა', active: true },
          { name: 'საწყობების მართვა', active: true },
          { name: 'კატეგორიების მართვა', active: true },
          { name: 'დავალიანებების მართვა', active: true },
          { name: 'ხელშეკრულებების მართვა', active: true },
          { name: 'გადაადგილება საწყობებს შორის', active: true },
          { name: 'პერსონალის მონაცემების მართვა', active: true },
          { name: 'პერსონალის ფუნქციონალის მართვა', active: true },
        ],
      },
      {
        title: 'ინვენტარიზაცია',
        description: [
          { name: 'ინვენტარიზაცია ჯგუფით', active: true },
          { name: 'ინვენტარიზაცია მომწოდებლით', active: true },
          { name: 'ინვენტარიზაცია შედგენილი სიით', active: true },
          { name: 'ინვენტარიზაციის Android მოდული', active: true },
        ],
      },
      {
        title: 'დამხმარე მოდულები',
        description: [
          { name: 'სალაროს წიგნი', active: true },
          { name: 'აქციების მართვა', active: true },
          { name: 'ავტომატური ბექაფი', active: true },
          { name: 'დაგროვების მოდული', active: true },
          { name: 'ლოიალობის მოდული', active: true },
          { name: 'ავტონომიური სალარო', active: true },
          { name: 'ავტომატური შეკვეთები', active: true },
          { name: 'კალკულაცია და წარმოება', active: true },
          { name: 'პროდუქციის კონვერტაცია', active: true },
          { name: 'საათობრივი ფასდაკლებები', active: true },
        ],
      },
      {
        title: 'რეპორტები',
        description: [
          { name: 'შესყიდვების რეპორტები', active: true },
          { name: 'რეალიზაციის რეპორტები', active: true },
          { name: 'საქონლის მოძრაობის რეპორტი', active: true },
          { name: 'რეალიზაციები ზედნადებით', active: true },
        ],
      },
      {
        title: 'ინტეგრაცია',
        description: [
          { name: 'BOG იმპორტი (xlsx)', active: true },
          { name: 'TBC იმპორტი (xlsx)', active: true },
          { name: 'TBC იმპორტი (ინტეგრაცია)', active: true },
          { name: 'სალარო აპარატების ინტეგრაცია', active: true },
          { name: 'საბანკო ტერმინალის ინტეგრაცია', active: true },
          { name: 'ჭკვიანი სასწორების ინტეგრაცია', active: true },
          { name: 'შტრიხკოდის სკანერის ინტეგრაცია', active: true },
          { name: 'ჩამონათვალის პრინტერის ინტეგრაცია', active: true },
        ],
      },
    ],
    badge: 'შეუზღუდავი',
    highlight: true,
  },

  {
    name: 'ექსტრა',
    price: '118ლ',
    features: [
      {
        title: 'ძირითადი მოდულები',
        description: [
          { name: 'სტანდარტული სალაროს მოდული', active: true },
          { name: 'კვების ობიექტის სალაროს მოდული', active: false },
          { name: 'შესყიდვები RS-ს მეშვეობით', active: true },
          { name: 'დაბრუნება RS-ს მეშვეობით', active: true },
          { name: 'პროდუქციის ჩამოწერა', active: true },
          { name: 'სალაროს მართვა', active: true },
          { name: 'ნაშთების მართვა', active: true },
          { name: 'საწყობების მართვა', active: false },
          { name: 'კატეგორიების მართვა', active: true },
          { name: 'დავალიანებების მართვა', active: true },
          { name: 'ხელშეკრულებების მართვა', active: false },
          { name: 'გადაადგილება საწყობებს შორის', active: false },
          { name: 'პერსონალის მონაცემების მართვა', active: true },
          { name: 'პერსონალის ფუნქციონალის მართვა', active: true },
        ],
      },
      {
        title: 'ინვენტარიზაცია',
        description: [
          { name: 'ინვენტარიზაცია ჯგუფით', active: true },
          { name: 'ინვენტარიზაცია მომწოდებლით', active: true },
          { name: 'ინვენტარიზაცია შედგენილი სიით', active: true },
          { name: 'ინვენტარიზაციის Android მოდული', active: true },
        ],
      },
      {
        title: 'დამხმარე მოდულები',
        description: [
          { name: 'სალაროს წიგნი', active: true },
          { name: 'აქციების მართვა', active: true },
          { name: 'ავტომატური ბექაფი', active: true },
          { name: 'დაგროვების მოდული', active: true },
          { name: 'ლოიალობის მოდული', active: true },
          { name: 'ავტონომიური სალარო', active: true },
          { name: 'ავტომატური შეკვეთები', active: true },
          { name: 'კალკულაცია და წარმოება', active: false },
          { name: 'პროდუქციის კონვერტაცია', active: true },
          { name: 'საათობრივი ფასდაკლებები', active: true },
        ],
      },
      {
        title: 'რეპორტები',
        description: [
          { name: 'შესყიდვების რეპორტები', active: true },
          { name: 'რეალიზაციის რეპორტები', active: true },
          { name: 'საქონლის მოძრაობის რეპორტი', active: true },
          { name: 'რეალიზაციები ზედნადებით', active: true },
        ],
      },
      {
        title: 'ინტეგრაცია',
        description: [
          { name: 'BOG იმპორტი (xlsx)', active: true },
          { name: 'TBC იმპორტი (xlsx)', active: true },
          { name: 'TBC იმპორტი (ინტეგრაცია)', active: true },
          { name: 'სალარო აპარატების ინტეგრაცია', active: true },
          { name: 'საბანკო ტერმინალის ინტეგრაცია', active: true },
          { name: 'ჭკვიანი სასწორების ინტეგრაცია', active: true },
          { name: 'შტრიხკოდის სკანერის ინტეგრაცია', active: true },
          { name: 'ჩამონათვალის პრინტერის ინტეგრაცია', active: true },
        ],
      },
    ],
    badge: 'შეუზღუდავი',
    highlight: false,
  },

  {
    name: 'ბეისიქი',
    price: '50ლ',
    features: [
      {
        title: 'ძირითადი მოდულები',
        description: [
          { name: 'სტანდარტული სალაროს მოდული', active: true },
          { name: 'კვების ობიექტის სალაროს მოდული', active: false },
          { name: 'შესყიდვები RS-ს მეშვეობით', active: true },
          { name: 'დაბრუნება RS-ს მეშვეობით', active: true },
          { name: 'პროდუქციის ჩამოწერა', active: true },
          { name: 'სალაროს მართვა', active: true },
          { name: 'ნაშთების მართვა', active: true },
          { name: 'საწყობების მართვა', active: false },
          { name: 'კატეგორიების მართვა', active: true },
          { name: 'დავალიანებების მართვა', active: true },
          { name: 'ხელშეკრულებების მართვა', active: false },
          { name: 'გადაადგილება საწყობებს შორის', active: false },
          { name: 'პერსონალის მონაცემების მართვა', active: true },
          { name: 'პერსონალის ფუნქციონალის მართვა', active: true },
        ],
      },
      {
        title: 'ინვენტარიზაცია',
        description: [
          { name: 'ინვენტარიზაცია ჯგუფით', active: true },
          { name: 'ინვენტარიზაცია მომწოდებლით', active: true },
          { name: 'ინვენტარიზაცია შედგენილი სიით', active: true },
          { name: 'ინვენტარიზაციის Android მოდული', active: false },
        ],
      },
      {
        title: 'დამხმარე მოდულები',
        description: [
          { name: 'სალაროს წიგნი', active: false },
          { name: 'აქციების მართვა', active: true },
          { name: 'ავტომატური ბექაფი', active: true },
          { name: 'დაგროვების მოდული', active: true },
          { name: 'ლოიალობის მოდული', active: true },
          { name: 'ავტონომიური სალარო', active: true },
          { name: 'ავტომატური შეკვეთები', active: true },
          { name: 'კალკულაცია და წარმოება', active: true },
          { name: 'პროდუქციის კონვერტაცია', active: true },
          { name: 'საათობრივი ფასდაკლებები', active: true },
        ],
      },
      {
        title: 'რეპორტები',
        description: [
          { name: 'შესყიდვების რეპორტები', active: true },
          { name: 'რეალიზაციის რეპორტები', active: true },
          { name: 'საქონლის მოძრაობის რეპორტი', active: true },
          { name: 'რეალიზაციები ზედნადებით', active: true },
        ],
      },
      {
        title: 'ინტეგრაცია',
        description: [
          { name: 'BOG იმპორტი (xlsx)', active: true },
          { name: 'TBC იმპორტი (xlsx)', active: true },
          { name: 'TBC იმპორტი (ინტეგრაცია)', active: true },
          { name: 'სალარო აპარატების ინტეგრაცია', active: true },
          { name: 'საბანკო ტერმინალის ინტეგრაცია', active: true },
          { name: 'ჭკვიანი სასწორების ინტეგრაცია', active: false },
          { name: 'შტრიხკოდის სკანერის ინტეგრაცია', active: true },
          { name: 'ჩამონათვალის პრინტერის ინტეგრაცია', active: true },
        ],
      },
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

              <div className="!mb-6 flex items-center justify-between gap-y-3">
                <div className="mb-2 text-center text-3xl font-bold text-green-700">
                  {tariff.price}
                </div>

                <div
                  className="cursor-pointer rounded bg-red-400 !p-2 transition hover:opacity-80"
                  onClick={() => toggleAllPanels(index)}
                >
                  <IoIosArrowDown
                    className={`text-2xl text-white transition-transform duration-300 ${activePanels[index].length === 0 ? '' : 'rotate-180'} `}
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
                        className={`!mb-4 select-none ${item.active ? 'text-green-600' : 'text-red-500 line-through'}`}
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
    </div>
  );
};

export default Tariffs;
