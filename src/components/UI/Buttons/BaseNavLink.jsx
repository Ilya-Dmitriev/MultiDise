import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './BaseBtn.module.scss'


const BaseNavLink = ({ children, className, ...props }) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) => `${classes.btn} ${isActive ? classes.active : ''}`}
        > {children}</NavLink >
    )
}

export default BaseNavLink