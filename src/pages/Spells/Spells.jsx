import React, { useState } from 'react'
import Spell from '../../components/Spell/Spell.jsx'
import BaseInput from '../../components/UI/BaseInput/BaseInput.jsx'
import spellsList from "../../mock/spells.json"
import classes from './Spells.module.scss'
import { useSrtingFilter } from '../../hooks/useSrtingFilter.js'
import { namedAndCustomSort } from '../../utils/namedAndCustomSort.js'
import SpellFilter from '../../components/SpellFIlter/SpellFilter.jsx'
import Modal from '../../components/UI/Modal/Modal.jsx'
import BaseBtn from '../../components/UI/Buttons/BaseBtn.jsx'

const Spells = () => {
    const spellLevelSort = {
        argument: 'level',
        Cantrip: 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
    }
    const spells = namedAndCustomSort(spellsList, spellLevelSort)
    const [spellsState, setSpellsState] = useState(spells)
    const [filterQuery, setFilterQuery] = useState('')
    const nameFilteredSpells = useSrtingFilter(spellsState, 'name', filterQuery)
    const [modal, setModal] = useState(true)

    return (
        <>
            <div className={classes.managebar}>
                <BaseInput
                    placeholder='Search spells'
                    className={classes.input}
                    onChange={(e) => { setFilterQuery(e.target.value) }}
                />
                <BaseBtn
                    className={classes.filters_btn}
                    onClick={() => { setModal(true) }}>Filters</BaseBtn>
                <Modal
                    className={classes.filters_modal}
                    visible={modal}
                    setVisible={setModal}
                >
                    <div className={classes.modal_name}>Filters</div>
                    <hr />
                    <SpellFilter spells={spellsState} setSpells={setSpellsState} />
                </Modal>
            </div >
            <div className={classes.list}>
                {nameFilteredSpells.map((spell) =>
                    <Spell key={spell.name} spell={spell} />)}
            </div>
        </>
    )
}

export default Spells