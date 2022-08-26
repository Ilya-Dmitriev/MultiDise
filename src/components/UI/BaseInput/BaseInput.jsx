import React from 'react';

import classes from './BaseInput.module.scss';

export const BaseInput = ({ placeholder = 'Input', className, ...props }) => {
  return (
    <input className={`${classes.base_input} ${className}`} placeholder={placeholder} {...props} />
  );
};

