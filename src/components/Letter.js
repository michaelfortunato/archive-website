import React from 'react'
import  styled  from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const StyledLetter = styled.span`
    position: relative;
    display:inline-block;

    transform: translate(0, 0);

    &.letter-appear, &.letter-enter{
        transform: translate(${(props) => props.XOffset}vw, ${(props) => props.YOffset}vh); 
    }
    
    &.letter-appear-active, &.letter-enter-active{

        transform: translate(0, 0);

        transition: all;
       
        transition-duration: ${(props) => props.duration}ms;
        transition-delay: ${(props) => props.delay}ms;
        



    
    
    }
    &.letter-appear-done, &.letter-enter-done{
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