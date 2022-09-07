import { useState } from 'react'
import { MainButton, MainNavLink } from '../UI';
import { LinkPath } from 'types/types';

import clsx from 'clsx';
import classes from './Navigation.module.scss';

interface NavigationProps {
  adressList: LinkPath[]
}

export const Navigation: React.FC<NavigationProps> = ({ adressList }) => {
  const [menuState, setMenuState] = useState<Boolean>(false);
  const linksList: React.ReactElement[] = adressList.map((adress) => {
    return <MainNavLink key={adress.key} to={adress.path}>{adress.title}</MainNavLink>;
  });
  const linksClasses: string = clsx(classes.links, menuState && classes.active);

  return (
    <nav
      className={classes.nav}
      onBlur={(event) => {
        return !event.relatedTarget && setMenuState(false);
      }}
    >
      <MainButton
        onClick={(): void => {
          setMenuState((previous) => {
            return !previous;
          });
        }}
      >
        MENU
      </MainButton>
      <div
        className={linksClasses}
        //TODO: выяснить как сделать правильно
        onClick={(event: React.MouseEvent<HTMLDivElement>): void => {
          if (!(event.target as Element).className.includes('active')) {
            setMenuState(false);
          }
        }}
      >
        {linksList}
      </div>
    </nav>
  );
};
