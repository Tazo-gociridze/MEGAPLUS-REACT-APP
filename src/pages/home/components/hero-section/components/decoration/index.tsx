import type { FC, RefObject } from 'react';

interface DecorationProps {
  decorationRef: RefObject<HTMLDivElement | null>;
}

const Decoration: FC<DecorationProps> = ({ decorationRef }) => {
  return (
    <div>
      <div
        ref={decorationRef}
        className="hero-decoration-div xl:!w-[] bg-red-50 dark:bg-[var(--dark-blue)]"
      ></div>
    </div>
  );
};

export default Decoration;
