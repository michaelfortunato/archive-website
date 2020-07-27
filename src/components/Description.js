import React from 'react'
import styled, { keyframes } from 'styled-components'

const CaroselKeyframe = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }
    
    20%, 25%, 30% {
        opacity:1;
        transform: translateY(0);
    }
    50%, 100% {
        opacity:0;
        transform: translateY(100px);
    }
`;

const StyledDesc = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    opacity: 0;
    transform: translateY(-100px);
    font-size: 50px;
    color: white;


    /* @keyframes duration | timing-function | delay | 
    iteration-count | direction | fill-mode | play-state | name */
    animation: ${CaroselKeyframe} 4s ease-in-out ${(props) => props.delay}ms infinite ;

`;

const Description = (props) => {
    return (
        <StyledDesc delay = {props.delay}>
            {props.desc}
        </StyledDesc>
    );
}

export default Description;