import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FilterInterface, PackOfFilters, SpellInterface, WeightsInterface } from 'types/types';

import { FilterWindow, SpellWindow, ItemLinksManager, SpellLink } from '../../components';
import { useListArrayFlipFilter } from '../../hooks/useListArrayFlipFilter';
import { useListFlipFilter } from '../../hooks/useListFlipFilter';
import { namedAndCustomSort } from '../../utils/namedAndCustomSort';

import spellsList from '../../mock/spells.json';

import classes from './Spells.module.scss';


const oneToFour: WeightsInterface = Object.fromEntries(
  Array.from({ length: 4 }).map((item, index) => {
    return [index + 1, index + 1];
  }),
);

const oneToNineFilters: FilterInterface = Object.fromEntries(
  Array.from({
    length: 9,
  }).map((value, index) => {
    return [index + 1, true];
  }),
);

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

const spellLevelWeights: WeightsInterface = {
  Cantrip: 0,
  ...oneToFour,
};
const spells: SpellInterface[] = namedAndCustomSort(spellsList, spellLevelWeights, 'level');

export const Spells: React.FC = () => {
  const [spellsFilters, setSpellsFilters] = useState<PackOfFilters>({
    level: {
      ...oneToNineFilters,
      Cantrip: true,
    },
    school: {
      Abjuration: true,
      Conjuration: true,
      Divination: true,
      Evocation: true,
      Necromancy: true,
      Transmutation: true,
    },
    classes: {
      ALCHEMIST: true,
      ARTIFICER: true,
      CLERIC: true,
      DRUID: true,
      RANGER: true,
      SORCERER: true,
      WIZARD: true,
    }
  })

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
