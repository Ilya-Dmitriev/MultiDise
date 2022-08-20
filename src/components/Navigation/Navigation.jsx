import React, { useState } from 'react'
import BaseNavLink from '../UI/Buttons/BaseNavLink.jsx'
import BaseBtn from '../UI/Buttons/BaseBtn.jsx'
import classes from './Navigation.module.scss'

const Navigation = () => {
    const [menuState, setMenuState] = useState(false)

    return (
        <nav
            className={classes.nav}
            onBlur={(e) => { if (!e.relatedTarget) setMenuState(false) }}
        >
            <BaseBtn onClick={() => { setMenuState(menuState => !menuState) }} >MENU</BaseBtn>
            <div
                className={`${classes.links} ${menuState ? `${classes.active}` : ''}`}
                onClick={(e) => { if (!e.target.ariaCurrent) setMenuState(false) }}
            >
                <BaseNavLink to='/'>Home</BaseNavLink>
                <BaseNavLink to='classes'>Classes</BaseNavLink>
                <BaseNavLink to='rases'>Rases</BaseNavLink>
                <BaseNavLink to='spells'>Spells</BaseNavLink>
                <BaseNavLink to='traits'>Traits</BaseNavLink>
                <BaseNavLink to='backgrounds'>Backgrounds</BaseNavLink>
                <BaseNavLink to='weapon'>Weapon</BaseNavLink>
                <BaseNavLink to='armor'>Armor</BaseNavLink>
                <BaseNavLink to='equipment'>Ewuipment</BaseNavLink>
                <BaseNavLink to='magic_items'>Magic Items</BaseNavLink>
                <BaseNavLink to='bestiary'>Bestiary</BaseNavLink>
            </div>
        </nav>
    )
}

export default Navigation