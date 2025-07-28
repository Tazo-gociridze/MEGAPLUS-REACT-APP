import type { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface H2TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

const H2Title = ({ title, className, ...props }: H2TitleProps) => {
  return (
    <h2 {...props} className={clsx('!mt-12 flex items-center gap-x-3 text-2xl', className)}>
      <div className=" h-[2px] w-[35px] bg-red-500 dark:bg-white"></div>
      <span className="dark:text-[var(--white-gray)]">{title}</span>
    </h2>
  );
};

export default H2Title;
