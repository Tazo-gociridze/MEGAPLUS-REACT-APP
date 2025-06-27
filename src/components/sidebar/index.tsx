import type { FC } from 'react';
import { IoIosClose } from 'react-icons/io';

interface SidebarProps {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ setSidebar, sidebar }) => {
  return (
    <>
      <div
        onClick={() => setSidebar(false)}
        className={`fixed top-0 left-0 z-[9999] h-full w-full bg-[#00000067] ${
          sidebar ? 'visible opacity-[1]' : 'invisible opacity-[0]'
        } cursor-pointer transition-[1s]`}
      ></div>
      <div
        className={`fixed top-0 right-[-400px] h-full w-[400px] bg-red-50 transition-[0.3s] ${
          sidebar ? 'right-[0px]' : 'right-[-400px]'
        } z-[9999]`}
      >
        <IoIosClose
          onClick={() => setSidebar(false)}
          className={`absolute top-[10px] left-[10px] cursor-pointer text-5xl text-red-600 ${sidebar ? 'block' : 'hidden'}`}
        />
      </div>
    </>
  );
};

export default Sidebar;
