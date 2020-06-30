import React from 'react'


import './css/index.css'
import './css/materialize.css'

import Grid from './components/Grid.js'
import Navbar from './components/Navbar.js'

class App extends React.Component{
    render() {
        return (
            <div id = 'App'>
                <Navbar />
                <Grid />
            </div>
        )
    }
}

export default App