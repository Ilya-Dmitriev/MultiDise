import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '../../components';
import mainAsdressList from '../mainAsdressList';

import classes from './HomeLayOut.module.scss';

export const HomeLayOut = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navigation adressList={mainAsdressList} />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>Created by: Dmitriev Ilya</footer>
    </div>
  );
};
