import { To } from 'react-router-dom';
import { HomeLayOut } from '../layouts/HomeLayOut/HomeLayOut';
import { PageLayOut } from '../layouts/PageLayOut/PageLayOut';
import { Home, NotFound, Spells } from '../pages';

interface PageRoute {
  element: React.ReactElement,
  path: To,
  key: React.Key,
  index?: boolean,
}

interface LayOutRoute {
  key: React.Key,
  layoutElement: React.ReactElement,
  routes: PageRoute[]
}

export const routesInLayOuts: LayOutRoute[] = [
  {
    key: 'homeLauOut',
    layoutElement: <HomeLayOut />,
    routes: [
      {
        element: <Home />,
        path: '/',
        key: 'home',
        index: true,
      },
      {
        element: <NotFound />,
        path: '*',
        key: 'notfound',
      },
    ],
  },
  {
    key: 'pageLauOut',
    layoutElement: <PageLayOut />,
    routes: [
      {
        element: <Spells />,
        path: '/spells/*',
        key: 'spells',
      },
    ],
  },
];
