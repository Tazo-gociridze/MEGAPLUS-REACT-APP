import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const ScalesPrinters = () => {
  return (
    <div>
      <div className="">
        <H2Title className="!mb-6 text-xl" title="SCALES - სასწორთან დაკავშირება." />
        <Image
          className="!my-3"
          src="https://megaplus.vercel.app/assets/images/docs/parameters-scale.png"
          preview={false}
        />
        <p>
          პროგრამის სასწორთან დასაკავშირებლად საჭიროა ვიცოდეთ სასწორის მოდელი და მოვნიშნოთ
          შესაბამისი უჯრა. <br />
          მხოლოდ SHTRIX-M -ის შემთხვევაში უნდა გავწეროთ სასწორის IPV4- მისამართი ცარიელ გრაფაში, თუ
          რამდენიმე სასწორი გვაქვს ამ შემთხვევაში გამოვყოფთ წერტილ მძიმით. <br />
        </p>
      </div>
      <H2Title
        className="!mb-6 text-xl"
        title="PRINTERS - სტანდარტული ან ჩამონათვალის პრინტერის დამატება"
      />
      <div>
        <div>
          <Image
            className="!mb-4"
            src="https://megaplus.vercel.app/assets/images/docs/parameters-printers.png"
            preview={false}
          />
          <p>
            პრინტერის დასამატებლად უნდა ჩამოვშალოთ „პროდუქცია“ (მეხუთე გრაფა), გამოჩნდება
            ჩამონათვალი და უნდა ავირჩიოთ პრინტერი რომლის დაკავშირებაც გვინდა. შემდეგ უნდა
            დავაკოპიროთ ამ პრინტერის დასახელება და ჩავაკოპიროთ როგორც „მზარეულის“ ასევე „მოლარე“ ს
            უჯრებში. DPI იში სტანდარტული პრინტერის შემთხვევაში უნდა ჩავწეროთ 600 ხოლო ჩამონათვალის
            პრინტერის შემთხვევაში 201 (სამივე შუ პატარა ფანჯრაში უნდა ჩავწეროთ 1.)
          </p>
        </div>

        <div>
          <p className="!my-4">საბოლოოდ გამოიყურება ასე :</p>
          <Image
            src="https://megaplus.vercel.app/assets/images/docs/parameters-printers-last.png"
            preview={false}
          />
          <p>
            ნებისმიერი პარამეტრის შეცვლის შემდეგ უნდა დავაჭიროთ პარამეტრების შენახვას და გამოვიდეთ
            პროგრამიდან. პროგრამიდან გამოსვლა აუცილებელია!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScalesPrinters;
