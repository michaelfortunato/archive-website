import React from 'react'
import styled from 'styled-components'
import DescItem from './DescItem.js';

const tags = ['Software Engineering', 'Statistical Machine Learning', 'Back-End Development', 'Complexity Theory',
 'Full Stack Development', 'Front-End Development'];

const StyledDescription = styled.div`
    position: relative; 
    display: flex;
    justify-content: center;


`;

const Description = (props) => {
 
    console.log(tags.length);

    let n = tags.length;

    let movePercentage = 1/n * 100;

    /* total time * 1/n = moveTime */ 
    /* => totalTime = moveTime * n */
    let moveTime = 2000; /* in ms */
    let totalTime = moveTime * n;
    let waitTime = moveTime;
    let aniTags = tags.map((tag, index) => {
        return(
        <DescItem tag = {tag} movePercentage = {movePercentage} totalTime = {totalTime} delay = {waitTime * index}/>
        );
    } );



    return (
        <StyledDescription>
          {aniTags}
        </StyledDescription>
    );
}

export default Description;