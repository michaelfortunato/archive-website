import React from 'react'
import Gridline from './Gridline.js';
import { CSSTransition } from 'react-transition-group'



class Grid extends React.Component {
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
            delay = 500 + Math.random() * this.props.delay;
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
                timeout = {this.props.duration + this.props.delay}>
            <div className = 'grid' style = {{transitionDelay: `${300 + this.props.duration + this.props.delay}ms`}}>
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
    delay: 1500
};

export default Grid;