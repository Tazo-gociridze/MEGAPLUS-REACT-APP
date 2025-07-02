import { useTranslation } from 'react-i18next';
import type { Tariff } from './tariffs.types';
import { useState } from 'react';

const useTariffsLogic = () => {
  const { t } = useTranslation('tariffs');

  const tariffs: Tariff[] = [
    {
      name: t("tariff-super"),
      price: '150₾',
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
      name: t("tariff-extra"),
      price: '118₾',
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
      name: t("tariff-mini"),
      price: '59₾',
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
