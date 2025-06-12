import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  name: string;
  path: string;
}

const NavLink: FC<NavLinkProps> = ({ name, path }) => {
  const currentPath = useLocation().pathname;
  return (
    <Link className={currentPath === path ? 'navLink active text-red-600' : 'navLink'} to={path}>
      {name}
      <div></div>
    </Link>
  );
};

export default NavLink;
