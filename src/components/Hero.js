import React from 'react'
import Name from './Name.js'
import Triangle from './Triangle.js'
import Description from './Description.js'


const Hero = (props) => {
    return(

            <div className = 'hero row '>
                    <Triangle />
                    <div className = 'col s6'>
                        <Name  firstName = 'Michael' middleName = 'Newman' lastName = 'Fortunato'/>
                        <Description desc = {'Front End'} delay = {0}/>
                        <Description desc = {"Full Stack"} delay = {2000}/>
                    </div>
                    <Triangle />
                </div>
    );
}

export default Hero;