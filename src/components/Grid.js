import React from 'react'
import Gridline from './Gridline.js';



class Grid extends React.Component {
    drawGrid(numLines, offset, isRow) {
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
            duration =  100+ Math.random() * 1000;
            delay = 20 + Math.random() * 1000;
            lines.push(
                <Gridline 
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
        return(
            <div className = 'grid'>
                {this.drawGrid(15,0,1)}
                {this.drawGrid(23,0,0)}
            </div>  
        );
    }
}

export default Grid;