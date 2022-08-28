import React from 'react';

import { Modal } from './Modal';

import classes from './Modal.module.scss';

export default {
  component: Modal,
  title: 'UI/Modal',
};

export const Primary = () => {
  return <Modal className={classes.visible}>Some</Modal>;
};
