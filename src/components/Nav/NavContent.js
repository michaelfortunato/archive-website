import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledNavContent = styled.div`
    position: relative;
    left: 0;
    height: 100%;
    transform: translateY(-100%);
    background-color: #264653;
    clip-path: polygon(100% 0, 100% 100%, 0% 0%);
    z-index: 0;


    &.toggle-nav-enter{
        transform: translateY(-100%);
    }
    
    &.toggle-nav-enter-active{
        transform: translateY(0);
        transition: transform 400ms;

    }
    &.toggle-nav-enter-done{
        transform: translateY(0);

    }
    &.toggle-nav-exit{
        transform: translateY(0);
    }
    &.toggle-nav-exit-active{
        transform: translateY(-100%);
        transition: transform 250ms;

    }
    &.toggle-nav-exit-done{
        transform: translateY(-100%);

    }
`;




const NavContent = (props) => {
    return(
        <CSSTransition
        in = {props.isVisible}
        classNames = 'toggle-nav'
        timeout = {400}>
            <StyledNavContent className = 'row'>
                <div className="navbar-item col s1 offset-s7"><span  style = {{'font-size': '10px'}} className="center-align">Home</span></div>
                <div className="navbar-item col s1"><span style = {{'font-size': '10px'}} className="center-align">About</span></div>
                <div className="navbar-item col s1"><span style = {{'font-size': '10px'}} className="center-align">Home</span></div>
                <div className="navbar-item col s1"><span style = {{'font-size': '10px'}} className="center-align">About</span></div>
            </StyledNavContent>
        </CSSTransition>
    );
}



export default NavContent;