import React from 'react';
import { CSSTransition } from 'react-transition-group';

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