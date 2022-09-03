import React from 'react';

import { SpellLink } from './SpellLink';

export default {
  component: SpellLink,
  title: 'Components/SpellLink',
};

export const Primary = () => {
  return <SpellLink spell={{ level: '1', name: 'Spell name', school: 'school' }} />;
};
