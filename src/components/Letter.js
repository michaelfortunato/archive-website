import React from 'react'
import  styled  from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const StyledLetter = styled.span`
    color: white;
    position: relative;
 

    

    &.letter-appear{
        transform: translate(${(props) => props.XOffset}vw, ${(props) => props.YOffset}vh); 
    }
    
    &.letter-appear-active{
        transform: translate(0, 0) ;
        transition: transform;
        transition-duration: ${(props) => props.duration}ms;
        transition-delay: ${(props) => props.delay}ms;
        transition-timing-function cubic-bezier(0.68, -0.6, 0.32, 1.6);
    
    }
    &.letter-appear-done{
        transform: translate(0, 0);
    
    }

    
`;


const Letter = (props) => {
    return (
        <CSSTransition
            appear = {true} 
            in = {true}
            classNames = 'letter'
            timeout = {props.duration + props.delay}>
            <StyledLetter 
                key = {props.id}
                XOffset = {props.XOffset}
                YOffset = {props.YOffset}
                duration = {props.duration}
                delay = {props.delay} >
                {props.char}
            </StyledLetter>
        </CSSTransition>
    );
}
export {Letter, StyledLetter}