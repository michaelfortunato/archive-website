import React, { useState }from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Grid from './Grid.js';
import Name from './Name.js';
import Triangle from './Triangle.js';
import Description from './Description.js';


const defaultGridProps = {
    random: true,
    numLines: 12,
    offset: 0,
    avgDuration: 200,
    avgDelay: 3000,
    duration: 1500,
    delay: 6000,
    isDot: true,
};

const StyledBanner = styled.div`
    position: relative;
    top: 14%;

`;

const HomeAnime = (props) => {



    return(
        <div >
            <Grid  {...defaultGridProps} />
            <div className = 'row hero'>
                    <div className = 'col l2 s0 ' id = 'left-screen'>
                        df
                        <Triangle containerID = 'left-screen'/>
                    </div>
                    <StyledBanner className = 'col l8 s12'>
                        <Name firstName = 'Michael' middleName = 'Newman' lastName = 'Fortunato'/>
                        <Description />
                    </StyledBanner>
                    <div id = 'right-screen' className = 'col l2 s0'>
                        df
                        <Triangle containerID = 'right-screen'/>
                    </div>
            </div>

        </div>
        );
}

export default HomeAnime;