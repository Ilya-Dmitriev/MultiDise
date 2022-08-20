import React from 'react'
import classes from './BaseBtn.module.scss'

const BaseBtn = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`${className || ''} ${classes.btn}`}>
            {children}
        </button >
    )
}

export default BaseBtn