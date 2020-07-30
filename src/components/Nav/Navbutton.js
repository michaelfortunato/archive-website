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
    z-index: 1;

    .nav-icon1, {
        width: 60px;
        height: 45px;
        position: relative;
        margin: 50px auto;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
      }
      
      .patty2-exit{
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
      
      &.patty1-open-appear &.patty1-open-enter  {
        top: 0px;
      }
      
      &.patty2-open-appear &.patty2-open-enter  {
        top: 18px;
      }
      
      &.patty3-open-appear &.patty3-open-enter  {
        top: 36px;
      }
      
      &.patty1-open-appear-active &.patty1-open-enter-active  {
        top: 18px;
        transform: rotate(135deg);
      }
      
      &.patty2-open-appear-active &.patty2-open-enter-active  {
        opacity: 0;
        left: -60px;
      }
      
      &.patty1-open-appear-done &.patty1-open-enter-done{
        top: 18px;
        transform: rotate(-135deg);
      }
`;


const Navbutton = (props) =>  {
    return(
 
    <CSSTransition
        classNames = 'open'
        timeout = {}

        
    >
    <StyledNavbutton>
    <div className="nav-icon1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledNavbutton>
    </CSSTransition>
 
    );
}



export default Navbutton;