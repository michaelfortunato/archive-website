import React from 'react';
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group';



    const w = window.innerWidth;
    const h = window.innerHeight;
    const circleSize = 10; //in pixels

    const circleXScaling = circleSize/w;
    const circleYScaling = circleSize/h;


const StyledGridline = styled.div`
    position: absolute;
    background: #6699CC;


    height: ${(props) => props.isRow ? `${circleSize}px` : '100%'};
    width: ${(props) => props.isRow ? '100%' : `${circleSize}px`};
    top: ${(props) => props.isRow ? `${props.fixedPos}%`:  'initial'};
    left: ${(props) => props.isRow ? 'initial':  `${props.fixedPos}%`};
    
    transform-origin: ${(props) => props.isRow ? `${props.floatingPos}%` : '50%'}
                        ${(props) => props.isRow ? '50%' : `${props.floatingPos}%`};
    



    &.line-appear, &.line-enter {
        border-radius: 50%;
        transform: ${(props) => props.isRow ? `scaleX(${circleXScaling})` : `scaleY(${circleYScaling})`};    
    }
    &.line-appear-active, &.line-enter-active {
        border-radius: 0%;
        
        transform: ${(props) => props.isRow ? `scaleX(1) scaleY(.1)` : `scaleY(1) scaleX(.1)`};  

        transition-duration: ${(props) => props.duration}ms; 
        transition-delay: ${(props) => props.delay}ms; 
        transition-property: all;

        will-change: transform;
    }
    &.line-appear-done, &.line-enter-done{
        transform: ${(props => props.isRow ? 'scaleX(1) scaleY(.1)': 'scaleY(1) scaleX(.1)')};
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