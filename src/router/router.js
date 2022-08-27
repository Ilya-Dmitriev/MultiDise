import React from 'react';

import { Home, NotFound, Spells } from '../pages';

export const routes = [
  {
    element: <NotFound />,
    path: '*',
  },
  {
    element: <Home />,
    index: true,
    path: '/',
  },
  {
    element: <Spells />,
    path: '/spells',
  },
];
