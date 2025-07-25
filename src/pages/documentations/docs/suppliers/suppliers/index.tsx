import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const Supplier = () => {
  return (
    <div>
      <H2Title className="!mb-6 text-xl" title="მომწოდებელი" />
      <p className="">
        მომწოდებლების ფანჯრიდან საშუალება გვაქვს შევქმნათ მომწოდებლები, ხელშეკრულებები, ვაკონტროლოთ
        გადახდები და ვნახოთ დავალიანებები. მომწოდებლები რომელთაც აქვთ ფუდმარტთან ხელშეკრულება
        პროგრამაში ავტომატურად იქნება დამატებული.
      </p>
      <div>
        <p className="!mt-12 !mb-6">
          ამ ფანჯარაში შეგვიძლია მოვძებნოთ ფუდმარტის ან და ჩვენ მიერ შექმნილი მომწოდებლები, ვნახოთ
          მათი ხელშეკრულებები და შემოტანები. მომწოდებლის მოძიება შეგვიძლია, როგორც დასახელებით,
          ასევე საიდენტიფიკაციო კოდით. სასურველი მომწოდებლის არჩევის შემდეგ მარჯვენა ფანჯარაში
          გამოგვიჩნდება ამ მომწოდებლის ხელშეკრულებები და შემოტანები:
        </p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-table.png"
          preview={false}
        />
      </div>

      <div className="!mt-16">
        <p className="!my-6">
          ამ ფანჯარაში მოცემულია მომწოდებლის ხელშეკრულებები და ამ ხელშეკრულებები პირობები.
          მითითებულია ხელშეკრულების ნომერი, დასახელება, გადახდის და პირობის დაწყების თარიღები,
          პირობა და არის თუ არა ეს ხელშეკრულება აქტიური (ACTIVE ში 0 ნიშნავს რომ ხელშეკრულება არის
          არააქტიური ხოლო 1 ნიშნავს რომ არის აქტიური) ნებისმიერი ხელშეკრულების არჩევის შემდეგ
          გამოგვიჩნდება ამ ხელშეკრულების პირობები.
        </p>
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-types.png"
          preview={false}
        />
        <p className="!mt-3">
          მოდით შევქმნათ ხელშეკრულება შემდეგი პირობებით : გადახდა უნდა მოხდეს ყოველი კვირის
          ხუთშაბათს, რეალიზაციების მიხედვით, ანუ უფრო ზუსტად რასაც გავყიდით ერთი კვირის განმავლობაში
          უნდა გადავიხადოთ შემდეგი კვირის ხუთშაბათ დღეს. <br />
          <br />
          ავირჩიოთ „კვირის დღეებით“, კვირის დღეებიდან მოვნიშნოთ ხუთშაბათი, (ინტერვალი რჩება 01)
          ბუფერულ პერიოდში ვწერთ ნოლს, პირობაში ვირჩევთ „გაყიდვებით“. ამ ხელშეკრულებას უნდა
          მივანიჭოთ ნომერი, ნომერი შეგვიძლია მივანიჭოთ ნებისმიერი ციფრების კომბინაცია თუმცა უნდა
          გავითვალისწინოთ, რომ არ უნდა ემთხვეოდეს სხვა ხელშეკრულების ნომერს, დასახელებაში უნდა
          ჩავწეროთ რა ერქმევა ამ პირობას მაგ. „მომწოდებელთან შეთანხმება“ ან „საქონლის შეძენის
          შეთანხმება“ შესაძლოა იყოს რაიმე კონკრეტული შეთანხმება მაგალითად „საკონდიტრო საქონლის
          შეძენის შეთანხმება“. <br /> <br /> შესაძლოა ერთ მომწოდებელს ქონდეს რამდენიმე დანაყოფი:
          რძის ნაწარმი, ხორცეული , საკონდიტრო პროდუქციები. დავუშვათ, რომ ამ მომწოდებლის ყველა
          დანაყოფიდან შემოგვაქვს პროდუქცია, მაგრამ ამ დანაყოფებს სხვადასხვა გადახდის გრაფიკი აქვთ,
          ამ შემთხვევაში მოგვიწევს ცალ-ცალკე ხელშეკრულების შექმნა და ამ პროდუქციების შესაბამისი
          ხელშეკრულებებით მიღება, რადგან პროგრამამ სწორად შეძლოს დათვლა თუ რომელი დანაყოფისთვის რა
          თანხა გვექნება გადასახდელი. <br /> თუ სამივე დანაყოფის ხელშეკრულებებს დავარქმევთ ერთსა და
          იმავე სახელს გაგვიჭირდება მათი განსხვავება, ამიტომ უკეთესი იქნება, რომ მივუთითოთ ჩვენთვის
          გასაგები, კონკრეტული დასახელებები. ავირჩიოთ ამ ხელშეკრულების დაწყების თარიღი(ზედნადებები
          თუ უკვე ატვირთულია ,რომელიც ამ ხელშეკრულებას უნდა მივაბათ, ავირჩიოთ წინა პერიოდი ).
          მოვნიშნოთ აქტიური რადგან ხელშეკრულება გააქტიურდეს, გვიჩვენოს მიღების დროს და პროგრამამ
          დაითვალოს დავალიანებები. ბოლოს დავაჭიროთ პირობის შექმნას. უნდა გავითვალისწინოთ, რომ
          მსგავსი ხელშეკრულებები უნდა შევქმნათ იმ შემთხვევაში თუ ჩვენ პირადად გვაქვს მომწოდებელთან
          შეთანხმება, თუ მომწოდებელს ხელშეკრულება აქვს ფუდმარტთან ამ შემთხვევაში ხელშეკრულებები უკვე
          შექმნილი იქნება მომწოდებელზე და ჩვენ მის ჩასწორებას ვერ შევძლებთ. ჩვენი შექმნილი
          ხელშეკრულებები იქნება მხოლოდ ლოკალურად, ანუ ჩვენს ბაზაში და ვერცერთი სხვა ფრანჩაიზი და
          ვერც ფუდმარტი მას ვერ დაინახავს. არ იმოქმედებს არც ფუდმარტის ბონუს სისტემა და არც
          მომწოდებლის ქეშბექები. <br /> <br /> ანალოგიურად უნდა მოვიქცეთ თუ გვინდა ყოველთვიური
          ხელშეკრულების შექმნა:
        </p>

        <p className="!mt-3">
          ავირჩიოთ „ყოველთვიურად“, მოვნიშნოთ გადახდის დღე, ავირჩიოთ გადახდის რიცხვი. ყოველთვიური
          გადახდა არ ხდება კონკრეტული რიცხვში, ხდება კონკრეტულ კვირის დღეს, შესაბამისად თუ კვირის
          დღეში ავირჩევთ ხუთშაბათს ხოლო გადახდის რიცხვში ჩავწერთ 22, გადახდას გვიჩვენებს შემდეგი
          თვის 22 რიცხვის შემდეგ ხუთშაბათ, პირობითად, რასაც გავყიდით ნოემბრის თვეში გადახდა
          მოგვიწევს დეკემბრის 22 რიცხვის შემდეგ პირველ ხუთშაბათს, 22 დეკემბერი არის პარასკევი ხოლო
          შემდეგი ხუთშაბათი გამოდის 28 დეკემბერი, ამიტომ ნოემბრის თვეში გაყიდულს გადავიხდით 28
          დეკემბერს. ბუფერული პერიოდი არის საშეღავათო პერიოდი, ანუ ამ ხელშეკრულებაში თუ ბუფერულ
          პერიოდში ჩავწერთ 14-ს გადახდის დღე გადაიწევს 14 დღით, აქედან გამომდინარე ნოემბერში
          გაყიდული პროდუქციის ვალს გადავიხდით არა 28 დეკემბერს არამედ 11 იანვარს.(მოცემული
          მაგალითებისთვის გამოყენებულია 2023 წლის კალენდარი). მივუთითოთ ხელშეკრულების ნომერი,
          დასახელება, დაწყების თარიღი, მოვნიშნოთ აქტიური და დავაჭიროთ პირობის შექმნას.პირობა
          შესაძლებელია იყოს, როგორც რეალიზაციებით ასევე შესყიდვებით, თუ არის გაყიდვებით, პროგრამა
          დაითვლის ხელშეკრულებაში მითითებულ პერიოდის გაყიდვებს და გვიჩვენებს დავალიანების ფანჯარაში,
          ხოლო მიღებების შემთხევაში დაითვლის მითითებული პერიოდში მიღებების თანხას და ანალოგიურად
          გვაჩვენებს დავალიანებებში. არსებულ მომწოდებელზე უკვე შეიქმნა პირობა. ცხადია, რომ მსგავსი
          პირობის შექმნამდე უნდა შევუთანხმდეთ მომწოდებელს და მხოლოდ ამის შემდეგ უნდა შევქმნათ
          პროგრამაში ხელშეკრულება. პირობის შექმნის შემდეგ აუცილებელია, რომ მიღება მოხდეს ამ
          კონკრეტული ხელშეკრულებით, სხვა შემთხვევაში დავალიანება იქნება არასწორად დათვლილი,
          ყველაფერი რასაც ამ ხელშეკრულების მიხედვით გავაკეთებთ იქნება ეს მიღება თუ გადახდა უნდა
          გატარდეს პროგრამაში.
        </p>

        <p className="!mt-6">
          ამ ფანჯარაში შეგვიძლია ვნახოთ მომწოდებლების სრული და კონკრეტული ხელშეკრულების მიხედვით
          შემოტანების ჯამი თანხობრივად:
        </p>
        <Image
          className="!my-3"
          src="https://megaplus.vercel.app/assets/images/docs/suppliers-contract.png"
          preview={false}
        />

        <p>
          ავირჩიოთ მომწოდებელი რის შემდეგაც „შემოტანები სრული“ - ში დაჯამდება ამ მომწოდებლის ყველა
          შემოტანა. თუ ავირჩევთ კონკრეტულ ხელშეკრულებას „შემოტანები ხელშეკრულებით“ გვაჩვენებს მხოლოდ
          ამ ხელშეკრულებით მიღებული პროდუქციების თანხობრივ ჯამს. უნდა გავითვალისწინოთ, რომ ამ თანხა
          დაანგარიშებულია უკან დაბრუნების ჩათვლით, ამ თანხას უკვე დაკლებული აქვს უკან დაბრუნება.
          ასევე დაჯამებულია მომწოდებლის პროდუქციების სრული და ასევე ხელშეკრულების მიხედვით
          რეალიზაცია. ეს ყველაფერი შეგვიძლია ვნახოთ თარიღის მიხედვითაც, ავირჩიოთ სასურველი დაწყების
          და დასრულების თარიღი, ავირჩიოთ მომწოდებელი და გვაჩვენებს მითითებული პერიოდის რეალიზაციებს.
        </p>

      </div>
    </div>
  );
};

export default Supplier;
