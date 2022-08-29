import React from 'react';

import clsx from 'clsx';
import classes from './HidingButton.module.scss';

export const HidingButton = ({ className, visible, children, ...props }) => {
  const hidingButtonClasses = clsx(classes.hiding_btn, !visible && classes.unvisible, className);
  return (
    <button
      className={hidingButtonClasses}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
