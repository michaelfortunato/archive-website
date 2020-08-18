import React from 'react'
import ReactDOM from "react-dom";
import Lottie from 'react-lottie'
import animationData from '../data2.json'



const Triangle = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    
  };
  return (
    <Lottie options={defaultOptions}
      width = '100%'
      height = '100%'
    
    />
 
 

  );
}


export default Triangle;
