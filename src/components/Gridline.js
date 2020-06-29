import React from 'react'
import CSSTransition from 'react-transition-group'

class Gridline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showGrid: true
        };
        if (this.props.lineType === 'row') {
            this.initialPos = {'top': this.props.ruledPos,
                                'left': this.props.offsetPos};
        } else {
            this.initialPos = {'left': this.props.ruledPos,
                                'top': this.props.offsetPos};
        }
    }
    render(){
        return( 
            <CSSTransition 
                in = {this.state.showGrid}
                appear = {true}
                classNames = {`line-${this.props.lineType}`}>
                <div 
                    className = {'line-' + this.props.lineType + '-enter'} 
                    style = {this.initialPos}>
                </div>
            </CSSTransition>
        );
    }
}

export default Gridline;