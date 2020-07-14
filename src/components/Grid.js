import React from 'react'
import { CSSTransition } from 'react-transition-group'

import Gridline from './Gridline.js';


const position = (i, spacing, offset, random) => {
    let fixedPos = offset + spacing * i;
    let floatingPos = 100 * (random ? Math.random(): 0);
    return {fixedPos: fixedPos, floatingPos: floatingPos};
}

const timing = (avgDuration, avgDelay, random) => {
    let duration = 200 + avgDuration * (random ?  Math.random() : 1);
    let delay = avgDelay * (random ?  Math.random() : 1);
    return {duration: duration, delay, delay};
}


  


const Grid = (props) => {
    /* Build Configurations */
    let lines = [];
    let numLines = Math.floor(100/props.spacing);
    
    let pos_conf;
    let time_conf;
    let isRow;
    let key;

    

    /* Row first, so X floats */
    for(let i = 1; i <= numLines; i++) {
        pos_conf = position(i, props.spacing, props.offset, props.random);
        time_conf = timing(props.avgDuration, props.avgDelay, props.random);
        key = i ;

        lines.push(<Gridline {...{key: key, ...pos_conf, ...time_conf, isRow: true, isDot: props.isDot}} />)
    } 
    for(let i = 1; i <= numLines; i++) {
        pos_conf = position(i, props.spacing, props.offset, props.random);
        time_conf = timing(props.avgDuration, props.avgDelay, props.random);
        key = i + numLines;

        lines.push(<Gridline {...{key: key, ...pos_conf, ...time_conf, isRow: false, isDot: props.isDot}} />)
    }
        return (<div className> {lines}</div>);
}
/*


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.totalGridlineDuration = 0;
    }

    randn_bm(mu, sigma) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        return (mu + sigma * Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v ));
    }

    renderLines(spacing, offset, isRow) {
        let key;
        let lineType = isRow ? 'row' : 'col';
        let x;
        let y;
        let duration;
        let delay;

        let ruledPos;
        let floatingPos;
        let numLines = Math.floor(100/spacing);//isRow ? Math.floor(winHeight/spacing): Math.floor(winWidth/spacing);
        console.log(numLines);
        console.log(winWidth);
        let lines = [];


        for (let i = 1; i <= numLines; i++) {
            key = i;
            ruledPos = this.props.offset + i * spacing;
            floatingPos = 100 *  Math.random();
            x = isRow ? floatingPos: ruledPos;
            y = isRow ? ruledPos: floatingPos;
            
            duration = 200 + this.props.avgDuration * Math.random();
            delay =  this.props.avgDelay * Math.random() //this.randn_bm(this.props.avgDelay , 400);
      
            this.totalGridlineDuration = Math.max(this.totalGridlineDuration, duration + delay);

            lines.push(
                <Gridline 
                    key = {key}
                    lineType = {isRow} 
                    x = {1}
                    y = {1}
                    duration = {duration}
                    delay = {delay}
                />
            );
        }                  
        return lines;
    }
    render() {
        let spacing = 6;
        let rowLines = this.renderLines(spacing,
                                        this.props.offset,
                                        1);
        let colLines = this.renderLines(spacing,
                                        this.props.offset,
                                        0);

        this.gridTimout = this.totalGridlineDuration + fadeDuration;
            

        return(
           <CSSTransition
                in = {true}
                appear = {true}
                classNames = 'fade-out'
                timeout = {this.gridTimout}
                onEntered = {this.props.setGridEntered}
                style = {{transitionDelay: `${this.totalGridlineDuration}ms`}}> 
                
                <Gridline 
                key = {1}
                lineType = {0} 
                x = {1}
                y = {1}
                duration = {1000}
                delay = {1000}
            />
            
                <div className = 'grid' > 
                    {rowLines}
                    {colLines}
                </div>  
            
           </CSSTransition>
        );
    }
}
*/

Grid.defaultProps = {
    offset: 0,
    avgDuration: 300,
    avgDelay: 1000
};

export default Grid;