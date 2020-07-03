import React from 'react'
import Letter from './Letter.js'
class Name extends React.Component{
    render(){
        return(
            <div className = 'name valign-wrapper'>
                <Letter letter = {'M'}/>
            </div>
        );
    }
}
export default Name;