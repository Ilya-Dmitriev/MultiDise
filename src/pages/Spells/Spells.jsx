import React, { useState } from 'react';

import { Modal, Spell, SpellFilter } from '../../components';
import { MainButton, MainInput } from '../../components/UI';
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

export const Spells = () => {
  const spellLevelSort = {
    ...oneToFour,
    argument: 'level',
    Cantrip: 0,
  };
  const [levelFilterQuery, setLevelFilterQuery] = useState({
    ...oneToNineFilters,
    Cantrip: true,
  });
  const [schoolFilterQuery, setSchoolFilterQuery] = useState({
    Abjuration: true,
    Conjuration: true,
    Divination: true,
    Evocation: true,
    Necromancy: true,
    Transmutation: true,
  });
  const [classesFilterQuery, setClassesFilterQuery] = useState({
    ALCHEMIST: true,
    ARTIFICER: true,
    CLERIC: true,
    DRUID: true,
    RANGER: true,
    SORCERER: true,
    WIZARD: true,
  });
  const spells = namedAndCustomSort(spellsList, spellLevelSort);
  const [filterQuery, setFilterQuery] = useState('');
  const classFilteredSpells = useListArrayFlipFilter(spells, 'classes', classesFilterQuery);
  const schoolFilteredSpells = useListFlipFilter(classFilteredSpells, 'school', schoolFilterQuery);
  const levelFilteredSpells = useListFlipFilter(schoolFilteredSpells, 'level', levelFilterQuery);
  const nameFilteredSpells = useStringFilter(levelFilteredSpells, 'name', filterQuery);
  const clearAllFilters = () => {
    resetFilter(levelFilterQuery, setLevelFilterQuery);
    resetFilter(schoolFilterQuery, setSchoolFilterQuery);
    resetFilter(classesFilterQuery, setClassesFilterQuery);
  };

  return (
    <>
      <div className={classes.managebar}>
        <MainInput
          className={classes.input}
          placeholder="Search spells"
          onChange={({ target }) => {
            setFilterQuery(target.value);
          }}
        />
        <Modal className={classes.filters_modal} modalName="Filters">
          <div className={classes.modal_name}>Filters</div>
          <hr />
          <SpellFilter
            className={classes.modal_filter}
            filterName="Level"
            resetFilter={resetFilter}
            setSpellsFilter={setLevelFilterQuery}
            spellsFilter={levelFilterQuery}
          />
          <SpellFilter
            className={classes.modal_filter}
            filterName="School"
            resetFilter={resetFilter}
            setSpellsFilter={setSchoolFilterQuery}
            spellsFilter={schoolFilterQuery}
          />
          <SpellFilter
            className={classes.modal_filter}
            filterName="Classes"
            resetFilter={resetFilter}
            setSpellsFilter={setClassesFilterQuery}
            spellsFilter={classesFilterQuery}
          />
        </Modal>
        <MainButton
          className={classes.clear_btn}
          onClick={() => {
            clearAllFilters();
          }}
        >Clear all</MainButton>
      </div>
      <div className={classes.list}>
        {nameFilteredSpells.map((spell) => {
          return <Spell key={spell.name} spell={spell} />;
        })}
      </div>
    </>
  );
};
