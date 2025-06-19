import { Link } from "react-router-dom"
import NavLink from "../nav-link"
import logo from '../../../../images/logo.png'
import { useTranslation } from "react-i18next"
import i18n from "../../../../i18next/i18n"


const NavBar = () => {
  const { t } = useTranslation('header')

  console.log('current language:', i18n.language);
  return (
        <div className="flex w-screen items-center gap-x-26">
          <Link to={'/'}>
            <img className="h-[40px] w-[100px] cursor-pointer" src={logo} alt="" />
          </Link>
          <nav className="ibm-plex-serif-extralight !font-[350] noto-sans-georgian flex items-center justify-center gap-x-10 text-[17px] text-[#0B0642] dark:text-[white]">
            <NavLink name={t('home-link')} path="/" />
            <NavLink name={'About'} path="/about" />
            <NavLink name={'Contacts'} path="/contacts" />
            <NavLink name={'Documentations'} path="/docs" />
          </nav>
        </div>
  )
}

export default NavBar