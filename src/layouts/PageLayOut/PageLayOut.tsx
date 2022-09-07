import { Outlet } from 'react-router-dom';

import { Navigation } from '../../components';
import { mainAsdressList } from '../mainAsdressList';

import classes from './PageLayout.module.scss';

export const PageLayOut: React.FC = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navigation adressList={mainAsdressList} />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};
