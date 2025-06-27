import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import type { FC } from 'react';

interface ChangeLangProps {
  items: MenuProps['items'];
  lang: string;
  flag: string;
}

const ChangeLang: FC<ChangeLangProps> = ({ items, lang, flag }) => {
  return (
    <div className="relative !w-10 text-center">
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
  );
};

export default ChangeLang;

