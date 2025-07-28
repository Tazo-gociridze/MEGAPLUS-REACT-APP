import type { FC } from 'react';

interface ChangeLangItemProps {
  changeLang: (lang: string, flag: string) => void;
  flag: string;
  lang: string;
}

const ChangeLangItem: FC<ChangeLangItemProps> = ({ changeLang, flag, lang }) => {
  return (
    <span
      onClick={() => changeLang(lang, flag)}
      className="flex items-center gap-x-2 font-[350] capitalize"
    >
      {lang}
      <img src={flag} alt="" className="h-4 w-4" />
    </span>
  );
};

export default ChangeLangItem;
