import { useState, useEffect } from 'react';
import kaflag from '@/components/header/images/flag-icons/ka.png';
import usaflag from '@/components/header/images/flag-icons/usa.png';
import ruflag from '@/components/header/images/flag-icons/ru.png';
import azflag from '@/components/header/images/flag-icons/az.png';
import uzflag from '@/components/header/images/flag-icons/uz.png';
import type { MenuProps } from 'antd';

import { useTranslation } from 'react-i18next';
import ChangeLangItem from '../../change-lang-item';
import { useAtom } from 'jotai';
import { darkThemeAtom, setDarkThemeAtom } from '@/atoms/theme';

const LANGUAGE_STORAGE_KEY = 'selectedLanguage';
const THEME_STORAGE_KEY = 'darkTheme';

const languageOptions = {
  en: usaflag,
  ge: kaflag,
  ru: ruflag,
  az: azflag,
  uz: uzflag,
};

const useHeaderToolsLogic = () => {
  const [lang, setLang] = useState('ge');
  const [flag, setFlag] = useState(usaflag);
  const [dark] = useAtom(darkThemeAtom)
 const [, setDark] = useAtom(setDarkThemeAtom);


  const { i18n } = useTranslation()
  useEffect(() => {
   i18n.changeLanguage(lang)
   //eslint-disable-next-line
  }, [lang])

  useEffect(() => {
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLang && savedLang in languageOptions) {
      setLang(savedLang);
      setFlag(languageOptions[savedLang as keyof typeof languageOptions]);
    }

    const savedDark = localStorage.getItem(THEME_STORAGE_KEY);
    const isDark = savedDark === 'true';
    document.documentElement.classList.toggle('dark', isDark);
    setDark(isDark);
    //eslint-disable-next-line
  }, []);

  const changeLang = (newLang: string, currentFlag: string) => {
    setLang(newLang);
    setFlag(currentFlag);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
  };

  const setDarkMode = (value: boolean) => {
    localStorage.setItem(THEME_STORAGE_KEY, value.toString());
    document.documentElement.classList.toggle('dark', value);
    setDark(value);
  };

  const items: MenuProps['items'] = Object.entries(languageOptions).map(
    ([langKey, langFlag], index) => ({
      label: <ChangeLangItem changeLang={changeLang} flag={langFlag} lang={langKey} />,
      key: String(index),
    })
  );

  return {
    items,
    dark,
    setDarkMode,
    lang,
    flag,
  };
};

export default useHeaderToolsLogic;
