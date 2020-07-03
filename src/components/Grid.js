import React from 'react'
import Gridline from './Gridline.js';
import { CSSTransition } from 'react-transition-group'


const fadeDuration = 1000;

class Grid extends React.Component {
    constructor(props){
        super(props);
        this.totalGridlineDuration = 0;
        this.toggleEntered = this.toggleEntered.bind(this)
        this.state = {
            hasEntered: false
        };   
    }

    toggleEntered(){
        this.setState(
            {hasEntered: !this.hasEntered}
        )
    }

    renderLines(numLines, offset, isRow) {

        let ruledPos;
        let floatingPos;
        let position = {};
        let timing = {};

        let spacing = Math.floor(100/numLines);
        let lineType = isRow ? 'row' : 'col';
        let lines = [];
        let hello;
        let goodbye;
        for (let i = 1; i <= numLines; i++) {
            ruledPos = this.props.offset + i * spacing;
            floatingPos = 100 *  Math.random();
            position = {
                x: isRow ? floatingPos: ruledPos, 
                y: isRow ? ruledPos: floatingPos
            };
      
    
            this.maxGridlineDuration = Math.max(this.maxGridlineDuration, timing.duration + timing.delay);

            lines.push(
                <Gridline 
                    key = {i + i*isRow}
                    lineType = {lineType} 
                    position = {position}
                    timing = {{duration: 1000, delay: 2000 * Math.random() }}
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
        this.gridTimout = this.maxGridlineDuration + fadeDuration;
            
            /*
           let position = {x: 25, y: 50};
           let timing = {duration: 1000, delay: 1000};
           */

        return(
            /*
            <Gridline 
                    key = {1}
                    lineType = {'row'} 
                    position = {position}
                    timing = {timing}
                />*/
            /*
            <CSSTransition
                in = {true}
                appear = {true}
                classNames = 'fade-out'
                timeout = { this.gridTimout}
                > */
            <div className = 'grid' >
                
                {colLines}
            </div>  
           // </CSSTransition>
            
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