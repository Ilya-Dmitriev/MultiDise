import React from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import classes from './MainButton.module.scss';

export const MainNavLink = ({ variant = 'primary', children, className, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return clsx(classes.btn, classes[variant], isActive && classes.active, className);
      }}
      {...props}
    >
      {children}
    </NavLink >
  );
};
