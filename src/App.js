import React from 'react'

import './css/index.css'
import './css/materialize.css'

import Navbar from './components/Nav/Navbar.js'
import HomeAnime from './components/HomeAnime.js'


class App extends React.Component{
    render() {
        return (
            <div id = 'App'>
                <Navbar />
                <HomeAnime />
                
            </div>
        )
    }
}

export default App