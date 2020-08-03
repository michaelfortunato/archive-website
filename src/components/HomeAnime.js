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
    top: 13%;

`;

class HomeAnime extends React.Component{
    render(){
        return(
            <div >
                <Grid  {...defaultGridProps} />
                <div className = 'row hero'>
                        <div style = {{'height': '50%'}} className = 'col l4 s0 ' id = 'LT'>
                            <Triangle containerID = "LT"/>
                        </div>
                        <StyledBanner className = 'col l4 s12'>
                            <Name firstName = 'Michael' middleName = 'Newman' lastName = 'Fortunato'/>
                            <Description />
                        </StyledBanner>
                        <div style = {{'height': '50%'}} className = 'col l4 s0' id = 'RT'>
                            <Triangle containerID = "RT"/>
                        </div>
                </div>

            </div>
        );
    }
}

export default HomeAnime;