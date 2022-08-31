import React from 'react';

import clsx from 'clsx';
import classes from './MainButton.module.scss';

export const MainButton = ({ variant = 'primary', children, className, ...props }) => {
  const buttonClasses = clsx(classes[variant], classes.btn, className);
  return (
    <button className={buttonClasses} type="button" {...props}>
      {children}
    </button>
  );
};
