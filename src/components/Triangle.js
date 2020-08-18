import React from 'react'
import ReactDOM from "react-dom";
import Lottie from 'react-lottie'
import animationData from '../data2.json'



const Triangle = (props) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    
  };
  return (
    
    <Lottie options={defaultOptions}/>
 
 

  );
}


export default Triangle;
