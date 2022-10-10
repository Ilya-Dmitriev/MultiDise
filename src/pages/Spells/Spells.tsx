import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PackOfFilters, PropsWeigthsInterface, SpellInterface, WeightsInterface } from 'types/types';

import { FilterWindow, SpellWindow, ItemLinksManager, SpellLink } from '../../components';
import { useListArrayFlipFilter } from '../../hooks/useListArrayFlipFilter';
import { useListFlipFilter } from '../../hooks/useListFlipFilter';
import { namedAndCustomSort } from '../../utils';

import spellsList from '../../mock/spells.json';

import classes from './Spells.module.scss';
import { createPackOfFilters } from '../../utils/createPackOfFilters';

const resetFilter = (
  resetPart: 'level' | 'school' | 'classes' | 'all' | string,
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

const oneToFour: WeightsInterface = Object.fromEntries(
  Array.from({ length: 9 }).map((item, index) => {
    return [index + 1, index + 1];
  }),
);

const spellsParamsWeights: PropsWeigthsInterface = {
  props: {
    level: 0,
    school: 1,
    classes: 2,
  },
  level: {
    Cantrip: 0,
    ...oneToFour,
  }

};
const spells: SpellInterface[] = namedAndCustomSort(spellsList, spellsParamsWeights.level, 'level');

const spellsFiltersStatic = createPackOfFilters(spellsList, ["name", "text"])

export const Spells: React.FC = () => {
  const [spellsFilters, setSpellsFilters] = useState<PackOfFilters>(spellsFiltersStatic)

  const classesFilteredSpells: SpellInterface[] = useListArrayFlipFilter('classes', spells, spellsFilters);
  const schoolFilteredSpells: SpellInterface[] = useListFlipFilter('school', classesFilteredSpells, spellsFilters);
  const levelFilteredSpells: SpellInterface[] = useListFlipFilter('level', schoolFilteredSpells, spellsFilters);

  const spellLinkInit = ({ name, level, school, itemClassName }: any): React.ReactElement => {
    return <SpellLink
      key={name}
      className={itemClassName}
      spell={{
        level,
        name,
        school,
      }}
      to={name.replaceAll(/\s+/gu, '-')}
    />;
  }

  return (
    <div className={classes.spells_page}>
      <ItemLinksManager
        className={classes.spells_links}
        arrayOfItems={levelFilteredSpells}
        filtersPack={spellsFilters}
        itemInitCallback={spellLinkInit}
        setFiltersPack={setSpellsFilters}
        resetFiltersPack={resetFilter}
      />
      <div className={classes.content_wrap}>
        <div className={classes.content_zone}>
          <Routes>
            <Route element={<FilterWindow
              className={classes.spell_filters}
              filtersPack={spellsFilters}
              filtersWeigths={spellsParamsWeights}
              setFiltersPack={setSpellsFilters}
              resetFiltersPack={resetFilter}
            />} path="filter" />
            <Route element={<SpellWindow className={classes.spell_content} />} path=":name" />
          </Routes>
        </div>
      </div>
    </div>
  );
};
