import type { FC, PropsWithChildren } from 'react';

const FixedWidthContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full !px-50">{children}</div>;
};

export default FixedWidthContainer;
