import React , { useState }  from 'react'
import styled from 'styled-components'
import NavContent from './NavContent.js';
import Navbutton from './Navbutton.js';


const StyledNavbar = styled.div`
    width: 100vw;
    height: 25%;
    font-size: 5px;




`;



const Navbar = (props) => {
    const [ isVisible, setIsVisible ] = useState(false);
    return(
        <StyledNavbar>
            <Navbutton  isVisible = {isVisible} setIsVisible =  {setIsVisible} />
            <div style = {{'width': '100vw', 'height': '26vh', 'filter': 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))'}}>
            <NavContent isVisible = {isVisible} setIsVisible =  {setIsVisible} />
            </div>
        </StyledNavbar>
    );
}

export default Navbar;