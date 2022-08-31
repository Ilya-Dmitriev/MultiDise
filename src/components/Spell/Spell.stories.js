import React from 'react';

import { Spell } from './Spell';

export default {
  component: Spell,
  title: 'Components/Spell',
};

export const Primary = () => {
  return <Spell spell={{ level: '1', name: 'Spell name', school: 'school' }} />;
};
