import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const ChangeContract = () => {
  return (
    <div>
      <H2Title className="!mb-6 text-xl" title="ხელშეკრულების შეცვლა" />
      <p>
        თუ მიღების დროს შეგვეშალა და ხელშეკრულება არასწორად მივუთითეთ უნდა გადავიდეთ RS ფანჯარაში,
        ავირჩიოთ ზედნადები (რომელიც არასწორი ხელშეკრულებით არის მიღებული) დავაჭიროთ მწვანე ისარს,
        შემდეგ „ხელშეკრულებები“ გამოგვიტანს ხელშეკრულებებს და ავირჩიოთ სწორი ხელშეკრულება
        გადავიტანოთ ზედნადები ავტორიზაციებში, გადავიდეთ „დოკუმენტები“ შემდეგ „ჩასწორება“ ბოლოს
        დოკუმენტის ჩასწორება
      </p>
      <span className='flex items-center gap-x-4 !mt-6'>
        <Image src="https://megaplus.vercel.app/assets/images/docs/add-doc.png" preview={false} />
        <span>ხელშეკრულებების გამოტანა</span>
      </span>
    </div>
  );
};

export default ChangeContract;
