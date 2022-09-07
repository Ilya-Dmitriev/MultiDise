import { useState } from 'react';

import { MainButton } from '../UI/index';

import clsx from 'clsx';
import classes from './Modal.module.scss';

interface ModalProps {
  buttonClassName: string,
  className: string,
  modalName: string,
  children: React.ReactNode,
}

export const Modal: React.FC<ModalProps> = ({
  buttonClassName,
  className,
  modalName,
  children,
}) => {
  const [modal, setModal] = useState<boolean>(false);
  const modalClasses: string = clsx(classes.modal, modal && classes.visible, className);
  const buttonClasses: string = clsx(modal && classes.active, buttonClassName);

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
