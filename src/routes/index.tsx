//import React from 'react'

import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LandingPage from "../pages/LandingPage";
const RoutesMap = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={LandingPage} path="/"></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesMap