import React , { useState }  from 'react'
import styled from 'styled-components'
import NavContent from './NavContent.js';
import Navbutton from './Navbutton.js';


const StyledNavbar = styled.div`
    width: 100vw;
    height: 25%;

`;



const Navbar = (props) => {
    const [ isVisible, setIsVisible ] = useState(false);
    return(
        <StyledNavbar>
            <Navbutton  isVisible = {isVisible} setIsVisible =  {setIsVisible} />
            <NavContent isVisible = {isVisible} setIsVisible =  {setIsVisible} />
        </StyledNavbar>
    );
}


/*

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: false};
    }
    render() {
        return(
            <div className = 'navbar'>
                <div className = 'nav-open-button large material-icons'
                    onClick = {() => this.setState({isVisible: true})}>
                menu
                </div>
                <CSSTransition
                    in = {this.state.isVisible}
                    classNames = 'slide-down'
                    timeout = {400}>
                    <div className = 'navbar-content row'>
                        <div className = 'nav-close-button large material-icons'
                            onClick = {() => this.setState({isVisible: false})}>
                                close
                        </div>
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
*/
export default Navbar 