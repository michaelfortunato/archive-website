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




const MIN_DURATION = 200;
const MIN_DELAY = 500;

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
    let lines = [];
    let numLines = Math.floor(w/props.spacing);
    
    /* Configuration Variables */
    let pos_conf;
    let time_conf;
    let booleans;

    


    /* Row first, so X floats */
    for(let i = 1; i <= numLines; i++) {
        pos_conf = position(i, props.spacing, props.offset, props.random);
        time_conf = timing(props.avgDuration, props.avgDelay, props.random);
        booleans = {isRow: true, isDot: props.isDot};

        lines.push(<Gridline key = {i} {...{ ...pos_conf, ...time_conf, isRow: true, isDot: props.isDot}} />)
    } 
    for(let i = 1; i <= numLines; i++) {
        pos_conf = position(i, props.spacing, props.offset, props.random);
        time_conf = timing(props.avgDuration, props.avgDelay, props.random);
       

        lines.push(<Gridline {...{key: i + numLines, ...pos_conf, ...time_conf, isRow: false, isDot: props.isDot}} />)
    }
        return (
            /*
            <CSSTransition
                in = {true}
                appear = {true}
                classNames = 'fade-out'
                timeout = {6000}>*/
            <StyledGrid> {lines}</StyledGrid>
        
            //</CSSTransition>
            );
}



export default Grid;