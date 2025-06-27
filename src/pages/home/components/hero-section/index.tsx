import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TypewriterComponent from 'typewriter-effect';

const Hero = () => {
  const decorationRef = useRef<HTMLDivElement>(null);
  const [showImage, setShowImage] = useState(false);

  const { t, i18n } = useTranslation('home');

  useEffect(() => {
    const el = decorationRef.current;
    if (!el) return;

    setTimeout(() => {
      el.style.width = '55rem';
      setTimeout(() => {
        setShowImage(true);
      }, 800);
    }, 100);
  }, []);

  return (
    <div className="relative !mt-28 h-[700px] w-full rounded-3xl border-b-10 border-red-500 bg-[#ffffff] ">
      <div className="flex items-center !p-8">
        <h1 className="noto-sans-georgian text-[2.3rem] font-semibold">
          <TypewriterComponent
            key={i18n.language} 
            onInit={(typewriter) => {
              typewriter
                .typeString(t('hero-text-1'))
                .pauseFor(3000)
                .deleteAll()
                .typeString(t('hero-text-2'))
                .pauseFor(3000)
                .deleteAll()
                .typeString(t('hero-text-3'))
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              delay: 20,
              deleteSpeed: 1,
            }}
          />
        </h1>
      </div>

      <div
        className={`hero-image absolute top-0 right-0 ${showImage ? 'visible' : ''}`}
      ></div>

      <div ref={decorationRef} className="hero-decoration-div bg-red-50"></div>
      <div className="hero-demo-app-pc"></div>
    </div>
  );
};

export default Hero;


