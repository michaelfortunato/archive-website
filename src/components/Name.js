import React from 'react'
import { CSSTransition } from 'react-css-transition';
import  styled  from 'styled-components';
import { Letter, StyledLetter } from './Letter.js'
import { config } from 'react-transition-group';




const randomArcPoint = (radius) => {
    let theta = (2 * Math.random() * Math.PI);
    return ({x: radius * Math.cos(theta), y: radius *Math.sin(theta) });
}

const StyledName = styled.div`
    position:relative;
    top:33.333%;
    display: flex;
    width: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 50px;
    justify-content: center;

`;

const Name = (props) => {
    let config = {};
    let firstName = props.firstName.split('');
    let lastName = props.lastName.split('');

        return(
            
            <StyledName className = 'col s6'>
            {firstName.map( (char, index) => {
                config.id = index;
                config.char = char;
                config.XOffset = randomArcPoint(25).x;   //((index % 2) == 0) ?  : ;
                config.YOffset = randomArcPoint(25).y; //((index % 2) == 0) ? -25 : 25;
                config.duration = 500;
                config.delay = 4000;
                return (
                        <Letter {...config}/>
                    
                );
            })}
        
            
        
             {lastName.map( (char, index) => {
                config.id = index
                config.char = char;
                config.XOffset = randomArcPoint(25).y;// ((index % 2) == 0) ? 25 : -25;
                config.YOffset = randomArcPoint(25).x;//((index % 2) == 0) ? -75 : 75;
                config.duration = 500;
                config.delay = 4000; 
                return (
                        <Letter {...config}/>
                    
                );
            })}
        </StyledName>);

}

export default Name;