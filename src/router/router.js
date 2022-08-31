import React from 'react';

import { HomeLayOut } from '../layouts/HomeLayOut/HomeLayOut';
import { PageLayOut } from '../layouts/PageLayOut/PageLayOut';
import { Home, NotFound, Spells } from '../pages';

export const routesInLayOuts = [
  {
    key: 'homeLauOut',
    layoutElement: <HomeLayOut />,
    routes: [
      {
        element: <Home />,
        index: true,
        path: '/',
      },
      {
        element: <NotFound />,
        layout: <HomeLayOut />,
        path: '*',
      },
    ],
  },
  {
    key: 'pageLauOut',
    layoutElement: <PageLayOut />,
    routes: [
      {
        element: <Spells />,
        path: '/spells',
      },
    ],
  },
];
