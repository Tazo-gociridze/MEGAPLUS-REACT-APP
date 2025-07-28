import { SunOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import { IoMoonOutline } from 'react-icons/io5';

interface ChangeThemeProps {
  dark: boolean;
  setDarkMode: (value: boolean) => void;
}

const ChangeTheme: FC<ChangeThemeProps> = ({ dark, setDarkMode }) => {
  return (
    <span onClick={() => setDarkMode(!dark)}>{dark ? <SunOutlined /> : <IoMoonOutline />}</span>
  );
};

export default ChangeTheme;
