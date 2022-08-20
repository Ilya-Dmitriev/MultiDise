import React, { useState } from 'react'
import Spell from '../../components/Spell/Spell.jsx'
import BaseInput from '../../components/UI/BaseInput/BaseInput.jsx'
import spellsList from "../../mock/spells.json"
import BaseBtn from '../../components/UI/Buttons/BaseBtn.jsx'
import classes from './Spells.module.scss'
import { useFilter } from '../../hooks/useFilter.js'
import { namedAndCustomSort } from '../../utils/namedAndCustomSort.js'
import Modal from '../../components/UI/Modal/Modal.jsx'

const Spells = () => {
    const spellLevelSort = {
        argument: 'level',
        Cantrip: 0,
        '1st': 1,
        '2nd': 2,
        '3rd': 3,
        '4th': 4,
    }
    const [spells, setSpells] = useState(namedAndCustomSort(spellsList, spellLevelSort))
    const [filterQuery, setFilterQuery] = useState('')
    const nameFilteredSpells = useFilter(spells, 'name', filterQuery)
    const [modal, setModal] = useState(false)

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
                    <div className={classes.filter_bar}>
                        <strong className={classes.filter_name}>Level</strong>
                        <div
                            className={classes.filter_swich}
                            onClick={(e) => { console.log(e.currentTarget === e.target) }}
                        >
                            <span>Cantrip</span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className={classes.list}>
                {nameFilteredSpells.map((spell) =>
                    <Spell key={spell.name} spell={spell} />)}
            </div>
        </>
    )
}

export default Spells