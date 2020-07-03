import React from 'react'
import Gridline from './Gridline.js';
import { CSSTransition } from 'react-transition-group'


const fadeDuration = 1000;

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

    renderLines(numLines, offset, isRow) {
        let key;
        let lineType = isRow ? 'row' : 'col';
        let x;
        let y;
        let duration;
        let delay;

        let ruledPos;
        let floatingPos;
        let spacing = Math.floor(100/numLines);
        let lines = [];


        for (let i = 1; i <= numLines; i++) {
            key = i + this.props.numLinesCol*isRow
            ruledPos = this.props.offset + i * spacing;
            floatingPos = 100 *  Math.random();
            x = isRow ? floatingPos: ruledPos;
            y = isRow ? ruledPos: floatingPos;
            
            duration = 500 + this.props.avgDuration * Math.random();
            delay = 1000 + this.props.avgDelay * Math.random() //this.randn_bm(this.props.avgDelay , 400);
      
            this.totalGridlineDuration = Math.max(this.totalGridlineDuration, duration + delay);

            lines.push(
                <Gridline 
                    key = {key}
                    lineType = {lineType} 
                    x = {x}
                    y = {y}
                    duration = {duration}
                    delay = {delay}
                />
            );
        }                  
        return lines;
    }
    render() {
        
        let rowLines = this.renderLines(this.props.numLinesRow,
                                        this.props.offset,
                                        1);
        let colLines = this.renderLines(this.props.numLinesCol,
                                        this.props.offset,
                                        0);

        this.gridTimout = this.totalGridlineDuration + fadeDuration;
            

        return(
            /*<CSSTransition
                in = {true}
                appear = {true}
                classNames = 'fade-out'
                timeout = {this.gridTimout}
                \\style = {{transitionDelay: `${this.totalGridlineDuration + 500}ms`}}>
                > */
                <div className = 'grid' > 
                    {rowLines}
                    {colLines}
                </div>  
           /* </CSSTransition>*/
            
        );
    }
}


Grid.defaultProps = {
    numLinesRow: 16,
    numLinesCol: 23,
    offset: 0,
    avgDuration: 500,
    avgDelay: 3000
};

export default Grid;