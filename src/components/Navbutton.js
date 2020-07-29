import React from 'react'
import styled from 'styled-components'

const StyledNavbutton = styled.div`

`;


const Navbutton = (props) =>  {
    return(
    <div className = 'nav-open-button large material-icons'
        onClick = {() => props.setIsVisible(! props.isVisible)}>
        menu
    </div>
    );
}



export default Navbutton;