import React from 'react';

import { BaseButton } from './MainButton/BaseButton';

import classes from './BaseButton.module.scss';

export default {
  component: BaseButton,
  title: 'BaseButton',
};

export const Primary = () => {
  return <BaseButton variant={classes.primary}>Button</BaseButton>;
};
