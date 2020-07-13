import React from 'react';
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const SytledGridline = styled.div`
    position: absolute;
    background:#6699CC;
    border-radius: ${(props) => props.isDot ? '50%': '0%'}


    &.line-row-appear{
        height: 10px;
        width: 10px;
        border-radius: inherit;
    }
    &.line-row-appear-active{
        height: 1px;
        width: 100%;
        left: 0% !important;
        border-radius: 0%;
        transition-property: left, width, border-radius, height;
    }
    &.line-row-appear-done{
        height: 1px;
        width: 100%;
        left:0% !important;
        border-radius: 0%;
    }
    &.line-col-appear{
        height: 10px;
        width: 10px;
        border-radius: 50%;
    }
    &.line-col-appear-active{
        height: 100%;
        width: 1px;
        top: 0% !important;
        border-radius: 0%;
        transition: top, height, border-radius, width;
        
    }
    &.line-col-appear-done{
        height: 100%;
        width: 1px;
        top: 0% !important;
        border-radius: 0%;

    }
`



class Gridline extends React.Component{
    constructor(props){
        super(props);
        this.style = {'left': `${this.props.x}%`,
                        'top': `${this.props.y}%`,
                        'transitionDuration': `${this.props.duration}ms`, 
                        'transitionDelay': `${this.props.delay}ms`
                        };
        this.timeout = this.props.duration + this.props.delay;
    }
    render(){
        return( 
                <CSSTransition
                in = {true}
                appear = {true}
                classNames = {`dotline-${this.props.lineType}`}
                timeout={this.timeout}
                >
                        <div 
                            className = "line"
                            style = {this.style}>
                        </div> 
                </CSSTransition>   
        );
    }
}

export default Gridline;