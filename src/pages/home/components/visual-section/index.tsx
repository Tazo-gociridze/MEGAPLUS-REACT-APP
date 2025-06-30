import H2Title from '../../../../utils/h2title';
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

const contentStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const images = [
  "https://megaplus.vercel.app/assets/images/MTAVARI-PANELI-1.jpg",
  "https://megaplus.vercel.app/assets/images/REALIZACIA-3.jpg",
  "https://megaplus.vercel.app/assets/images/NOMENKLATURA-2.jpg",
  "https://megaplus.vercel.app/assets/images/NAVACHRI-2.jpg",
  "https://megaplus.vercel.app/assets/images/MIGEBA-2.jpg",
];

const VisualOfProgram = () => {
  return (
    <div className="w-full px-4 py-8 !mt-10">
      <H2Title title="აღთქმადი ვიზუალი" />

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
              <Image
                src={src}
                height="100%"
                loading="lazy"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VisualOfProgram;
