import { NavLink, To } from 'react-router-dom';

import clsx from 'clsx';
import classes from './MainButton.module.scss';

interface MainNavLinkProps {
  to: To,
  children?: React.ReactNode,
  className?: string,
  variant?: 'primary' | 'round'
}

export const MainNavLink: React.FC<MainNavLinkProps> = ({
  to,
  children,
  className,
  variant = 'primary',
}) => {
  const navLinkClasses = (
    { isActive }: { isActive: boolean }
  ): string => {
    return clsx(
      className,
      classes.btn,
      classes[variant],
      isActive && classes.active,
    );
  }

  return (
    <NavLink
      className={navLinkClasses}
      to={to}
    >
      {children}
    </NavLink >
  );
};
