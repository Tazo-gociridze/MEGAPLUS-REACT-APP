import H2Title from '@/utils/h2title';
import { Image } from 'antd';

const ProductsFiltration = () => {
  return (
    <div>
      <div>
        <H2Title className="!mb-6 text-xl" title="ფილტრაცია" />
        <div className="">
          <p className="!mb-3">პროდუქციის მოსაძებნად შეგვიძლია გამოვიყენოთ ფილტრაციის ფანჯარა</p>
          <Image
            preview={false}
            src="https://megaplus.vercel.app/assets/images/docs/fillter-img.png"
          />
          <p className="!mb-3">
            პროდუქცია შეგვიძლია მოვძებნოთ შტრიხკოდით, დასახელებით , კოდით , ჯგუფით და მომწოდებლით.
            მოცემულ ველში შეგვიძლია ჩავწეროთ შტრიხკოდი(ასევე შეგვიძლია შტრიხკოდიდან ბოლო რამოდენიმე
            ციფრი ჩავწეროთ), ან ჩავასკანეროთ პროდუქცია. გაფართოებული ძიებისთვის შეგვიძლია
            გამოვიყენოთ ღილაკი{' '}
            <Image
              width={25}
              height={25}
              preview
              className=""
              src="https://megaplus.vercel.app/assets/images/docs/searchbtn-img.png"
            />{' '}
            გამოჩნდება დამატებითი ფანჯარა:
          </p>
          <div className="!mb-4 flex items-center gap-x-6">
            <Image
            width={200}
            height={65}
              preview={false}
              src="https://megaplus.vercel.app/assets/images/docs/byGroup-img.png"
            />
            <span>შეგვიძლია ჩავწეროთ ჯგუფის ოთხ ნიშნა კოდი , ან დასახელება.</span>
          </div>
          <div className="flex items-center gap-x-6">
            <Image
            width={250}
            height={65}
              preview={false}
              src="https://megaplus.vercel.app/assets/images/docs/suppliers-img.png"
            />
            <span>
              უნდა ჩავწეროთ მომწოდებლის დასახელება , ავირჩიოთ და მოგვიძებნის პროდუქციებს რომელიც ამ
              მომწოდებელს შემოაქვს, ან შემოუტანია.ფილტრაციების გამოყენება შეგვიძლია კომბინირებულად.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFiltration;
