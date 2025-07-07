import { useEffect, useRef, useState } from 'react'

const useHeroLogic = () => {
  const decorationRef = useRef<HTMLDivElement>(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const el = decorationRef.current;
    if (!el) return;

    setTimeout(() => {
      el.style.width = '60%';
      setTimeout(() => {
        setShowImage(true);
      }, 800);
    }, 100);
  }, []);
  return {
    showImage,
    decorationRef
  }
}

export default useHeroLogic