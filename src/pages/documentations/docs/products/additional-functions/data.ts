type IconInfo = {
  src: string;
  width?: string | number;
  height?: string | number;
  description: string;
};

export const extraFunctionalityIcons: IconInfo[] = [
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/scale-icon.png',
    width: '55px',
    height: '40px',
    description:
      'სასწორზე გადაგზავნა , სასწორზე გადასაგზავნად აუცილებელია, რომ პროდუქციას ქონდეს შიდა კოდი და ერთეულში ეწეროს „კგ“ ან „ცალი“. არარის საჭირო კონკრეტული პროდუქციების მონიშვნა, ხატულაზე დაჭერისას ავტომატურად გადაიგზავნება ყველა წონის პროდუქცია.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/print-icon-img.png',
    description:
      'ეს ხატულა ფას მაჩვენებლების პრინტერიდან ამოღებაში გვეხმარება, საჭიროა მოვნიშნოთ(გავალურჯოთ) ყველა ის პროდუქცია რომლის ფასის ამოღებაც გვინდა.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/excel-icon.png',
    width: '55px',
    height: '40px',
    description:
      'ამ ხატულაზე დაჭერით შეგვიძლია, ყველა პროდუქცია , რომელიც მოფილტრული გვაქვს პროდუქციის ფანჯარაში , გადავიტანოთ ექსელის ფაილად. გადაყვება ყველა სახის ინფორმაცია რაც ჩანს პროდუქციაში.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/plus-icon.png',
    description:
      'მწვანე პლიუსზე დაჭერით პროგრამა ავტომატურად დაგვიგენერირებს 4 ნიშნა კოდს, რაც საჭიროა წონის პროდუქციებისთვის და ისეთი პროდუქციების გასატარებლად რომელთაც არ აქვთ შტრიხკოდი.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/C-icon.png',
    description: 'ასუფთავებს პროდუქციის შექმნისას პროდუქციაზე ინფორმაციის შესაყვან ველელბს.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/value-extrafunctionality-icon.png',
    description: 'თვითღირებულებასთან ერთად გამოაქვს პროდუქციების ჯამური გასაყიდი ფასი და მოგება.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/change-price-icon.png',
    width: 135,
    height: 40,
    description:
      'როდესაც ფასის ცვლილება მონიშნულია, პროდუქციის ფასი ვეღარ შეიცვლება და ვერ დაედება რეკომენდირებული ფასი, რეალურად ფასის ცვლილებით შეგვიძლია განვსაზღვროთ გვინდა თუ არა რეკომენდირებულ ფასებზე ყოფნა , თუ ფასის ცვლილება არ არის მონიშნული, პროდუქციას ავტომატურად დაედება რეკომენდირებული ფასი.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/activated-icon.png',
    description:
      'ამ გრაფის ამოშლა არ არის რეკომენდირებული, თუ ამოვნიშნავთ „აქტიური“ პროდუქცია იქნება არააქტიური და არ გამოგვიჩნდება პროდუქციის ფანჯარაში.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/see-all-icon.png',
    description: 'თუ მოვნიშნავთ გვაჩვენებს წაშლილ და ასევე არააქტიურ პროდუქციებსაც.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/hide-icon.png',
    description: 'დამალავს ისეთ პროდუქციებს რომელიც პროგრამულად არ გვაქვს ნაშთზე.',
  },
  {
    src: 'https://megaplus.vercel.app/assets/images/docs/delete-icon.png',
    description:
      'პროდუქციის წაშლა, ჭირდება დადასტურება ანუ მარჯვნივ მდებარე კვადრატის მონიშვნა. წაშლილი პროდუქცია შეგვიძლია უკან დავაბრუნოთ, „აქტიური“-ს მონიშვნით.',
  },
];
