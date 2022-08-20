import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation.jsx'
import classes from './LayOut.module.scss'

const LayOut = () => {
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <Navigation />
            </header>
            <main className={classes.main}>
                <Outlet />
            </main>
            <footer className={classes.footer}>
                Created by: Dmitriev Ilya
            </footer>
        </div>
    )
}

export default LayOut