import { Link } from "react-router-dom"
import NavLink from "../nav-link"
import logo from '../../../../images/logo.png'
import { useTranslation } from "react-i18next"


const NavBar = () => {
  const { t } = useTranslation('header')

  return (
        <div className="flex w-screen items-center gap-x-26">
          <Link to={'/'}>
            <img className="h-[40px] w-[100px] cursor-pointer" src={logo} alt="" />
          </Link>
          <nav className="ibm-plex-serif-extralight !font-[350] noto-sans-georgian flex items-center 
                justify-center gap-x-10 text-[17px] text-[#0B0642] dark:text-[var(--white-gray)]">
            <NavLink name={t('home-link')} path="/" />
            <NavLink name={t('blog-link')} path="/about" />
            <NavLink name={t('contact-link')} path="/contacts" />
            <NavLink name={t('doc-link')} path="/docs" />
          </nav>
        </div>
  )
}

export default NavBar