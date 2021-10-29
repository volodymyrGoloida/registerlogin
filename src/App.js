import React from 'react'

import Register from './pages/Register'
import Login from './pages/Login'
import { Route } from 'react-router-dom'
function App() {
    return (
        <>
            <Route exact path="/" component={Register} />
            <Route exact path="/login" component={Login} />
        </>
    )
}

export default App
