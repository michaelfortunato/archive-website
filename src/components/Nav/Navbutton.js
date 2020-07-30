import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const StyledNavbutton = styled.div`
/* Icon 4 */
    position: absolute;
    top: 5%;
    right: 5%;
    color :#black; 
    font-size: 45px;
    z-index: 3;

    &.change-color-enter {

    }
    &.change-color-enter-active{
        color: black;
        transition: all 4000ms;
    }
    &.change-color-enter-done{
        color: black;
    }
    z-index: 1;

#nav-icon4 {
}

    #nav-icon4 span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }

    #nav-icon4 span:nth-child(2) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }

    #nav-icon4 span:nth-child(3) {
    top: 36px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }

    #nav-icon4.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
    }

    #nav-icon4.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
    }

    #nav-icon4.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
    }
`;


const Navbutton = (props) =>  {
    return(
    <CSSTransition 
        in = {props.isVisible}
        classNames = {'change-color'}
        timeout = {4000}>
    <StyledNavbutton className = 'large material-icons'
        onClick = {() =>
        props.setIsVisible(! props.isVisible)}>
        menu
    </StyledNavbutton>
    </CSSTransition>
    );
}



export default Navbutton;