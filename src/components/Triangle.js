import React from 'react'
import ReactDOM from "react-dom";
import * as THREE from 'three'



class Triangle extends React.Component {
    constructor(props) {
      super(props);
      this.windowElement = React.createRef();

    }
    componentDidMount() {
        
        /*let height = document.getElementById(this.props.containerID).offsetHeight;
        let width = document.getElementById(this.props.containerID).offsetWidth;
        console.log(height);
        console.log(width);*/

        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 1000 );
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( 500, 250 );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.windowElement.current.appendChild( renderer.domElement );
        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        let animate = function () {
          requestAnimationFrame( animate );
          camera.rotation.x += 0.01;
          camera.rotation.y += 0.01;
          renderer.render( scene, camera );
        };
        animate();
      }

    render() {

        return (
            <div ref={this.windowElement} />
          )
    }

}


export default Triangle;
