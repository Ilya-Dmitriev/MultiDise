import React, { useState } from 'react';

import { Spell, SpellFilter } from '../../components';
import { BaseButton, BaseInput, Modal } from '../../components/UI';
import { useStringFilter } from '../../hooks/useStringFilter';
import spellsList from '../../mock/spells.json';
import { namedAndCustomSort } from '../../utils/namedAndCustomSort';

import classes from './Spells.module.scss';

const oneToFour = Object.fromEntries(
  Array.from({ length: 4 }).map((item, index) => {
    return [index, index];
  }),
);

export const Spells = () => {
  const spellLevelSort = {
    ...oneToFour,
    argument: 'level',
    Cantrip: 0,
  };
  const spells = namedAndCustomSort(spellsList, spellLevelSort);
  const [spellsState, setSpellsState] = useState(spells);
  const [filterQuery, setFilterQuery] = useState('');
  const nameFilteredSpells = useStringFilter(spellsState, 'name', filterQuery);
  const [modal, setModal] = useState(true);

  return (
    <>
      <div className={classes.managebar}>
        <BaseInput
          className={classes.input}
          placeholder="Search spells"
          onChange={({ target }) => {
            setFilterQuery(target.value);
          }}
        />
        <BaseButton
          className={classes.filters_btn}
          onClick={() => {
            setModal(true);
          }}
        >
          Filters
        </BaseButton>
        <Modal className={classes.filters_modal} setVisible={setModal} visible={modal}>
          <div className={classes.modal_name}>Filters</div>
          <hr />
          <SpellFilter setSpells={setSpellsState} spells={spellsState} />
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
