import React from 'react'
import { CSSTransition } from 'react-css-transition';
import  styled  from 'styled-components';
import { Letter, StyledLetter } from './Letter.js'
import { config } from 'react-transition-group';





const StyledName = styled.div`
    position:relative;
    top:33.333%;
    display: flex;
    width: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 5vw;
    justify-content: center;

`;

const Name = (props) => {
    let config = {};
    let firstName = props.firstName.split('');
    let lastName = props.lastName.split('');

        return(
            
            <StyledName className = 'col s6'>
            <StyledName>
            {firstName.map( (char, index) => {
                config.id = index;
                config.char = char;
                config.XOffset = ((index % 2) == 0) ? 25 : -25;
                config.YOffset = ((index % 2) == 0) ? -75 : 75;
                config.duration = 700;
                config.delay = 3000 + index * 1000;
                return (
                        <Letter {...config}/>
                    
                );
            })}
           </StyledName>
        
            
        
             {lastName.map( (char, index) => {
                config.id = index
                config.char = char;
                config.XOffset = ((index % 2) == 0) ? 25 : -25;
                config.YOffset = ((index % 2) == 0) ? -75 : 75;
                config.duration = 400;
                config.delay = 10000 + 3000 + index * 1000;
                return (
                        <Letter {...config}/>
                    
                );
            })}
        </StyledName>);

}

export default Name;