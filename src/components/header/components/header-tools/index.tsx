import { SunOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { IoMoonOutline } from 'react-icons/io5';
import useHeaderToolsLogic from './hooks/useHeaderToolsLogic';
import { RxHamburgerMenu } from 'react-icons/rx';

const HeaderTools = () => {
  const { items, dark, setDark, lang, flag } = useHeaderToolsLogic();
  return (
    <div className="flex items-center justify-between gap-x-10 text-xl text-[var(--dark-blue)] *:cursor-pointer dark:text-[var(--white-gray)]">
      <span className="" onClick={() => setDark(!dark)}>
        {dark ? <SunOutlined /> : <IoMoonOutline />}
      </span>
      <div className="relative text-center  !w-10">
        <Dropdown menu={{ items }} className="z-[9999]">
          <a
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-x-1 text-center text-lg font-[350]"
          >
            <Space className="capitalize">{lang}</Space>
            <img src={flag} alt="" className="!mt-[2px] h-4 w-4" />
          </a>
        </Dropdown>
      </div>
      <span className="sidebar-activator !mt-[2px]">
        <RxHamburgerMenu />
      </span>
    </div>
  );
};

export default HeaderTools;
