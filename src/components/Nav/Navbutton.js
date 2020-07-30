import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const StyledNavbutton = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
    color :#F5F5F5; 
    font-size: 65px;
    z-index: 1;
    
    width: 60px;
    height: 45px;
    margin: 50px auto;
    cursor: pointer;
  
  #nav-icon1 {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
  
  #nav-icon1 span:nth-child(1) {
    top: 0px;
  }
  
  #nav-icon1 span:nth-child(2) {
    top: 18px;
  }
  
  #nav-icon1 span:nth-child(3) {
    top: 36px;
  }
  
  #nav-icon1.open span:nth-child(1) {
    top: 18px;
    transform: rotate(135deg);
  }
  
  #nav-icon1.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }
  
  #nav-icon1.open span:nth-child(3) {
    top: 18px;
    transform: rotate(-135deg);
  }
`;


const StyledPatty1 = styled.span`
    display: block;
    position: absolute;

    height: 5px;
    width: 100%;

    background: black;

    top: 0px;
    left: 0;

    border-radius: 9px;
    opacity: 1;

    &.patty-appear, &.patty-enter  {}
    &.patty-appear-active, &.patty-enter-active {
        top: 18px;
        transform: rotate(135deg);
        transition: all 250ms ease-in-out;
    }

    &.patty-appear-done, &.patty-enter-done {
        top: 18px;
        transform: rotate(135deg);
    }

    &.patty-exit {
        top: 18px;
        transform: rotate(135deg);
    }
    &.patty-exit-active {
        top: 0px;
        transform: rotate(0deg);
        transition: all 250ms ease-in-out;
    }
    &.patty-exit-done {
        top: 0px;
        transform: rotate(0deg);
    }

}


`;
const StyledPatty2 = styled.span`
`;

const StyledPatty3 = styled.span` 
    display: block;
    position: absolute;

    height: 5px;
    width: 100%;

    background: black;

    top: 36px;
    left: 0;

    border-radius: 9px;
    opacity: 1;

    &.patty-appear, &.patty-enter  {}
    &.patty-appear-active, &.patty-enter-active {
        top: 18px;
        transform: rotate(-135deg);
        transition: all 250ms ease-in-out;
    }

    &.patty-appear-done, &.patty-enter-done {
        top: 18px;
        transform: rotate(-135deg);
    }

    &.patty-exit {
        top: 18px;
        transform: rotate(-135deg);

    }
    &.patty-exit-active {
        top: 36px;
        transform: rotate(0deg);
        transition: all 250ms ease-in-out;
    }
    &.patty-exit-done {
        top: 36px;
        transform: rotate(0deg);
    }

}
`;

const Navbutton = (props) =>  {
    return(
 


   /* <CSSTransition
        classNames = 'open'
        timeout = {}

        
    > */
    <StyledNavbutton onClick = {() => props.setIsVisible(! props.isVisible)}>
        <CSSTransition in = {!props.isVisible} classNames = 'patty' timeout = {250}>
            <StyledPatty1/>
        </CSSTransition>
        <CSSTransition in = {!props.isVisible} classNames = 'patty' timeout = {250}>
            <StyledPatty3 />
        </CSSTransition>
    </StyledNavbutton>
    //</CSSTransition>
 
    );
}



export default Navbutton;