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
    /* @keyframes duration | timing-function | delay | 
    iteration-count | direction | fill-mode | play-state | name */
    transform: translateY(-100px);
    animation: ${CaroselKeyframe} 4s ease-in-out ${(props) => props.delay}ms infinite ;
    font-size: 20px;
`;

const Description = (props) => {
    return (
        <StyledDesc delay = {props.delay}>
            Desc {props.desc}
        </StyledDesc>
    );
}

export default Description;