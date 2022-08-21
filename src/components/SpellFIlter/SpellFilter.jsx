import React, { useEffect, useState } from 'react'
import classes from './SpellFIlter.module.scss'
import { useListFilter } from '../../hooks/useListFilter.js'

const SpellFilter = ({ spells, setSpells }) => {
    const [levelFilterQuery, setLevelFilterQuery] = useState({
        Cantrip: true,
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true,
    })
    const levelFilteredSpells = useListFilter(spells, 'level', levelFilterQuery)
    const onFiltersChange = (event) => {
        if (!(event.currentTarget === event.target)) {
            setLevelFilterQuery({
                ...levelFilterQuery,
                [event.target.innerHTML]: !levelFilterQuery[event.target.innerHTML]
            })
            console.log(1);
        }
        setSpells(levelFilteredSpells)
    }

    return (
        <>
            <div className={classes.filter_bar}>
                <strong className={classes.filter_name}>Level</strong>
                <div
                    className={classes.filter_swich}
                    onClick={onFiltersChange}
                >
                    {Object.keys(levelFilterQuery)
                        .sort((x, y) => x == "Cantrip" ? -1 : y == "Cantrip" ? 1 : 0)
                        .map(elem => <span
                            key={elem}
                            className={`${classes.filter_key} ${levelFilterQuery[elem] ? '' : classes.active}`}
                        >{elem}</span>)}
                </div>
            </div>
        </>
    )
}

export default SpellFilter