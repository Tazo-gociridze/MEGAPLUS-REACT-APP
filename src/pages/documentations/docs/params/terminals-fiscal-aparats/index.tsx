import H2Title from '@/utils/h2title';
import { Image } from 'antd';
import { configSettings, mainSettingsList } from './data';

const TerminalsFiscalAparats = () => {
  return (
    <div>
      <H2Title className="text-xl" title="ძირითადი პარამეტრები" />
      <div>
        <p className="!my-4">
          პარამეტრების ფანჯრიდან შეგვიძლია დავაწესოთ შეზღუდვები. უნდა გავითვალისწინოთ, რომ ეს
          შეზღუდვები იმოქმედებს მხოლოდ იმ კომპიუტერზე რომელზეც ჩავრთავთ, შესაბამისად თუ გვინდა
          მოლარემ გატარებული პროდუქცია ვერ წაშალოს წაშლის კოდის გარეშე ამ შემთხვევაში ეს ფუნქცია
          უნდა გავააქტიუროთ მოლარის და არა მენეჯერის კომპიუტერზე. პარამეტრების ფანჯარაში გვხვდება
          რამდენიმე დანაყოფი. რომელსაც ვნახავთ სათითაოდ.
        </p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/parameters-window.png"
          preview={false}
        />
        <ul className="list-disc !pl-5 *:!mt-3">
          {mainSettingsList.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>
              {item.description && ` - ${item.description}`}
            </li>
          ))}
        </ul>
      </div>

      <div className="!mt-12">
        <div className="!my-4">
          <p className="!mb-3">
            სალარო აპარატის დასაკავშირებლად ამ გრაფაში უნდა მოვნიშნოთ სალარო აპარატის მოდელი. და
            გადავიდეთ par.1 ში
          </p>
          <Image
            src="https://megaplus.vercel.app/assets/images/docs/parametert-fiscals.png"
            preview={false}
          />
        </div>
        <div className="!my-4">
          <p className="!mb-3">
            Par. 1 -ში უნდა ავირჩიოთ გვინდა თუ არა, რომ სალარო აპარატიდან ამოვიდეს პროდუქციის
            ჩამონათვალი. ჩამონათვალის გამყოფი საჭიროა, რომ ჩამონათვალი ამოვიდეს უფრო გარკვევით და
            მეტი გამოტოვებით, რაც უფრო მეტ ქაღალდს მოითხოვს. უნდა ავირჩიოთ COM - რომელ კომზე არის
            სალარო აპარატი კომპიუტერში და ასევე ბაუნდრეითი, რომელიც მხოლოდ დატექსზე გვხვდება 115200
            დანარჩენ სტანდარტულს სალარო აპარატებზე 9600 დავტოვოთ.
          </p>
          <Image
            src="https://megaplus.vercel.app/assets/images/docs/parameters-par.1.png"
            preview={false}
          />
        </div>
        <div className="!my-4">
          <p className="!mb-3">
            Par. 2 დან შეგვიძლია ამოვიღოთ დეტალური ჩეკები. დავაჭიროთ Periodical Report ავირჩიოთ
            თარიღი რომელი პერიოდის დეტალური რეპორტი გვჭირდება, რის შემდეგაც სალარო აპარატის დაიწყებს
            ჩეკის ამოღებას, სადაც სათითაოდ იქნება ამობეჭდილი ყველა , მითითებულ პერიოდში, გატარებული
            ჩეკები. ეს გვჭირდება როდესაც პროგრამა და ზეტ რეპორტი არ ედრება ერთმანეთს, პროგრამაში
            ყველა გატარება სათითაოდ არის ნაჩვენები, დეტალურის ამოღების შემდეგ შეგვიძლია შევადაროთ
            ზეტი პროგრამას და ვნახოთ რომელ ჩეკში გვაქვს სხვაობა. გადავიდეთ par.1 ში
          </p>
          <Image
            src="https://megaplus.vercel.app/assets/images/docs/parameters-par.2.png"
            preview={false}
          />
        </div>
      </div>

      <H2Title className="!mb-6 text-xl" title="CONFIG გაფართოებული პარამეტრები" />
      <div>
        <p>ტერმინალის ინტეგრაცია:</p>
        <Image
          className="!my-3"
          src="https://megaplus.vercel.app/assets/images/docs/parameters-config.png"
          preview={false}
        />
        <p>
          პროგრამაში, მომწოდებლების ფანჯარაში, გადახდის დაფიქსირების დროს, როდესაც გადახდის მეთოდს
          ვირჩევთ, შეგვიძლია დავამატოთ ჩვენი ანგარიშის ნომრები იმისთვის, რომ დავაზუსტოთ რომელი
          ანგარიშიდან მოხდა გადახდა. სურათში პირველივე ზოლში უნდა ჩავწეროთ ანგარიშის ნომერი და
          დაემატება გადახდის ფანჯარაში, თუ რამდენიმე ბანკის ანგარიშის ნომრის ჩაწერა გვინდა
          ანგარიშების ერთმანეთისგან უნდა გამოვყოთ წერტილ მძიმის მეშვეობით.
        </p>
        <ul className="list-disc !pl-5 *:!mt-3">
          {configSettings.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>
              {item.description && ` - ${item.description}`}
            </li>
          ))}
        </ul>
      </div>

      <div className="!mt-12">
        <p>SCALES - სასწორთან დაკავშირება.</p>
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
    </div>
  );
};

export default TerminalsFiscalAparats;
