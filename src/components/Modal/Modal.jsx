import React, { useState } from 'react';

import { MainButton } from '../UI/index';

import clsx from 'clsx';
import classes from './Modal.module.scss';

export const Modal = ({ buttonClassName, className, modalName, children }) => {
  const [modal, setModal] = useState(false);
  const modalClasses = clsx(classes.modal, modal && classes.visible, className);
  const buttonClasses = clsx(modal && classes.active, buttonClassName);

  return (
    <>
      <MainButton
        className={buttonClasses}
        variant="round"
        onClick={() => {
          setModal(true);
        }}
      >
        {modalName}
      </MainButton>
      <div
        className={modalClasses}
        onClick={() => {
          return setModal(false);
        }}
        onKeyDown={(event) => {
          return event.code === 27 && setModal(false);
        }}
      >
        <div
          className={classes.modal_content}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
