import React from 'react'
import ReactDOM from "react-dom";
import * as THREE from 'three'
import * as Ammo from 'ammo'



function setupPhysicsWorld(){

  let collisionConfiguration  = new Ammo.btDefaultCollisionConfiguration();
  let dispatcher              = new Ammo.btCollisionDispatcher(collisionConfiguration);
  let overlappingPairCache    = new Ammo.btDbvtBroadphase();
  let solver                  = new Ammo.btSequentialImpulseConstraintSolver();

  let physicsWorld           = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
  
  physicsWorld.setGravity(new Ammo.btVector3(0, -10, 0));

}

class Triangle extends React.Component {
    constructor(props) {
      super(props);
      this.windowElement = React.createRef();

    }
    
    
    componentDidMount() {
        let height = document.getElementById(this.props.containerID).offsetHeight;
        let width = document.getElementById(this.props.containerID).offsetWidth;
   
      
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 1000 );
        let renderer = new THREE.WebGLRenderer({antialias: true });
        renderer.setSize( width, height );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.windowElement.current.appendChild( renderer.domElement );

        /* light shit */
        {
          const color = 0xFFFFFF;
          const intensity = 1;
          const light1 = new THREE.DirectionalLight(color, intensity);
          const light2 = new THREE.DirectionalLight(color, intensity);
          light1.position.set(3, 2, 0);
          light2.position.set(-3, -2, 0);
          scene.add(light1);
          scene.add(light2);
        }


        const radius =  1.2;  
        const geometry = new THREE.IcosahedronBufferGeometry(radius);
        let material = new THREE.MeshPhongMaterial({color: 0x44aa88})

        let isocahedron = new THREE.Mesh( geometry, material );
        scene.add( isocahedron );
        camera.position.z = 5;
        camera.position.y = -2;




        let animate = function () {
          requestAnimationFrame( animate );
          isocahedron.rotation.x += 0.01;
          isocahedron.rotation.y += 0.01;
          renderer.render( scene, camera );
        };
        animate();
        
              
      }
      
      

    render() {

        return (
          
           <div ref={this.windowElement} />
          );
    }

}


export default Triangle;
