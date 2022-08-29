import React from 'react';

import { Modal } from './Modal';

export default {
  component: Modal,
  title: 'components/Modal',
};

export const Primary = () => {
  return <Modal modalName="Modals">Some modal </Modal>;
};
