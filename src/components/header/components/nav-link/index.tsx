import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  name: string;
  path: string;
}

const NavLink: FC<NavLinkProps> = ({ name, path }) => {
  const currentPath = useLocation().pathname;
  return (
    <Link
      className={currentPath === path ? 'navLink active text-red-600 dark:text-red-500' : 'navLink'}
      to={path}
    >
      <span>{name}</span>
      <div className="dark:!bg-white"></div>
    </Link>
  );
};

export default NavLink;
