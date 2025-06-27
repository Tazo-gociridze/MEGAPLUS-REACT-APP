import { SunOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import { IoMoonOutline } from 'react-icons/io5';

interface ChangeThemeProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const ChangeTheme: FC<ChangeThemeProps> = ({ dark, setDark }) => {
  return <span onClick={() => setDark(!dark)}>{dark ? <SunOutlined /> : <IoMoonOutline />}</span>;
};

export default ChangeTheme;

