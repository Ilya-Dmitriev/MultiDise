import React from 'react';

import { Navigation } from '../components';

import classes from './Layout.module.scss';

export const LayOut = ({ children }) => {
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
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navigation adressList={adressList} />
      </header>
      <main className={classes.main}>
        {children}
      </main>
      <footer className={classes.footer}>Created by: Dmitriev Ilya</footer>
    </div>
  );
};
