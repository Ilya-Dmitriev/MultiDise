import React from 'react';

import { MainButton } from './MainButton';

import classes from './MainButton.module.scss';

export default {
  component: MainButton,
  title: 'UI/Buttons/BaseButton',
};

export const Primary = () => {
  return <MainButton variant={classes.primary}>Button</MainButton>;
};
