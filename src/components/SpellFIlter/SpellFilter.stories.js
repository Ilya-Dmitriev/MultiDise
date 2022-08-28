import React from 'react';

import { SpellFilter } from './SpellFilter';

export default {
  component: SpellFilter,
  title: 'Components/SpellFilter',
};

export const Primary = () => {
  return <SpellFilter spellsFilter={{ '1': true, '2': true, '3': true, '4': true, Cantrip: true }} />;
};

