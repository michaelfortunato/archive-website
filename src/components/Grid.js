import React from 'react'
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import Gridline from './Gridline.js';

const StyledGrid = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow:hidden;

    //transform: scaleY(2) rotate(45deg);

    &.fade-out-appear, &.fade-out-enter{
        opacity: 1;
    }
    &.fade-out-appear-active, &.fade-out-enter-active{
        opacity: 0;
        transition: opacity;
        transition-duration: ${(props) => props.duration}ms;
        transition-delay: ${(props) => props.delay}ms;
    }
    &.fade-out-appear-done, &.fade-out-enter-done{
        opacity: 0;
    }


`
const randn_bm = () => {
    let u = 0;
    let v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}




const MIN_DURATION = 400;
const MIN_DELAY = 1800;

const position = (i, spacing, offset, random) => {
    let fixedPos = offset + spacing * i;
    let floatingPos = 100 * (random ? Math.random(): 0);
    return {fixedPos: fixedPos, floatingPos: floatingPos};
}

const timing = (avgDuration, avgDelay, random) => {
    let duration = MIN_DURATION + avgDuration * (random ?  Math.random() : 1);
    let delay = MIN_DELAY + avgDelay * (random ?  Math.random() : 1); //avgDelay + 200 * randn_bm(); 
    return {duration: duration, delay, delay};
}


const Grid = (props) => {
    /* Build Configurations */
    const w = window.innerWidth;
    const h = window.innerHeight;
    let rowLines = [];
    let colLines = [];
    let spacing = Math.floor(100/props.numLines);
    /* Configuration Variables */
    let pos_conf;
    let time_conf;
    let conf;

    let totalTimeout = 0;
    
    

    /* Row first, so X floats */
    for(let i = 1; i <= props.numLines; i++) {
        pos_conf = position(i, spacing, props.offset, props.random);
        time_conf = timing(props.avgDuration, props.avgDelay, props.random);
        conf = { ...pos_conf, ...time_conf, isRow: true, isDot: props.isDot, setIsGridDone: props.setIsGridDone, 
            isGridDone: props.isGridDone}
        totalTimeout = Math.max(time_conf.duration + time_conf.delay, totalTimeout);
        rowLines.push(<Gridline key = {i} {...conf} />)
    } 
    /* Then column */
    for(let i = 1; i <= w/h* props.numLines + 1; i++) {
        pos_conf = position(i, spacing, props.offset, props.random);
        time_conf = timing(props.avgDuration, props.avgDelay, props.random);
        conf = { ...pos_conf, ...time_conf, isRow: false, isDot: props.isDot, setIsGridDone: props.setIsGridDone, isGridDone: props.isGridDone}
        totalTimeout = Math.max(time_conf.duration + time_conf.delay, totalTimeout);
        colLines.push(<Gridline key = {i + props.numLines} {...conf} />)
    }
    console.log(props.isGridDone);

    //setTimeout(() => props.setIsGridDone(true), 4000)
    /* change the state after animation is complete */
        return (
            <CSSTransition
                appear = {false}
                in = {true}
                timeout = {props.duration + props.delay}
                classNames = 'fade-out'
                >
                <StyledGrid duration = {props.duration} delay = {props.delay}> 
                    {rowLines} 
                    {colLines} 
                </StyledGrid> 
            </CSSTransition>
            );
}



export default Grid;