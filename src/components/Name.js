import React from 'react'
import { CSSTransition } from 'react-css-transition';
import  styled  from 'styled-components';
import { Letter, StyledLetter } from './Letter.js'





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
                char = {'M'}
                XOffset = {25}
                YOffset = {-75}
                duration = {500}
                delay = {1000}>
            </Letter>
            <Letter
                char = {'M'}
                XOffset = {25}
                YOffset = {-75}
                duration = {500}
                delay = {1000}>
            </Letter>
            <Letter
                char = {'M'}
                XOffset = {25}
                YOffset = {-75}
                duration = {500}
                delay = {1000}>
            </Letter>
            <Letter
                char = {'M'}
                XOffset = {25}
                YOffset = {-75}
                duration = {500}
                delay = {1000}>
            </Letter>
            <Letter
                char = {'M'}
                XOffset = {25}
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