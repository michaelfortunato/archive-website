import React from 'react'
import { CSSTransition } from 'react-css-transition';
import { Letter, StyledLetter } from './Letter.js'
import  styled  from 'styled-components';




const StyledName = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 7vh;
    align-items: center;
    justify-content: center;

`;

const Name = (props) => {
    let [firstName, lastName] = props.name.split(" ");
    return (
        <StyledName>
            <Letter
                char = {'L'}
                XOffset = {-50}
                YOffset = {-75}
                duration = {1000}
                delay = {1000}>
            </Letter>
        </StyledName>

    );
}


/*
class Name extends React.Component{
    render(){
         
                <Letter letter = {'M'}/>
                <Letter letter = {'i'}/>
                <Letter letter = {'c'}/>
                <Letter letter = {'h'}/>
                <Letter letter = {'a'}/>
                <Letter letter = {'e'}/>
                <Letter letter = {'l'}/>
                <Letter letter = {'F'}/>
                <Letter letter = {'o'}/>
                <Letter letter = {'r'}/>
                <Letter letter = {'t'}/>
                <Letter letter = {'u'}/>
                <Letter letter = {'n'}/>
                <Letter letter = {'a'}/>
                <Letter letter = {'t'}/>
                <Letter letter = {'o'}/>
                
        return(
            <div className= 'name valign-wrapper col s6'>
            
                <Letter letter = {'M'}/>
                <Letter letter = {'i'}/>
                <Letter letter = {'c'}/>
                <Letter letter = {'h'}/>
                <Letter letter = {'a'}/>
                <Letter letter = {'e'}/>
                <Letter letter = {'l'}/>
                <Letter letter = {'F'}/>
                <Letter letter = {'o'}/>
                <Letter letter = {'r'}/>
                <Letter letter = {'t'}/>
                <Letter letter = {'u'}/>
                <Letter letter = {'n'}/>
                <Letter letter = {'a'}/>
                <Letter letter = {'t'}/>
                <Letter letter = {'o'}/>
                

            </div>
        );
    }
}
*/
export default Name;