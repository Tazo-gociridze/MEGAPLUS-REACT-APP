import { useTranslation } from 'react-i18next';
import TypewriterComponent from 'typewriter-effect';

const TypingText = () => {
  const { t, i18n } = useTranslation('home');
  return (
    <div className="flex items-center !p-8 !leading-[40px]">
      <h1 className="noto-sans-georgian sm:text-[1.2rem] !leading-[45px] md:text-[1.5rem] text-[var(--dark-light-blue)] lg:text-[1.8rem] xl:text-[2rem] font-semibold dark:text-[var(--white-gray)]">
        <TypewriterComponent
          key={i18n.language}
          onInit={(typewriter) => {
            typewriter
              .typeString(t('hero-text-1'))
              .pauseFor(3000)
              .deleteAll(2)
              .typeString(t('hero-text-2'))
              .pauseFor(3000)
              .deleteAll(2)
              .typeString(t('hero-text-3'))
              .pauseFor(3000)
              .deleteAll(2)
              .start();
          }}
          options={{
            loop: true,
            delay: 20,
            deleteSpeed: 1000,
          }}
        />
      </h1>
    </div>
  );
};

export default TypingText;
