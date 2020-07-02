import React from 'react'
import Gridline from './Gridline.js';
import { CSSTransition } from 'react-transition-group'



class Grid extends React.Component {
    constructor(props){
        super(props);
        this.totalGridlineDuration = 0;
    }
    randn_bm(mu, sigma) {
        var u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        return (mu + sigma * Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v ));
    }
    renderLines(numLines, offset, isRow) {
        let ruledPos;
        let offsetPos;
        let duration; 
        let delay;

        let spacing = Math.floor(100/numLines);
        let lineType = isRow ? 'row' : 'col';
        let lines = [];


        for (let i = 1; i <= numLines; i++) {
            ruledPos = offset + i * spacing;
            offsetPos = Math.random() * 100;
            duration =  100 + Math.random() * this.props.duration;
            delay = 1000 + Math.random() * this.props.delay;

            this.totalGridlineDuration = Math.max(this.totalGridlineDuration, duration + delay);

            lines.push(
                <Gridline 
                    key = {i + i*isRow}
                    lineType = {lineType} 
                    offsetPos = {offsetPos} 
                    ruledPos = {ruledPos}
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
        return(
            <CSSTransition
                in = {true}
                appear = {true}
                classNames = 'fade-out'
                timeout = {this.totalGridlineDuration}>
            <div className = 'grid' style = {{transitionDelay: `${this.totalGridlineDuration}ms`}}>
                {rowLines}
                {colLines}
            </div>  
            </CSSTransition>
        );
    }
}

Grid.defaultProps = {
    numLinesRow: 15,
    numLinesCol: 23,
    offset: 0,
    duration: 1000,
    delay: 3000
};

export default Grid;