import React, { useState } from 'react';

import BaseButton from '../UI/Buttons/BaseButton';
import BaseNavLink from '../UI/Buttons/BaseNavLink';

import classes from './Navigation.module.scss';

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);

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
        className={`${classes.links} ${menuState ? `${classes.active}` : ''}`}
        onClick={(event) => {
          if (!event.target.ariaCurrent) {
            setMenuState(false);
          }
        }}
      >
        <BaseNavLink to="/">Home</BaseNavLink>
        <BaseNavLink to="classes">Classes</BaseNavLink>
        <BaseNavLink to="rases">Rases</BaseNavLink>
        <BaseNavLink to="spells">Spells</BaseNavLink>
        <BaseNavLink to="traits">Traits</BaseNavLink>
        <BaseNavLink to="backgrounds">Backgrounds</BaseNavLink>
        <BaseNavLink to="weapon">Weapon</BaseNavLink>
        <BaseNavLink to="armor">Armor</BaseNavLink>
        <BaseNavLink to="equipment">Ewuipment</BaseNavLink>
        <BaseNavLink to="magic_items">Magic Items</BaseNavLink>
        <BaseNavLink to="bestiary">Bestiary</BaseNavLink>
      </div>
    </nav>
  );
};

export default Navigation;
