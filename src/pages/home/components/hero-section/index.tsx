import Decoration from './components/decoration';
import TypingText from './components/typing-text';
import useHeroLogic from './hooks/useHeroLogic';

const Hero = () => {
  const { showImage, decorationRef } = useHeroLogic();

  return (
    <div className="hero-section relative rounded-3xl border-b-10 border-red-500 bg-[#ffffff] dark:bg-[var(--dark-light-blue)]">
      <TypingText />
      <div>
        <div
          className={`hero-image xl:right-0 xl:bottom-[10px] xl:!h-[35rem] xl:!w-[45rem] ${showImage ? 'visible' : ''}`}
        ></div>
        <div className="hero-demo-app-pc"></div>
      </div>
      <Decoration decorationRef={decorationRef} />
    </div>
  );
};

export default Hero;
