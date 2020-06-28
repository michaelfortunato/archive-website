import React  from 'react'

class Navbar extends React.Component {
    render() {
        return(
            <div class = 'nav'>
                <div class = 'nav-content row'>
                    <div class="nav-item col s1 offset-s6"><h5 class="center-align">Home</h5></div>
                    <div class="nav-item col s1"><h5 class="center-align">About</h5></div>
                    <div class="nav-item col s1"><h5 class="center-align">Home</h5></div>
                    <div class="nav-item col s1"><h5 class="center-align">About</h5></div>
                </div>
            </div>
        );
    }
}
export default Navbar 