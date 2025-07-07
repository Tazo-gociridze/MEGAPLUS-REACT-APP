import Decoration from './components/decoration';
import TypingText from './components/typing-text';
import useHeroLogic from './hooks/useHeroLogic';

const Hero = () => {
  const { showImage, decorationRef } = useHeroLogic();

  return (
    <div className="relative !mt-28 h-[700px] w-full rounded-3xl border-b-10 border-red-500 bg-[#ffffff] dark:bg-[var(--dark-light-blue)]">
      <TypingText />
      <div className={`hero-image xl:!w-[45rem] xl:!h-[35rem] absolute xl:top-30 right-0 ${showImage ? 'visible' : ''}`}></div>
      <Decoration decorationRef={decorationRef} />
    </div>
  );
};

export default Hero;
