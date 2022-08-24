import React from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import classes from './BaseBtn.module.scss';

const BaseNavLink = ({ children, className, ...props }) => {
  const linkClasses = clsx(classes.btn, props.isActive && classes.active, className);
  return (
    <NavLink className={linkClasses} {...props}>
      {children}
    </NavLink>
  );
};

export default BaseNavLink;
