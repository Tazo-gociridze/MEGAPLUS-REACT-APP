import useHeaderToolsLogic from './hooks/useHeaderToolsLogic';
import type { FC } from 'react';
import ChangeLang from './components/change-lang';
import ChangeTheme from './components/change-theme';
import SidebarActivator from './components/sidebar-activator';

interface HeaderToolsProps {
  setSidebar: (value: boolean) => void;
}

const HeaderTools: FC<HeaderToolsProps> = ({ setSidebar }) => {
  const { items, dark, setDark, lang, flag } = useHeaderToolsLogic();

  return (
    <div className="flex items-center justify-between gap-x-10 text-xl text-[var(--dark-blue)] *:cursor-pointer dark:text-[var(--white-gray)]">
         <ChangeTheme dark={dark} setDark={setDark}/>
         <ChangeLang items={items} lang={lang}  flag={flag}/>
         <SidebarActivator setSidebar={setSidebar}/>
    </div>
  );
};

export default HeaderTools;

