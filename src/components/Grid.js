import React from 'react'
import Gridline from './Gridline.js';



class Grid extends React.Component {
    drawGrid(numLines, offset, isRow) {
        let ruledPos;
        let offsetPos = 10;
        let spacing = Math.floor(100/numLines);
        let lineType = isRow ? 'row' : 'col';
        let lines = [];

        for (let i = 1; i <= numLines; i++) {
            ruledPos = offset + i * spacing;
            lines.push(
                <Gridline 
                    lineType = {lineType} 
                    offsetPos = {offsetPos} 
                    ruledPos = {ruledPos}
                />
            );
        }                  
        return lines;
    }
    render() {
        return(
            <div className = 'grid'>
                {this.drawGrid(20,0,1)}
            </div>  
        );
    }
}

export default Grid;