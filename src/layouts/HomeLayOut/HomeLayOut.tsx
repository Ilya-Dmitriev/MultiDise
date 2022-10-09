import { Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

import classes from './HomeLayOut.module.scss';

export const HomeLayOut = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
