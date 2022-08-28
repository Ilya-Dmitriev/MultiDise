import React, { useState } from 'react';

import { Spell, SpellFilter } from '../../components';
import { MainButton, MainInput, Modal } from '../../components/UI';
import { useListFilter } from '../../hooks/useListFilter';
import { useStringFilter } from '../../hooks/useStringFilter';
import spellsList from '../../mock/spells.json';
import { namedAndCustomSort } from '../../utils/namedAndCustomSort';

import classes from './Spells.module.scss';

const oneToFour = Object.fromEntries(
  Array.from({ length: 4 }).map((item, index) => {
    return [index, index];
  }),
);

const oneToNineFilters = Object.fromEntries(
  Array.from({
    length: 9,
  }).map((value, index) => {
    return [index + 1, true];
  }),
);

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
  const spells = namedAndCustomSort(spellsList, spellLevelSort);
  const [filterQuery, setFilterQuery] = useState('');
  const levelFilteredSpells = useListFilter(spells, 'level', levelFilterQuery);
  const nameFilteredSpells = useStringFilter(levelFilteredSpells, 'name', filterQuery);
  const [modal, setModal] = useState(true);

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
        <MainButton
          className={classes.filters_btn}
          onClick={() => {
            setModal(true);
          }}
        >
          Filters
        </MainButton>
        <Modal className={classes.filters_modal} setVisible={setModal} visible={modal}>
          <div className={classes.modal_name}>Filters</div>
          <hr />
          <SpellFilter setSpellsFilter={setLevelFilterQuery} spellsFilter={levelFilterQuery} />
        </Modal>
      </div>
      <div className={classes.list}>
        {nameFilteredSpells.map((spell) => {
          return <Spell key={spell.name} spell={spell} />;
        })}
      </div>
    </>
  );
};
