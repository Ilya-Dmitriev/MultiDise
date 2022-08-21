import React from 'react';
import {
  Outlet,
} from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';

import classes from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navigation />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>Created by: Dmitriev Ilya</footer>
    </div>
  );
};

export default Layout;
