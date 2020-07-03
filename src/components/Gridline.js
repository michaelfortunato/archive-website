import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Gridline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showGridline: true, 
            hasEntered: false
        };
        this.style = this.setStyle()
        this.timeout = this.props.timing.duration + this.props.timing.delay
        console.log(this.props.timing.delay);
    }
    setStyle() {
        let dur = this.props.timing.duration;
        let del = this.props.timing.delay;
        let style = {'left': `${this.props.position.x}%`,
                    'top': `${this.props.position.y}%`,
                    'transitionDuration': `${dur}ms`, 
                    'transitionDelay': `${del}ms`
                    };
        return style;
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