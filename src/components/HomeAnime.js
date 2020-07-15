import React from 'react'

import Grid from './Grid.js'
import { CSSTransition } from 'react-transition-group';
import  Name from './Name.js'


const HomeAnime = (props) => {
    let defaultProps = {
        random: 1,
        spacing: 6,
        offset: 0,
        avgDuration: 300,
        avgDelay: 2700,
        isDot: 1,
    };
    return (<Grid {...defaultProps}/>);
}


/*
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
            <Grid />
                <div className = 'hero row '>
                    <div className = 'col s3'>
                        {Triangle Here }
                        dsf
                    </div>
                    <div className = ' col s6'>
                    <Name firstName = 'Michael' lastName = 'Fortunato'/>
                    </div>
                    <div className = 'col s3'>
                        dsfsd
                    </div>
                </div>
            </div>
        );
    }
}
*/
export default HomeAnime;