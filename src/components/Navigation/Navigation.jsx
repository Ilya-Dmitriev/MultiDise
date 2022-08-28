import React, { useState } from 'react';

import { MainButton, MainNavLink } from '../UI';

import clsx from 'clsx';
import classes from './Navigation.module.scss';

export const Navigation = ({ adressList }) => {
  const [menuState, setMenuState] = useState(false);
  const linksList = adressList.map((adress) => {
    return <MainNavLink key={adress.path} to={adress.path}>{adress.title}</MainNavLink>;
  });
  const linksClasses = clsx(classes.links, menuState && classes.active);

  return (
    <nav
      className={classes.nav}
      onBlur={(event) => {
        return !event.relatedTarget && setMenuState(false);
      }}
    >
      <MainButton
        onClick={() => {
          setMenuState((previous) => {
            return !previous;
          });
        }}
      >
        MENU
      </MainButton>
      <div
        className={linksClasses}
        onClick={(event) => {
          if (!event.target.ariaCurrent) {
            setMenuState(false);
          }
        }}
      >
        {linksList}
      </div>
    </nav>
  );
};
