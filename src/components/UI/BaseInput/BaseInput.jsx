import React from 'react';

import classes from './BaseInput.module.scss';

const BaseInput = ({
  placeholder = 'Input',
  className,
  ...props
}) => {
  return (
    <input
      className={`${classes.base_input} ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default BaseInput;
