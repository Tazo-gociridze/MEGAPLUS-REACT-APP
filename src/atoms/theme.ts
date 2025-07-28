import { atom } from 'jotai';

const initialDarkValue = localStorage.getItem('darkTheme') === 'true';

export const darkThemeAtom = atom<boolean>(initialDarkValue);

export const setDarkThemeAtom = atom(
  (get) => get(darkThemeAtom),
  (_, set, newValue: boolean) => {
    localStorage.setItem('darkTheme', String(newValue));
    document.documentElement.classList.toggle('dark', newValue);
    set(darkThemeAtom, newValue);
  }
);
