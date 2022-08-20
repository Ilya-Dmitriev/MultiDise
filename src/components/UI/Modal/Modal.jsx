import React from 'react'
import classes from './Modal.module.scss'

const Modal = ({ className, visible, setVisible, children }) => {
    return (
        <div
            className={`${classes.modal} ${visible ? classes.active : ''} ${className}`}
            onClick={() => { setVisible(false) }}
        >
            <div
                className={classes.modal_content}
                onClick={(e) => { e.stopPropagation() }}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal