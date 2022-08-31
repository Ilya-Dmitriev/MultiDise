import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routesInLayOuts } from './router';

const routeNodes = routesInLayOuts.map((layout) => {
  return <Route key={layout.key} element={layout.layoutElement}>
    {layout.routes.map((route) => {
      return <Route key={route.path} {...route} />;
    })}
  </Route>;
});

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeNodes}
      </Routes>
    </BrowserRouter>
  );
};
