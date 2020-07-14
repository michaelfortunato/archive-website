import React from 'react';
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledGridline = styled.div`
    position: absolute;
    background:#6699CC;
    

    &.line-appear, &.line-enter, {
        left: ${(props) => props.isRow ? props.floatingPos : props.fixedPos}%;
        top: ${(props) => props.isRow ? props.fixedPos : props.floatingPos}}%;
        height: ${(props) => props.isDot ? '10px': '0px'};
        width: ${(props) => props.isDot ? '10px': '0px'};
        border-radius: ${(props) => props.isDot ? '50%': '0%'};
    }
    
    &.line-appear-active, &.line-enter-actice {
        height: ${(props) => props.isRow ? '1px': '100%'};
        width:  ${(props) => props.isRow ? '100%': '1px'};
        left: 0% !important;
        border-radius: 0%;

        transition-property: left, width, border-radius, height;
        transition-duration: ${(props) => props.duration}ms; 
        transition-delay: ${(props) => props.delay}ms;
    }
    &.line-appear-done, &.line-enter-done{
        height: ${(props) => props.isRow ? '1px': '100%'};
        width:  ${(props) => props.isRow ? '100%': '1px'};
        left:0% !important;
        border-radius: 0%;
    }
`;


const Gridline = (props) => {
    return(
        <CSSTransition
        in = {true}
        appear = {true}
        classNames = "line"
        timeout={props.duration + props.delay}>
            <StyledGridline 
               {...props}
            />
        </CSSTransition>   
    );
};
/*

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
*/

export default Gridline;