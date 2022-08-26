import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LayOut } from '../layouts/LayOut';

import { routes } from './router';

const routeNodes = routes.map((route) => {
  return <Route key={route.path} {...route} />;
});

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>{routeNodes}</Routes>
      </LayOut>
    </BrowserRouter>
  );
};
