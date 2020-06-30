import React  from 'react'
import { CSSTransition } from 'react-transition-group';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: false};
    }
    render() {
        console.log('clicked');
        return(
            <div className = 'navbar'>
                <div className = 'nav-button'
                    onClick = {() => this.setState({isVisible: !this.state.isVisible})}>
                </div>
                <CSSTransition
                    in = {this.state.isVisible}
                    classNames = 'slide-down'
                    timeout = {250}>
                    <div className = 'navbar-content row'>
                        <div className="navbar-item col s1 offset-s6"><h5 className="center-align">Home</h5></div>
                        <div className="navbar-item col s1"><h5 className="center-align">About</h5></div>
                        <div className="navbar-item col s1"><h5 className="center-align">Home</h5></div>
                        <div className="navbar-item col s1"><h5 className="center-align">About</h5></div>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}
export default Navbar 