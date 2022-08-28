import React from 'react';

import { MainInput } from './MainInput';

export default {
  component: MainInput,
  title: 'UI/MainInput',
};

export const Primary = () => {
  return <MainInput placeholder="Stories input" />;
};
