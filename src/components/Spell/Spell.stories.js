import React from 'react';

import { Spell } from './Spell';

export default {
  component: Spell,
  title: 'Components/Spell',
};

export const Primary = () => {
  return <Spell spell={{ level: 'level', name: 'Spell name', school: 'school' }} />;
};
