import React from 'react';

import clsx from 'clsx';
import classes from './BaseBtn.module.scss';

const BaseButton = ({ children, className, ...props }) => {
  const buttonClasses = clsx(classes.btn, className);
  return (
    <button className={buttonClasses} type="button" {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
