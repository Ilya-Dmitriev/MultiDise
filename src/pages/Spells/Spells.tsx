import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FilterInterface, SpellInterface, WeightsInterface } from 'types/types';

import { Filter, SpellLink, SpellWindow } from '../../components';
import { HidingButton, MainInput, MainNavLink } from '../../components/UI';
import { useListArrayFlipFilter } from '../../hooks/useListArrayFlipFilter';
import { useListFlipFilter } from '../../hooks/useListFlipFilter';
import { useStringFilter } from '../../hooks/useStringFilter';
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
  filter: FilterInterface,
  setFilter: React.Dispatch<React.SetStateAction<FilterInterface>>,
): void => {
  const resetedFilter: FilterInterface = {};
  for (const key in filter) {
    if (Object.prototype.hasOwnProperty.call(filter, key)) {
      resetedFilter[key] = true;
    }
  }

  setFilter(resetedFilter);
};

const spellLevelWeights: WeightsInterface = {
  Cantrip: 0,
  ...oneToFour,
};
const spells: SpellInterface[] = namedAndCustomSort(spellsList, spellLevelWeights, 'level');

export const Spells: React.FC = () => {
  const [classesFilterQuery, setClassesFilterQuery] = useState<FilterInterface>({
    ALCHEMIST: true,
    ARTIFICER: true,
    CLERIC: true,
    DRUID: true,
    RANGER: true,
    SORCERER: true,
    WIZARD: true,
  });
  const classesFilteredSpells: SpellInterface[] = useListArrayFlipFilter('classes', spells, classesFilterQuery);

  const [schoolFilterQuery, setSchoolFilterQuery] = useState<FilterInterface>({
    Abjuration: true,
    Conjuration: true,
    Divination: true,
    Evocation: true,
    Necromancy: true,
    Transmutation: true,
  });
  const schoolFilteredSpells: SpellInterface[] = useListFlipFilter('school', classesFilteredSpells, schoolFilterQuery);

  const [levelFilterQuery, setLevelFilterQuery] = useState<FilterInterface>({
    ...oneToNineFilters,
    Cantrip: true,
  });
  const levelFilteredSpells: SpellInterface[] = useListFlipFilter('level', schoolFilteredSpells, levelFilterQuery);

  const [nameFilterQuery, setNameFilterQuery] = useState<string>('');
  const nameFilteredSpells: SpellInterface[] = useStringFilter('name', levelFilteredSpells, nameFilterQuery);

  const filteredSpellLinksList: React.ReactElement[] = useMemo(() => {
    return nameFilteredSpells.map(({ name, level, school }) => {
      return <SpellLink
        key={name}
        className={classes.spell_link_item}
        spell={{
          level,
          name,
          school,
        }}
        to={name.replaceAll(/\s+/gu, '-')}
      />;
    });
  }, [nameFilteredSpells]);

  const allFiltersClear: boolean = useMemo(() => {
    return Object.values(classesFilterQuery).every(Boolean)
      && Object.values(schoolFilterQuery).every(Boolean)
      && Object.values(levelFilterQuery).every(Boolean)
      && !nameFilterQuery;
  }, [classesFilterQuery, schoolFilterQuery, levelFilterQuery, nameFilterQuery]);

  const clearAllFilters = (): void => {
    resetFilter(levelFilterQuery, setLevelFilterQuery);
    resetFilter(schoolFilterQuery, setSchoolFilterQuery);
    resetFilter(classesFilterQuery, setClassesFilterQuery);
    setNameFilterQuery('');
  };

  const filterWindow = <div className={classes.filters_wrap}>
    <div className={classes.windiow_name}>Filters</div>
    <div className={classes.filters_windiow}>
      <Filter
        className={classes.filter}
        filter={levelFilterQuery}
        filterName="Level"
        resetFilter={resetFilter}
        setFilter={setLevelFilterQuery}
      />
      <Filter
        className={classes.filter}
        filter={schoolFilterQuery}
        filterName="School"
        resetFilter={resetFilter}
        setFilter={setSchoolFilterQuery}
      />
      <Filter
        className={classes.filter}
        filter={classesFilterQuery}
        filterName="Classes"
        resetFilter={resetFilter}
        setFilter={setClassesFilterQuery}
      />
    </div>
  </div>;

  return (
    <div className={classes.spells_page}>
      <div className={classes.spell_list}>
        <div className={classes.managebar}>
          <MainInput
            className={classes.input}
            placeholder="Search spells"
            value={nameFilterQuery}
            onChange={({ target }) => {
              setNameFilterQuery(target.value);
            }}
          />
          <HidingButton
            className={classes.clear_btn}
            visible={!allFiltersClear}
            onClick={() => {
              if (!allFiltersClear) {
                clearAllFilters();
              }
            }}
          >Clear all
          </HidingButton>
          <MainNavLink
            className={classes.filter_btn}
            to="filter"
            variant='round'
          >
            Filter
          </MainNavLink>
        </div>
        <div
          className={classes.list}
        >
          <div className={classes.list_top_shadow} />
          {filteredSpellLinksList}
          <div className={classes.list_bottom_shadow} />
        </div>
      </div>
      <div className={classes.content_wrap}>
        <div className={classes.content_zone}>
          <Routes>
            <Route element={filterWindow} path="filter" />
            <Route element={<SpellWindow className={classes.spell_content} />} path=":name" />
          </Routes>
        </div>
      </div>
    </div>
  );
};
