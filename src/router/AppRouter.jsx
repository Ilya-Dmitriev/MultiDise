import React from 'react'
import LayOut from '../layouts/LayOut.jsx'
import { routes } from '../router/router.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayOut />}>
                    {routes.map(({ path, element, index }) => {
                        const RouteElem = element;
                        return <Route path={path} element={<RouteElem />} index={index} key={path} />
                    })}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter