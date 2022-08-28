import React from 'react';

import classes from './MainInput.module.scss';

export const MainInput = ({ placeholder = 'Input', className, ...props }) => {
  return (
    <input className={`${classes.base_input} ${className}`} placeholder={placeholder} {...props} />
  );
};
