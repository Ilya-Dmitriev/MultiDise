import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PackOfFilters, ClassInterface } from 'types/types';

import { FilterWindow, ItemLinksManager, ClassLink, ClassWindow } from '../../components';
import { useListFlipFilter } from '../../hooks/useListFlipFilter';
import { namedAndCustomSort, createPackOfFilters } from '../../utils';

import classesList from '../../mock/classes.json';

import classes from './Classes.module.scss';
import { PropsWeigthsInterface } from '../../types/types';

const resetFilter = (
  resetPart: 'hitDise' | 'sourse' | 'all' | string,
  filterPack: PackOfFilters,
  setFilterPack: React.Dispatch<React.SetStateAction<PackOfFilters>>,
): void => {
  const resetedFilters: PackOfFilters = { ...filterPack };

  switch (resetPart) {
    case 'all': {
      for (const filrerName of Object.keys(filterPack)) {
        for (const key of Object.keys(filterPack[filrerName])) {
          resetedFilters[filrerName][key] = true;
        }
      }
      break;
    }
    default: {
      for (const key of Object.keys(filterPack[resetPart])) {
        resetedFilters[resetPart][key] = true;
      }
    }
  }

  setFilterPack(resetedFilters);
};

const classesParamsWeights: PropsWeigthsInterface = {
  props: {
    sourse: 0,
    hitDise: 1,
  },
  sourse: {
    PHB: 0,
    TCoE: 1,
  },
  hitDise: {
    "d6": 0,
    "d8": 1,
    "d10": 2,
    "d12": 3,
  }
}

const dndClasses: ClassInterface[] = namedAndCustomSort(classesList, classesParamsWeights.sourse, 'sourse');

const classesFiltersStatic = createPackOfFilters(classesList, ["name"])

export const Classes: React.FC = () => {
  const [classesFilters, setClassesFilters] = useState<PackOfFilters>(classesFiltersStatic)

  const hitDiseFilteredSpells: ClassInterface[] = useListFlipFilter('hitDise', dndClasses, classesFilters);
  const sourseFilteredSpells: ClassInterface[] = useListFlipFilter('sourse', hitDiseFilteredSpells, classesFilters);

  const classLinkInit = ({ name, hitDise, sourse, itemClassName }: any): React.ReactElement => {
    return <ClassLink
      key={name}
      className={itemClassName}
      dndClass={{
        name,
        hitDise,
        sourse
      }}
      to={name.replaceAll(/\s+/gu, '-')}
    />;
  }

  return (
    <div className={classes.classes_page}>
      <ItemLinksManager
        className={classes.classes_links}
        arrayOfItems={sourseFilteredSpells}
        filtersPack={classesFilters}
        itemInitCallback={classLinkInit}
        setFiltersPack={setClassesFilters}
        resetFiltersPack={resetFilter}
      />
      <div className={classes.content_wrap}>
        <div className={classes.content_zone}>
          <Routes>
            <Route element={<span></span>} path="/" />
            <Route element={<FilterWindow
              className={classes.class_filters}
              filtersPack={classesFilters}
              filtersWeigths={classesParamsWeights}
              setFiltersPack={setClassesFilters}
              resetFiltersPack={resetFilter}
            />} path="filter" />
            <Route element={<ClassWindow className={classes.class_content} />} path=":name" />
          </Routes>
        </div>
      </div>
    </div>
  );
};
