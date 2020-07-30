import React, { useState }from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Grid from './Grid.js';
import Name from './Name.js';
import Triangle from './Triangle.js';
import Description from './Description.js';


const defaultGridProps = {
    random: true,
    numLines: 10,
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
                    <div style = {{'opacity': '0'}} className = 'col l3 s0'>df</div>
                    <StyledBanner className = 'col l6 s12'>
                        <Name firstName = 'Michael' middleName = 'Newman' lastName = 'Fortunato'/>
                        <Description />
                    </StyledBanner>
                    <div style = {{'opacity': '0'}} className = 'col l3 s0'> df</div>
            </div>

        </div>
        );
}

export default HomeAnime;