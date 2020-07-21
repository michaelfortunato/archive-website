import React from 'react';
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group';



    const w = window.innerWidth;
    const h = window.innerHeight;

const StyledGridline = styled.div`
    position: relative;
    background: #6699CC;


    height: ${(props => props.isRow ? '1vw' : '100vh')};
    width: ${(props => props.isRow ? '100vw' : '1vh')};
    top: ${(props) => props.isRow ? `${props.fixedPos}%`:  'initial'};
    left: ${(props) => props.isRow ? 'initial':  `${props.fixedPos}%`};
    
    transform-origin: ${(props) => props.isRow ? `${props.floatingPos}%` : '50%'}
    ${(props) => props.isRow ? '50%' : `${props.floatingPos}%`};
    



    &.line-appear, &.line-enter {
        border-radius: 50%;
        transform: scaleX(.01) 
    
    }
    
    &.line-appear-active, &.line-enter-active {
        border-radius: 0%;
        
        transform: scaleX(1) scaleY(.1);

        transition-duration: ${(props) => props.duration}ms; 
        transition-delay: ${(props) => props.delay}ms; 
        transition-property: all;
    }
    &.line-appear-done, &.line-enter-done{
    
        transform: scaleX(1) scaleY(.1);
    
    }
`;


const Gridline = (props) => {
    return(
        <CSSTransition
        in = {true}
        appear =  {true}
        classNames = "line"
        timeout={props.duration + props.delay}>
            <StyledGridline {...props}/>
        </CSSTransition>   
    );
};


export default Gridline;