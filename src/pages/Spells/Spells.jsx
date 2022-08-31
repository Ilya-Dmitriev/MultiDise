import React, { useState } from 'react';

import { Filter, Modal, Spell } from '../../components';
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
  const classFilteredSpells = useListArrayFlipFilter(spells, 'classes', classesFilterQuery);

  const [schoolFilterQuery, setSchoolFilterQuery] = useState({
    Abjuration: true,
    Conjuration: true,
    Divination: true,
    Evocation: true,
    Necromancy: true,
    Transmutation: true,
  });
  const schoolFilteredSpells = useListFlipFilter(classFilteredSpells, 'school', schoolFilterQuery);

  const [levelFilterQuery, setLevelFilterQuery] = useState({
    ...oneToNineFilters,
    Cantrip: true,
  });
  const levelFilteredSpells = useListFlipFilter(schoolFilteredSpells, 'level', levelFilterQuery);

  const [nameFilterQuery, setNameFilterQuery] = useState('');
  const nameFilteredSpells = useStringFilter(levelFilteredSpells, 'name', nameFilterQuery);

  const clearAllFilters = () => {
    resetFilter(levelFilterQuery, setLevelFilterQuery);
    resetFilter(schoolFilterQuery, setSchoolFilterQuery);
    resetFilter(classesFilterQuery, setClassesFilterQuery);
  };

  const [content, setContent] = useState('simple');

  return (
    <div className={classes.spells_page}>
      <div className={classes.spell_list}>
        <div className={classes.managebar}>
          <MainInput
            className={classes.input}
            placeholder="Search spells"
            onChange={({ target }) => {
              setNameFilterQuery(target.value);
            }}
          />
          <Modal buttonClassName={classes.modal_btn} className={classes.filters_modal} modalName="Filters">
            <div className={classes.modal_name}>Filters</div>
            <hr />
            <Filter
              className={classes.modal_filter}
              filter={levelFilterQuery}
              filterName="Level"
              resetFilter={resetFilter}
              setFilter={setLevelFilterQuery}
            />
            <Filter
              className={classes.modal_filter}
              filter={schoolFilterQuery}
              filterName="School"
              resetFilter={resetFilter}
              setFilter={setSchoolFilterQuery}
            />
            <Filter
              className={classes.modal_filter}
              filter={classesFilterQuery}
              filterName="Classes"
              resetFilter={resetFilter}
              setFilter={setClassesFilterQuery}
            />
          </Modal>
          <MainButton
            variant="round"
            onClick={() => {
              clearAllFilters();
            }}
          >Clear all</MainButton>
        </div>
        <div
          className={classes.list}
          onClick={(event) => {
            setContent(event.target.innerHTML);
          }}
        >
          <div className={classes.list_top_shadow} />
          {nameFilteredSpells.map((spell) => {
            return <Spell key={spell.name} className={classes.spell_item} spell={spell} />;
          })}
          <div className={classes.list_bottom_shadow} />
        </div>
      </div>
      <div className={classes.content_wrap}>
        <div className={classes.content_zone}>
          {content}
        </div>
      </div>
    </div>
  );
};
