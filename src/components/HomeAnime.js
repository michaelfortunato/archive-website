import React, { useState }from 'react'
import { CSSTransition } from 'react-transition-group';
import Grid from './Grid.js'
import  Hero from './Hero.js'
import Name from './Name.js'
import Triangle from './Triangle.js'
import Description from './Description.js'

const defaultGridProps = {
    random: true,
    numLines: 10,
    offset: 0,
    avgDuration: 100,
    avgDelay: 2300,
    duration: 1500,
    delay: 4000,
    isDot: true,
};


const HomeAnime = (props) => {
    const [isGridDone, setIsGridDone] = useState(false)
    defaultGridProps.setIsGridDone = setIsGridDone;
    defaultGridProps.isGridDone = isGridDone;



    return(
        <div >
            <CSSTransition>
                <Grid  {...defaultGridProps} />
            </CSSTransition> 

            <div className = 'row hero'>
                    <Triangle />
                    <div style = {{'position': 'relative', 'top': '15%'}} className = 'col l6 s12'>
                        <Name firstName = 'Michael' middleName = 'Newman' lastName = 'Fortunato'/>
                        <Description desc = {'Front End'} delay = {0}/>
                        <Description desc = {"Full Stack"} delay = {2000}/>
                    </div>
                    <Triangle />
            </div>

        </div>
        );
}

export default HomeAnime;