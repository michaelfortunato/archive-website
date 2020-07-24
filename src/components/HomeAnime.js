import React, { useState }from 'react'
import { CSSTransition } from 'react-transition-group';
import Grid from './Grid.js'
import  Hero from './Hero.js'

const defaultGridProps = {
    random: true,
    numLines: 10,
    offset: 0,
    avgDuration: 100,
    avgDelay: 2300,
    isDot: true,
};


const HomeAnime = (props) => {
    const [isGridDone, setIsGridDone] = useState(false)
    defaultGridProps.setIsGridDone = setIsGridDone;



    return(
        <div>
            <Grid  {...defaultGridProps} />
            <Hero />

        </div>
        );
}

export default HomeAnime;