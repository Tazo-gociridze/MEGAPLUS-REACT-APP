import { Link } from "react-router-dom"
import NavLink from "../nav-link"
import logo from '../../../../images/logo.png'


const NavBar = () => {
  return (
        <div className="flex w-screen items-center gap-x-26">
          <Link to={'/'}>
            <img className="h-[40px] w-[100px] cursor-pointer" src={logo} alt="" />
          </Link>
          <nav className="ibm-plex-serif-extralight !font-[350] noto-sans-georgian flex items-center justify-center gap-x-10 text-[17px] text-[#0B0642] dark:text-[white]">
            <NavLink name={'Home'} path="/" />
            <NavLink name={'About'} path="/about" />
            <NavLink name={'Contacts'} path="/contacts" />
            <NavLink name={'Documentations'} path="/docs" />
          </nav>
        </div>
  )
}

export default NavBar