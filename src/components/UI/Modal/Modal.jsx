import React from 'react';

import clsx from 'clsx';
import classes from './Modal.module.scss';

export const Modal = ({ className, visible, setVisible, children }) => {
  const rootClasses = clsx(classes.modal, visible && classes.visible, className);
  return (
    <div
      className={rootClasses}
      onClick={() => {
        return setVisible(false);
      }}
      onKeyDown={(event) => {
        return event.code === 27 && setVisible(false);
      }}
    >
      <div
        className={classes.modal_content}
        onClick={({ stopPropagation }) => {
          return stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
