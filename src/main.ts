import { OrbitControls } from 'three/examples/jsm/Addons.js';
import './style.css'
import * as THREE from 'three';
import grid from './util/grid';
import odometry from './util/odometry';
import dataloader from './dataloader';

const positionDisplay = document.getElementById('positionDesc')
const scene = new THREE.Scene();

grid.makeGrid(scene, 10, 10)
odometry.addDirectionalVectors(scene, 1, .2, .1)

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const clock = new THREE.Clock();
const controls = new OrbitControls(camera, renderer.domElement)

dataloader.loadData(scene, 'tsne', 2000)


function animate() {
  const delta = clock.getDelta();

  if (positionDisplay) {
    positionDisplay.innerHTML = `x: ${camera.position.x.toFixed(2)} y: ${camera.position.y.toFixed(2)} z: ${camera.position.z.toFixed(2)}`
  }
   
	renderer.render( scene, camera );

  controls.update();
}

function initialize() {
  camera.position.x += 10
  camera.position.y += 5
  camera.position.z += 5

  controls.update();
  renderer.setAnimationLoop( animate );
}

initialize()