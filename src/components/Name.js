import React from 'react'
import { CSSTransition } from 'react-css-transition';
import  styled  from 'styled-components';
import { Letter, StyledLetter } from './Letter.js'
import { config } from 'react-transition-group';





const StyledName = styled.div`
    position:relative;
    top: 25%;
    display: flex;
    height: 50%;
    width: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 7vh;
    align-items: center;
    justify-content: center;

`;

const Name = (props) => {
    let config = {};
    let firstName = props.firstName.split('');
    let lastName = props.lastName.split('');

        return(<StyledName>
            {firstName.map( (char, index) => {
                config.id = index;
                config.char = char;
                config.XOffset = ((index % 2) == 0) ? -25 : 25;
                config.YOffset = ((index % 2) == 0) ? -75 : 75;
                config.duration = 400;
                config.delay = 0;
                return (
                        <Letter {...config}/>
                    
                );
            })}
            
             {lastName.map( (char, index) => {
                config.id = index
                config.char = char;
                config.XOffset = ((index % 2) == 0) ? -4 : 4;
                config.YOffset = ((index % 2) == 0) ? -75 : 75;
                config.duration = 600;
                config.delay = 400;
                return (
                        <Letter {...config}/>
                    
                );
            })}
        </StyledName>);

}

export default Name;