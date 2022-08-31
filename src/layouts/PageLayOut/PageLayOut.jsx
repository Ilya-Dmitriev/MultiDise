import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '../../components';

import classes from './PageLayout.module.scss';

const adressList = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: 'classes',
    title: 'Classes',
  },
  {
    path: 'rases',
    title: 'Rases',
  },
  {
    path: 'spells',
    title: 'Spells',
  },
  {
    path: 'traits',
    title: 'Traits',
  },
  {
    path: 'backgrounds',
    title: 'Backgrounds',
  },
  {
    path: 'weapon',
    title: 'Weapon',
  },
  {
    path: 'armor',
    title: 'Armor',
  },
  {
    path: 'ewuipment',
    title: 'Ewuipment',
  },
  {
    path: 'magic_items',
    title: 'Magic Items',
  },
  {
    path: 'bestiary',
    title: 'Bestiary',
  },
];

export const PageLayOut = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navigation adressList={adressList} />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};
