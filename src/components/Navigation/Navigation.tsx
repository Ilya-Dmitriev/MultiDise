import { useState } from 'react';
import { MenuButton, MainNavLink } from '../UI';
import { LinkNamedBundles } from 'types/types';

import clsx from 'clsx';
import classes from './Navigation.module.scss';


interface NavigationProps {
  adressBundles: LinkNamedBundles[],
  className?: string,
}

export const Navigation: React.FC<NavigationProps> = ({ adressBundles, className }) => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const linksList: React.ReactElement[] = adressBundles.map((bundle) => {
    return <div
      className={classes.link_bundle}
      key={bundle.key}
    >
      <div
        className={classes.bundle_name}
      >
        {bundle.name}
      </div>
      {bundle.paths.map((adress) => {
        return <MainNavLink
          key={adress.key}
          to={adress.path}
          className={classes.link}
          variant='default'
        >
          {adress.title}
        </MainNavLink>;
      })}
    </div>
  });

  const linksClasses: string = clsx(
    classes.links,
    menuState && classes.active
  );

  const navClasses: string = clsx(
    className,
    classes.nav
  )

  return (
    <nav
      className={navClasses}
    >
      <MenuButton
        active={menuState}
        className={classes.menu_btn}
        onClick={(): void => {
          setMenuState((previous) => {
            return !previous;
          });
        }}
      >
        MENU
      </MenuButton>
      <div
        className={linksClasses}
        onClick={() => {
          if (!menuState) {
            setMenuState(false);
          }
        }}
      >
        {linksList}
      </div>
    </nav>
  );
};
