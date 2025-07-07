import { useState, useEffect } from 'react';
import kaflag from '@/components/header/images/flag-icons/ka.png';
import usaflag from '@/components/header/images/flag-icons/usa.png';
import ruflag from '@/components/header/images/flag-icons/ru.png';
import azflag from '@/components/header/images/flag-icons/az.png';
import uzflag from '@/components/header/images/flag-icons/uz.png';
import type { MenuProps } from 'antd';

import { useTranslation } from 'react-i18next';
import ChangeLangItem from '../../change-lang-item';

const LANGUAGE_STORAGE_KEY = 'selectedLanguage';
const THEME_STORAGE_KEY = 'darkTheme';

const languageOptions = {
  en: usaflag,
  ka: kaflag,
  ru: ruflag,
  az: azflag,
  uz: uzflag,
};

const useHeaderToolsLogic = () => {
  const [dark, setDarkState] = useState(false);
  const [lang, setLang] = useState('en');
  const [flag, setFlag] = useState(usaflag);

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
    setDarkState(isDark);
  }, []);

  const changeLang = (newLang: string, currentFlag: string) => {
    setLang(newLang);
    setFlag(currentFlag);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
  };

  const setDark = (value: boolean) => {
    localStorage.setItem(THEME_STORAGE_KEY, value.toString());
    document.documentElement.classList.toggle('dark', value);
    setDarkState(value);
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
    setDark,
    lang,
    flag,
  };
};

export default useHeaderToolsLogic;
