import H2Title from '../../../../utils/h2title';
import { Carousel, Image } from 'antd';
import 'antd/dist/reset.css';

import type { CSSProperties } from 'react';

const contentStyle: CSSProperties = {
  width: '500px',
  lineHeight: '160px',
  textAlign: 'center',
};
const VisualOfProgram = () => {
  return (
    <div className="w-full px-4 py-8">
      <H2Title title="აღთქმადი ვიზუალი" />

      <Carousel autoplay dots style={{ maxWidth: '100%' }} slidesPerRow={2} >
        <div style={contentStyle}>
          <Image src="https://megaplus.vercel.app/assets/images/MTAVARI-PANELI-1.jpg" />
        </div>

        <div style={contentStyle}>
          <Image src="https://megaplus.vercel.app/assets/images/REALIZACIA-3.jpg" />
        </div>
        <div style={contentStyle}>
          <Image src="https://megaplus.vercel.app/assets/images/NOMENKLATURA-2.jpg" />
        </div>
        <div style={contentStyle}>
          <Image src="https://megaplus.vercel.app/assets/images/NAVACHRI-2.jpg" />
        </div>
        <div style={contentStyle}>
          <Image src="https://megaplus.vercel.app/assets/images/MIGEBA-2.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default VisualOfProgram;
