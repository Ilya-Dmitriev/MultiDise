import React, { useState } from 'react';

import { BaseButton, BaseNavLink } from '../UI';

import clsx from 'clsx';
import classes from './Navigation.module.scss';

export const Navigation = ({ adressList }) => {
  const [menuState, setMenuState] = useState(false);
  const linksList = adressList.map((adress) => {
    return <BaseNavLink key={adress.path} to={adress.path}>{adress.title}</BaseNavLink>;
  });
  const linksClasses = clsx(classes.links, menuState && classes.active);

  return (
    <nav
      className={classes.nav}
      onBlur={(event) => {
        return !event.relatedTarget && setMenuState(false);
      }}
    >
      <BaseButton
        onClick={() => {
          setMenuState((previous) => {
            return !previous;
          });
        }}
      >
        MENU
      </BaseButton>
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
