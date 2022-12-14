import React from 'react';

import { TogleButton } from './TogleButton';

import classes from './TogleButton.module.scss';

export default {
  component: TogleButton,
  title: 'UI/Buttons/TogleButton',
};

export const Primary = () => {
  return <TogleButton variant={classes.primary}>Togle</TogleButton>;
};
