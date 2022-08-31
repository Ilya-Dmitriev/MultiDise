import React from 'react';

import { Filter } from './Filter';

export default {
  component: Filter,
  title: 'Components/Filter',
};

export const Primary = () => {
  return <Filter
    filter={{ '1': true, '2': true, '3': true, '4': true, Cantrip: true }}
    filterName="Filter"
  />;
};
