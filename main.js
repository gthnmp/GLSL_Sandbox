import * as THREE from 'three';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

const canvasContainer = document.querySelector("#canvas-container");
const canvas = document.querySelector("canvas");
const HEIGHT = canvasContainer.offsetHeight;
const WIDTH = canvasContainer.offsetWidth;

const renderer = new THREE.WebGLRenderer({ antialias : true, canvas : canvas });
renderer.setSize( WIDTH, HEIGHT );
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 0.1, 1000 );
camera.position.z = 20;

const something = new THREE.Mesh(
  new THREE.PlaneGeometry( WIDTH, HEIGHT ),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    side : THREE.DoubleSide,
    uniforms : {
      
      color1 : { value : new THREE.Color( "orange" ) },
      color2 : { value : new THREE.Color( "yellow" ) }
    }
  })
)
scene.add(something)

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
}

animate();
console.log(scene)