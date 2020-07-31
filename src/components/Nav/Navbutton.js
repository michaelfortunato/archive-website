import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const StyledNavbutton = styled.div`
    position: absolute;
    top: 4.5%;
    left:2.5%;
    color :#F5F5F5; 
    font-size: 65px;
    z-index: 1;
    
    width: 40px;
    height: 45px;
    cursor: pointer;


    .basepatty {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background-color: #264653;
        left: 0;
    }

    :hover {
        .basepatty{
            box-shadow: 0px 5px 17px white;
            transition: all 400ms ease-in; 
            
            //transform: scaleX(1.1) scaleY(1.2);
            
           
        }
        ::after{
            .basepatty{
                box-shadow: none;
                transition: all 180ms ease-in; 
                //transform: scaleX(1.1) scaleY(1.2);
                
            }
        }  
      }
     




`;


const StyledPatty1 = styled.span`
    top: 0px;

    &.patty-appear, &.patty-enter  {
        top: 0px;
        transform: rotate(0deg);
    }
    &.patty-appear-active, &.patty-enter-active {
        top: 10px;
        transform: rotate(135deg);
        transition: all 250ms ease-in-out;
    }

    &.patty-appear-done, &.patty-enter-done {
        top: 10px;
        transform: rotate(135deg);
    }

    &.patty-exit {
        top: 10px;
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
    top: 10px;



    &.patty-appear, &.patty-enter  {}
    &.patty-appear-active, &.patty-enter-active {
        opacity: 0;
        left: -60px;
        transition: all 250ms ease-in-out;
    }

    &.patty-appear-done, &.patty-enter-done {
        opacity: 0;
        left: -60px;
    }

    &.patty-exit {
        opacity: 0;
        left: -60px;
    }
    &.patty-exit-active {
        opacity: 1;
        left: 0px;
        transition: all 250ms ease-in-out;
    }
    &.patty-exit-done {
        opacity: 1;
        left: 0px;
    }



`;

const StyledPatty3 = styled.span` 
    top: 22px;

    &.patty-appear, &.patty-enter  {}
    &.patty-appear-active, &.patty-enter-active {
        top: 10px;
        transform: rotate(-135deg);
        transition: all 250ms ease-in-out;
    }

    &.patty-appear-done, &.patty-enter-done {
        top: 10px;
        transform: rotate(-135deg);
    }

    &.patty-exit {
        top: 10px;
        transform: rotate(-135deg);

    }
    &.patty-exit-active {
        top: 22px;
        transform: rotate(0deg);
        transition: all 250ms ease-in-out;
    }
    &.patty-exit-done {
        top: 22px;
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
        <CSSTransition key = {1} in = {props.isVisible} classNames = 'patty' timeout = {250}>
            <StyledPatty1 className = 'basepatty'/>
        </CSSTransition>
        <CSSTransition key = {2}  in = {props.isVisible} classNames = 'patty' timeout = {250}>
            <StyledPatty2  className = 'basepatty'/>
        </CSSTransition>
        <CSSTransition key = {3} in = {props.isVisible} classNames = 'patty' timeout = {250}>
            <StyledPatty3 className = 'basepatty'/>
        </CSSTransition>
    </StyledNavbutton>
    //</CSSTransition>
 
    );
}



export default Navbutton;