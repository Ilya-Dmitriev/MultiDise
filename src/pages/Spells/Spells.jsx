import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Filter, SpellLink, SpellWindow } from '../../components';
import { HidingButton, MainInput, MainNavLink } from '../../components/UI';
import { useListArrayFlipFilter } from '../../hooks/useListArrayFlipFilter';
import { useListFlipFilter } from '../../hooks/useListFlipFilter';
import { useStringFilter } from '../../hooks/useStringFilter';
import spellsList from '../../mock/spells.json';
import { namedAndCustomSort } from '../../utils/namedAndCustomSort';

import classes from './Spells.module.scss';

const oneToFour = Object.fromEntries(
  Array.from({ length: 4 }).map((item, index) => {
    return [index + 1, index + 1];
  }),
);

const oneToNineFilters = Object.fromEntries(
  Array.from({
    length: 9,
  }).map((value, index) => {
    return [index + 1, true];
  }),
);

const resetFilter = (filter, setFilter) => {
  const resetedFilter = {};
  for (const key in filter) {
    if (Object.prototype.hasOwnProperty.call(filter, key)) {
      resetedFilter[key] = true;
    }
  }

  setFilter(resetedFilter);
};

const spellLevelSort = {
  ...oneToFour,
  argument: 'level',
  Cantrip: 0,
};
const spells = namedAndCustomSort(spellsList, spellLevelSort);

export const Spells = () => {
  const [classesFilterQuery, setClassesFilterQuery] = useState({
    ALCHEMIST: true,
    ARTIFICER: true,
    CLERIC: true,
    DRUID: true,
    RANGER: true,
    SORCERER: true,
    WIZARD: true,
  });
  const classesFilteredSpells = useListArrayFlipFilter(spells, 'classes', classesFilterQuery);

  const [schoolFilterQuery, setSchoolFilterQuery] = useState({
    Abjuration: true,
    Conjuration: true,
    Divination: true,
    Evocation: true,
    Necromancy: true,
    Transmutation: true,
  });
  const schoolFilteredSpells = useListFlipFilter(classesFilteredSpells, 'school', schoolFilterQuery);

  const [levelFilterQuery, setLevelFilterQuery] = useState({
    ...oneToNineFilters,
    Cantrip: true,
  });
  const levelFilteredSpells = useListFlipFilter(schoolFilteredSpells, 'level', levelFilterQuery);

  const [nameFilterQuery, setNameFilterQuery] = useState('');
  const nameFilteredSpells = useStringFilter(levelFilteredSpells, 'name', nameFilterQuery);

  const filteredSpellLinksList = useMemo(() => {
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

  const allFiltersClear = useMemo(() => {
    let flag = 'true';

    for (const key of Object.keys(classesFilterQuery)) {
      flag = flag && classesFilterQuery[key];
    }

    for (const key of Object.keys(schoolFilteredSpells)) {
      flag = flag && schoolFilteredSpells[key];
    }

    for (const key of Object.keys(levelFilterQuery)) {
      flag = flag && levelFilterQuery[key];
    }

    flag = flag && !nameFilterQuery;

    return flag;
  }, [classesFilterQuery, schoolFilteredSpells, levelFilterQuery, nameFilterQuery]);

  const clearAllFilters = () => {
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
              clearAllFilters();
            }}
          >Clear</HidingButton>
          <MainNavLink
            className={classes.filter_btn}
            to="filter"
            variant="round"
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
