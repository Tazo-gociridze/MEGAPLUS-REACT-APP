import H2Title from '@/utils/h2title';
import { Image } from 'antd';
import { contractInfo, financialStatus, paymentInfo } from './data';

const Payments = () => {
  return (
    <div>
      <H2Title className="text-xl" title="გადახდები" />
      <div>
        <p className="!my-6">
          გადახდების მოდულში შეგვიძლია ვნახოთ მომწოდებლის ბუღალტრული(სრული) დავალიანება და
          ვაკონტროლოთ გადახდები. გადავიდეთ მომწოდებლებიდან გადახდების მოდულში : <br /> <br />{' '}
          გადახდებში ნაჩვენები მომწოდებლები არიან მხოლოდ აქტიური მომწოდებლები, რაც იმას ნიშნავს, რომ
          თუ მომწოდებელს არ აქვს ჩვენთან პროდუქცია შემოტანილი ამ ფანჯარაში არ გამოჩნდება. ამ
          ფანჯარაში ნაჩვენებია მომწოდებლების საიდენტიფიკაციო ნომერი დასახელება დამატებითი ინფორმაცია
          თუ გვაქვს მითითებული, საწყისი: გადახდების მოდულში გვაქვს დროის ფილტრაცია საიდანაც
          შეგვიძლია ვნახოთ პერიოდის მიხედვით ინფორმაცია მომწოდებლებზე, საწყისი არის თუ არჩეული
          პერიოდის დასაწყისში რა გვქონდა მომწოდებელთან ბალანსი.(სრული ვალი).
        </p>
      </div>
      <div>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-main-table.png"
          preview={false}
        />
      </div>
      <div>
        <ul className="!mt-4 list-disc space-y-2 !pl-5">
          {financialStatus.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="!mt-4">
          მომწოდებლის მოსაძიებლად შეგვიძლია გამოვიყენოთ როგორც დასახელება ასევე საიდენტიფიკაციო
          კოდი. ბალანსი არის სრული დავალიანება მომწოდებელთან და არ უნდა აგვერიოს ახლანდელ გადასახად
          თანხაში, ბალანსი გამოითვლება შემდეგნაირად: მიღებას აკლდება დაბრუნება და გადახდები, ხოლო
          მიღებული თანხა არის სრული ვალი. დავალიანება გამოითვლება ხელშეკრულებების პირობების
          მიხედვით, შესაძლოა მომწოდებელთან ბალანსში ეწეროს პირობითად 2000 ლარი, მაგრამ ახლანდელი
          მდგომარეობით არაფერი გვქონდეს გადასახდელი, რადგან როგორც ვთქვით დავალიანება გამოითვლება
          ხელშეკრულებაში მითითებული პერიოდებიდან გამომდინარე. მიმდინარე პერიოდის დავალიანებები ან
          გადასახდელი თანხები შეგვიძლია ვიხილოთ დავალიანების მოდულში. რაზეც შემდეგ თავში ვისაუბრებთ.
          მომწოდებელთან ანგარიშსწორება ანუ თანხის გადარიცხვა არ ხდება უშუალოდ პროგრამიდან, უნდა
          გადავრიცხოთ ბანკის მეშვეობით ან გადავუხადოთ ქეშად, მაგრამ აუცილებელია, რომ ყველა გადახდა
          ავსახოთ პროგრამაში.
        </p>
      </div>

      <div>
        <p className="!mt-12 !mb-6">
          მარჯვენა ფანჯარაში ნაჩვენებია თუ რა გადახდები გვაქვს განხორციელებული არჩეულ მომწოდებელზე,
          რა თანხის , ტიპის და რომელი ხელშეკრულების მიხედვით გვაქვს გადახდილი. გადახდის დაფიქსირების
          დროს აუცილებელია კომენტარში სწორად მივუთითოთ ხელშეკრულების ნომერი, წინააღმდეგ შემთხვევაში
          არ გამოაკლდება დავალიანებას ეს თანხა.
        </p>
      </div>
      <div>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-search-table.png"
          preview={false}
        />
      </div>
      <div>
        <p className="!mt-12 !mb-6">
          გადავიდეთ დავალიანების ფანჯარაში და ვნახოთ რომელ მომწოდებელთან რა თანხა გვაქვს
          გადასახდელი:
        </p>
      </div>
      <div>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-whole-page.png"
          preview={false}
        />
      </div>

      <div>
        <p className="!my-3">
          ავირჩიოთ კონკრეტული თარიღი რომელ დღესაც გვაინტერესებს რა გვაქვს გადასახადი ან რა გვქონდა
          და დავაჭიროთ
          <Image
            src="https://megaplus.vercel.app/assets/images/docs/refresh-arrows.png"
            preview={false}
            alt="refresh"
            width={34}
            height={34}
            className="inline-block align-middle"
          />
          <br />
          <strong> სრული ვალი</strong> - ითვლის მარტო ხელშეკრულების მიხედვით რა გვაქვს გადასახდელი,
          არ ითვალისწინებს ზედმეტ ან ნაკლებ გადახდებს. აუცილებელია რომ გვქონდეს მონიშნული.
        </p>
        <ul className="!mt-4 list-disc !space-y-4 !pl-5 text-sm leading-relaxed">
          {contractInfo.map((item, index) => (
            <li key={index}>
              <strong>{item.label}</strong> - {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="!mt-6 !mb-3">
          დავალიანების მოდულში, ძიებაში მოვფილტროთ ფუდმარტი და ვნახოთ დავალიანება:
        </p>

        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-main-table-top.png"
          preview={false}
        />
      </div>
      <div>
        <p className="!mt-6 !mb-3">
          როგორც ვხედავთ ფუდმარტთან პირველი ხელშეკრულების მიხედვით არ გვაქვს არაფერი გადასახდელი
          ხოლო მეორე ხელშეკრულების მიხედვით 314,70 გვაქვს გადასახდელი. გადახდის შემთხვევაში, როგორც
          აღვნიშნეთ პროგრამაში აუცილებელია, რომ გავატაროთ ეს გადახდა, პროგრამაში გატარების დროს
          აუცილებელია, რომ მივუთითოთ რომელი ხელშეკრულებით გადავიხადეთ თანხა, რადგან 314.70-ს
          გამოაკლდეს გადახდილი თანხა. დავაკლიკოთ „კოდი“- ში ჩაწერილ ხელშეკრულების ნომერს მაუსის
          მარცხენა ღილაკით და გადმოვიდეთ გადახდებში. როგორც ვხედავთ მომწოდებელი ავტომატურად
          მოგვიძებნა.
        </p>

        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-chosen-table.png"
          preview={false}
        />
      </div>
      <div>
        <p className="!mt-6 !mb-3">ახლა შევიყვანთ ინფორმაცია გადახდის შესახებ:</p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-bottom.png"
          preview={false}
        />
        <ul className="!mt-4 list-disc !space-y-4 !pl-5 text-sm leading-relaxed">
          {paymentInfo.map((item, index) => (
            <li key={index}>
              <strong>{item.label}</strong> - {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="!mt-12 !mb-3">
          დავაჭიროთ გადახდას ავირჩიოთ გადახდის თარიღი და გადახდა დაფიქსირებულია. მომწოდებელზე როგორც
          ბალანსიდან ასევე დავალიანებიდან გამოაკლდება ეს თანხა.
        </p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-small-table.png"
          preview={false}
        />
      </div>
      <div>
        <p className="!mt-6 !mb-2">როგორც ვხედავთ გადახდა დაფიქსირდა და დავალიანებაში გამოაკლდა.</p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-last-picture.png"
          preview={false}
        />
      </div>
    </div>
  );
};

export default Payments;
