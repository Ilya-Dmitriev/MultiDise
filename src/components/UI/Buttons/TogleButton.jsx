import React from 'react';

import classes from './TogleButton.module.scss';

export const TogleButton = ({ variant = classes.primary, children, ...props }) => {
  return (
    <button
      className={variant}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
