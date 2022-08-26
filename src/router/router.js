import React from 'react';

import { Classes, Home, NotFound, Profile, Rases, Spells } from '../pages';

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
    element: <Classes />,
    path: '/classes',
  },
  {
    element: <Rases />,
    path: '/rases',
  },
  {
    element: <Spells />,
    path: '/spells',
  },
  {
    element: <Profile />,
    path: '/profile',
  },
];
