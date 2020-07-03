import React from 'react'

import Grid from './Grid.js'
import Name from './Name.js'

class HomeAnime extends React.Component {
    constructor(props){
        super(props);
        this.toggleGridEntered = this.toggleGridEntered.bind(this);
        this.toggleNameEntered = this.toggleNameEntered.bind(this);
        this.state = {
            gridEntered: false, 
            nameEntered: false
        };
    }
    
}

export default HomeAnime;