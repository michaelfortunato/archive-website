import React from 'react'

import Grid from './Grid.js'
import { CSSTransition } from 'react-transition-group';
import Name from './Name.js'

class HomeAnime extends React.Component {
    constructor(props){
        super(props);
        this.setGridEntered = this.setGridEntered.bind(this);
        //this.toggleNameEntered = this.toggleNameEntered.bind(this);
        this.state = {
            gridEntered: false, 
            nameEntered: false
        };
    }
    setGridEntered() {
        this.setState({ gridEntered: true});
    }
    render(){
        return(
            <div>
            <Grid setGridEntered = {this.setGridEntered}/>
                <div className = 'hero row '>

                    <Name />
                </div>
            </div>
        );
    }
}

export default HomeAnime;