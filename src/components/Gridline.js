import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Gridline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showGridline: true, 
            hasEntered: false
        };
        if (this.props.lineType === 'row') {
            this.style = {'top': `${this.props.ruledPos}%`,
                            'left': `${this.props.offsetPos}%`, 
                        };
        } else {
            this.style = {'left': `${this.props.ruledPos}%`,
                            'top': `${this.props.offsetPos}%`};
        }
        this.style.transitionDuration = `${this.props.duration}ms`;
        this.style.transitionDelay = `${this.props.delay}ms`;
    }
    render(){
        return( 
                <CSSTransition
                in = {true}
                appear = {true}
                classNames = {`line-${this.props.lineType}`}
                timeout={this.props.duration + this.props.delay}
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