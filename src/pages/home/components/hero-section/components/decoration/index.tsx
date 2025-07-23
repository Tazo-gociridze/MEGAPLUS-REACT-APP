import type { FC, RefObject } from 'react'

interface DecorationProps {
  decorationRef: RefObject<HTMLDivElement | null>;
}

const Decoration: FC<DecorationProps> = ({ decorationRef }) => {
  return (
    <div>
      <div
        ref={decorationRef}
        className="hero-decoration-div bg-red-50 dark:bg-[var(--dark-blue)] xl:!w-[]"
      ></div>
    </div>
  );
};

export default Decoration;
