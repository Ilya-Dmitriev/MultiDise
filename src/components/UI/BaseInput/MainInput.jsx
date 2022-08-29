import React from 'react';

import clsx from 'clsx';
import classes from './MainInput.module.scss';

export const MainInput = ({ placeholder = 'Input', className, ...props }) => {
  const inputClasses = clsx(classes.base_input, className);
  return (
    <input className={inputClasses} placeholder={placeholder} {...props} />
  );
};
