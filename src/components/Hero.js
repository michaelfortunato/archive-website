import React from 'react'
import Name from './Name.js'
import Triangle from './Triangle'


const Hero = (props) => {
    return(

            <div className = 'hero row '>
                    <Triangle />
                    <Name firstName = 'Michael ' lastName = 'Fortunato'/>
                    <Triangle />
                </div>
    );
}

export default Hero;