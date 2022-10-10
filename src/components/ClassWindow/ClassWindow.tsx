import { useParams } from 'react-router-dom';
import { ClassInterface } from 'types/types';

import dndClasses from '../../mock/classes.json';

import clsx from 'clsx';
import classes from './ClassWindow.module.scss';

const nullClass: ClassInterface = {
  name: 'Class not found',
  sourse: '---',
  hitDise: '---',
};

interface ClassWindowProps {
  className: string
}

export const ClassWindow: React.FC<ClassWindowProps> = ({ className }) => {
  const { name } = useParams();
  const dndClass: ClassInterface = dndClasses.find((someClass: ClassInterface) => {
    return someClass.name === name!.replaceAll(/-/gu, ' ');
  }) || nullClass;

  const windowClasses: string = clsx(className, classes.class_window);

  return (
    <div className={windowClasses}>
      <div className={classes.header}>
        <div className={classes.name}>
          <b>{dndClass.name}</b>
        </div>
        <div className={classes.sourse}>
          {dndClass.sourse}
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.hit_dise}>
          {dndClass.hitDise}
        </div>
      </div>
    </div>
  );
};
