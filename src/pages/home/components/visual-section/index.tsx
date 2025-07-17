import H2Title from '@/utils/h2title';
import { Image } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  EffectCoverflow,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCreative,
} from 'swiper/modules';

import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';

const contentStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const images = [
  'https://megaplus-images.vercel.app/assets/03-d_FwQrzv.png',
  'https://megaplus-images.vercel.app/assets/05-BVia0kDj.png',
  'https://megaplus-images.vercel.app/assets/08-Bc5tk6nY.png',
  'https://megaplus-images.vercel.app/assets/01-B-37h7Tt.png',
  'https://megaplus-images.vercel.app/assets/02-B0_mV5oA.png',
  'https://megaplus-images.vercel.app/assets/04-DccU6nZH.png',
  'https://megaplus-images.vercel.app/assets/06-CSNmc8vH.png',
  'https://megaplus-images.vercel.app/assets/07-Cof3NVUU.png',
  'https://megaplus-images.vercel.app/assets/09-B6EclifD.png',
  'https://megaplus-images.vercel.app/assets/10-BXIFy2e7.png',
];

const VisualOfProgram = () => {
  const { t } = useTranslation('home');

  return (
    <div className="!mt-10 w-full px-4 py-8">
      <H2Title title={t('visual-section-title')} />

      <Image.PreviewGroup>
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            Scrollbar,
            EffectCoverflow,
            EffectFade,
            EffectCube,
            EffectFlip,
            EffectCreative,
          ]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation
          scrollbar={{ draggable: true }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          style={{ maxWidth: '100%', padding: '80px 0px' }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div style={contentStyle}>
                <Image src={src} height={"100%"} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Image.PreviewGroup>
    </div>
  );
};

export default VisualOfProgram;
