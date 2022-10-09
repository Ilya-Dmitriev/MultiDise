import { Outlet } from 'react-router-dom';

import { Header } from '../../components';

import classes from './PageLayout.module.scss';

export const PageLayOut: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};
