import { SunOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { IoMoonOutline } from 'react-icons/io5';
import useHeaderToolsLogic from './hooks/useHeaderToolsLogic';

const HeaderTools = () => {
  const { items, dark, setDark, lang, flag } = useHeaderToolsLogic();
  return (
    <div className="flex items-center gap-x-10 text-xl *:cursor-pointer text-[#0B0642] dark:text-[white]">
      <span className="" onClick={() => setDark(!dark)}>
        {dark ? <SunOutlined /> : <IoMoonOutline />}
      </span>
      <div className="relative w-[75px] text-center">
        <Dropdown menu={{ items }} className="z-[9999]">
          <a
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-x-1 text-center text-lg font-[350]"
          >
            <Space>{lang}</Space>
            <img src={flag} alt="" className="!mt-[2px] h-4 w-4" />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderTools;
