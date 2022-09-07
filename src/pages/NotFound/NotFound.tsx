import classes from './NotFound.module.scss';

export const NotFound: React.FC = () => {
  return <div className={classes.not_found}>
    <h1 className={classes.header}>Page not Found</h1>
  </div>;
};
