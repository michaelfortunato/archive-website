import React from 'react'
import { CSSTransition } from 'react-transition-group';

class Letter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasEntered: true
        };
        this.style = {
            'transfrom': `translateX(${this.props.x}%) translateY(${this.props.y}%)`,
            'transitionDuration': `${this.props.duration}ms`
        };
    }
    render(){
        return(
            <span className = 'letter' style = {{top: '50%'}}>
                {this.props.letter}
            </span>
        );
    }
}
export default Letter;