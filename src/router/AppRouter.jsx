import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../layouts/Layout';

import { routes } from './router';

const routeNodes = routes.map((route) => {
  return <Route key={route.path} {...route} />;
});

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>{routeNodes}</Routes>
      </Layout>
    </BrowserRouter>
  );
};
