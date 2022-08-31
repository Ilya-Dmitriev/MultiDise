import React from 'react';

import { MainButton } from './MainButton';

export default {
  component: MainButton,
  title: 'UI/Buttons/BaseButton',
};

export const Primary = () => {
  return <MainButton variant="primary">Button</MainButton>;
};

export const Round = () => {
  return <MainButton variant="round">Button</MainButton>;
};
