import React from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import classes from './MainButton.module.scss';

export const BaseNavLink = ({ children, className, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return clsx(classes.btn, isActive && classes.active, className);
      }}
      {...props}
    >
      {children}
    </NavLink >
  );
};
