import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const CancellationExemption = () => {
  return (
    <div>
      <H2Title className="!mb-6 text-xl" title="ზედნადების მიღების გაუქმება" />
      <p>
        იმ შემთხვევაში თუ გაუქმებული ზედნადები შევისყიდეთ ან ისეთი ზედნადები დავიდასტურეთ
        პროგრამულად რომელიც არ უნდა მიგვეღო, მოგვიწევს, რომ ასეთი ზედნადები ამოვშალოთ ანუ გავაუქმოთ
        პროგრამულად. <br />
        <br /> ამ ოპერაციის შესასრულებლად უნდა მოვძებნოთ დოკუმენტი, გადმოვიტანოთ ავტორიზაციაში,
        მოვნიშნოთ ყველა პროდუქცია (გავალურჯოთ)
        <span className="flex items-center gap-x-2">
          <span>დავაჭიროთ</span>
          <Image
            src="https://megaplus.vercel.app/assets/images/docs/x-btn-rs.png"
            preview={false}
          />
          <span>გადავიდეთ დოკუმენტებში, ჩასწორება და ბოლოს დოკუმენტის ჩასწორება.</span>
        </span>
        <div className="!mt-8">
          <Image
            src="https://megaplus.vercel.app/assets/images/docs/fix-doc-rs.png"
            preview={false}
          />
        </div>
      </p>
    </div>
  );
};

export default CancellationExemption;
