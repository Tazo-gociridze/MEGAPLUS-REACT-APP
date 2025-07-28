import type { FC } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

interface SidebarActivatorProps {
  setSidebar: (value: boolean) => void;
}

const SidebarActivator: FC<SidebarActivatorProps> = ({ setSidebar }) => {
  return (
    <span className="sidebar-activator !mt-[2px]">
      <RxHamburgerMenu onClick={() => setSidebar(true)} />
    </span>
  );
};

export default SidebarActivator;
