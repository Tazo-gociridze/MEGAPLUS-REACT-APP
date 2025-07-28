import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const Realisation = () => {
  return (
    <div>
      <H2Title title="რეალიზაცია" className="!mb-6 text-xl" />

      <div>
        <Image
          className="!mb-3"
          src="https://megaplus.vercel.app/assets/images/docs/realization-window.png"
          preview={false}
        />
        <p>
          რეალიზაციის ფანჯრიდან შეგვიძლია გავყიდოთ პროდუქცია, რეალიზაციის ფანჯარა არის ის ერთადერთი
          მოდული რომელზეც მოლარეს აქვს წვდომა. პროგრამასთან შეგვიძლია დავაინტეგრიროთ სალარო აპარატი,
          ტერმინალები, ჩამონათვალის პრინტერი, როდესაც გავატარებთ სასურველ პროდუქციას გადავუშვებთ
          პროგრამულად რეალიზაციაში და ავტომატურად, ნაღდის შემთხვევაში გადაიტანს პირდაპირ სალარო
          აპარატზე ხოლო უნაღდოს შემთხვევაში გადაიტანს მითითებულ ტერმინალზე.
        </p>
      </div>

      <div className="!mt-12">
        <p>მოდით ვნახოთ რეალიზაციის ფანჯარა და გავერკვიოთ ფუნქციებში.</p>
        <Image
          className="!my-4"
          src="https://megaplus.vercel.app/assets/images/docs/realization-top.png"
          preview={false}
        />
        <p>
          არცხენა ზედა კუთხეში გვიჩვენებს რომელი მომხმარებელი არის შესული პროგრამაში.დრო არის იგივე
          რასაც კომპიუტერში გვიჩვენებს, დრო უნდა იყოს სწორი რადგან თუ დრო არასწორია რა თარიღიც არის
          იმ თარიღსა და დროში აისახება გაყიდვა. შემდეგ გვაქვს ჩეკის ნომერი.
        </p>
      </div>

      <div className="!mt-6">
        <Image
          src="https://megaplus.vercel.app/assets/images/docs/realization-controls.png"
          preview={false}
        />

        <div className="!mt-8 flex flex-col gap-y-6">
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/triali.png"
              preview={false}
            />{' '}
            მოლოდინში გადატანა. შესაძლებლობას გვაძლევს A გატარება შევინახოთ, გავატაროთ სხვა
            მომხმარებელი და შემდეგ უკან დავაბრუნოთ A გატარება.
          </p>
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/lupa.png"
              preview={false}
            />{' '}
            ძებნა. გამოგვიტანს ფანჯარას საიდანაც შეგვიძლია მოვძებნოთ პროდუქცია კოდით ან დასახელებით,
            ვნახოთ ფასი ან გადმოვიტანოთ რეალიზაციაში
          </p>
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/up.png"
              preview={false}
            />{' '}
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/down.png"
              preview={false}
            />{' '}
            გატარებული პროდუქციებს შორის მოძრაობა, ზევით და ქვევით.
          </p>
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/plus.png"
              preview={false}
            />{' '}
            გატარებულ პროდუქციაზე რაოდენობის მომატება, ზრდის ერთი ერთეულით.
          </p>
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/minus.png"
              preview={false}
            />{' '}
            გატარებულ პროდუქციაზე რაოდენობის დაკლება, აკლებს ერთე ერთეულს.
          </p>
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/X.png"
              preview={false}
            />{' '}
            გატარებული პროდუქციის ამოშლა, შლის 1 პოზიციას მთლიანად.
          </p>
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/X.png"
              preview={false}
            />{' '}
            პარამეტრების გამოტანა. გამოაქვს შემდეგი პარამეტრები:
          </p>
          <div>
            <Image
              width={'15%'}
              className="!my-4"
              src="https://megaplus.vercel.app/assets/images/docs/realization-X-Z-OFF.png"
              preview={false}
            />
            <p>
              X რეპორტის ამოღება სალარო აპარატიდან. დღის დახურვა. Z რეპორტის ამოღება. დღე იხურება
              ყველა მოწყობილობაზე. სალარო აპარატთან კავშირის გათიშვა. თუ გავთიშავთ სალარო აპარატთან
              კავშირს ნაღდზე გატარებისას აღარ ამოვა სალარო აპარატიდან ჩეკი.
            </p>
          </div>
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/xurda2.png"
              preview={false}
            />{' '}
            გამოაქვს კლავიატურა, ციფრები - კოდის შესაყვანად, X - რაოდენობის მომატება (ვწერთ X და
            შემდეგ რამდენი ცალიც გვინდა გახდეს პროდუქცია.) {'<-'} შეყვანილი ინფორმაციის წაშლა.
          </p>
          <p>
            <Image
              className="inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/keyboard.png"
              preview={false}
            />{' '}
            ხურდის მოთხოვნა, შესაყვან ველში გამოჩნდება „ {'>'} “ ნიშანი და უნდა შევიყვანოთ რა თანხაც
            მოგვცა მომხმარებელმა, პროგრამა ამ თანხას გამოაკლებს გადასახდელ თანხას და დაგიწერთ ხურდას
            რამდენიც უნდა დაუბრუნოთ.
          </p>
        </div>

        <div className="!mt-8">
          <p>
            პროდუქციის გასატარებლად დავასკანეროთ პროდუქცია. <br /> პროგრამა მოძებნის პროდუქციის
            შტრიხკოდს ბაზაში და გამოგვიტანს მის ინფორმაციას.
          </p>
          <Image
            className="!my-2"
            src="https://megaplus.vercel.app/assets/images/docs/realization-product-table.png"
            preview={false}
          />
          <p>
            როდესაც მომხმარებლის მიერ შერჩეულ ყველა პროდუქციას დავასკანერებთ, დავაჭიროთ ენთერს
            კლავიატურაზე ან{' '}
            <Image
              className="inline-block align-middle"
              height={35}
              src="https://megaplus.vercel.app/assets/images/docs/cashier-ok.png"
              preview={false}
            />{' '}
            ღილაკს. ფანჯარაში უნდა ავირჩიოთ როგორ ხდება გადახდა.
          </p>
        </div>

        <div className="!mt-6">
          <p className="!mb-4">
            ავირჩიოთ გადახდის მეთოდი და დავაჭიროთ
            <Image
              height={40}
              width={50}
              className="!ml-4 inline-block align-middle"
              src="https://megaplus.vercel.app/assets/images/docs/realization-check.png"
              preview={false}
            />
          </p>
          <Image
            src="https://megaplus.vercel.app/assets/images/docs/realization-payment-method.png"
            preview={false}
          />
          <p className="!mt-4">
            დადასტურების შემთხვევაში ამოვა ჩეკი, სხვა შემთხვევაში არ გადაიტანს პროგრამა
            რეალიზაციაში.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Realisation;
