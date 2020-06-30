import React  from 'react'
import { CSSTransition } from 'react-transition-group';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: false};
    }
    render() {
        return(
            <button onClick ={() => this.setState({isVisible: true})}>
            <CSSTransition
                in = {this.state.isVisible}
                timeout = {1000}
                classNames = 'fade'
                onEntered= {() => this.setState({isVisible: false})}
            >
                <div class = 'nav'>
                    <div class = 'nav-content row'>
                        <div class="nav-item col s1 offset-s6"><h5 class="center-align">Home</h5></div>
                        <div class="nav-item col s1"><h5 class="center-align">About</h5></div>
                        <div class="nav-item col s1"><h5 class="center-align">Home</h5></div>
                        <div class="nav-item col s1"><h5 class="center-align">About</h5></div>
                    </div>
                </div>
            </CSSTransition>
            </button>
        );
    }
}
export default Navbar 