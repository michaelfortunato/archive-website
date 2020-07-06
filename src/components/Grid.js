import React from 'react'
import Gridline from './Gridline.js';
import { CSSTransition } from 'react-transition-group'


const winHeight = window.innerHeight;
const winWidth = window.innerWidth;
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
        let spacing = 6;
        let rowLines = this.renderLines(spacing,
                                        this.props.offset,
                                        1);
        let colLines = this.renderLines(spacing,
                                        this.props.offset,
                                        0);

        this.gridTimout = this.totalGridlineDuration + fadeDuration;
            

        return(
           /*<CSSTransition
                in = {true}
                appear = {true}
                classNames = 'fade-out'
                timeout = {this.gridTimout}
                onEntered = {this.props.setGridEntered}
                style = {{transitionDelay: `${this.totalGridlineDuration}ms`}}> 
                >*/
                <div className = 'grid' > 
                    {rowLines}
                    {colLines}
                </div>  
           //</CSSTransition>
        );
    }
}


Grid.defaultProps = {
    offset: 0,
    avgDuration: 300,
    avgDelay: 1000
};

export default Grid;