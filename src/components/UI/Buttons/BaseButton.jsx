import React from 'react';

import clsx from 'clsx';
import classes from './BaseButton.module.scss';

export const BaseButton = ({ variant = classes.primary, children, className, ...props }) => {
  const buttonClasses = clsx(variant, classes.btn, className);
  return (
    <button className={buttonClasses} type="button" {...props}>
      {children}
    </button>
  );
};
