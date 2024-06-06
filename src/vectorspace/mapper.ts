import * as THREE from 'three';

let mesh = {images: [], index: []}


function addPoint(scene: THREE.Scene, pathToImage: string, vector: THREE.Vector3, imageScale: number) {
  const loader = new THREE.TextureLoader()
  const texture = loader.load(pathToImage)

  const geometry = new THREE.PlaneGeometry(.5 * imageScale, 1 * imageScale);

  const material = new THREE.MeshBasicMaterial( { map: texture, transparent: true, side: THREE.DoubleSide } );
  const image = new THREE.Mesh( geometry, material );

  image.position.set(vector.x, vector.y, vector.z)
  // image.setRotationFromAxisAngle(new THREE.Vector3(0,0,0), 90)

  const pointToFaceAwayFrom = new THREE.Vector3(0, 0, 0);

  // Calculate the direction vector from the image mesh to the point
  const direction = new THREE.Vector3().subVectors(image.position, pointToFaceAwayFrom).normalize();

  // Set the rotation of the image mesh to face away from the point
  image.lookAt(image.position.clone().add(direction));

  scene.add(image)
}

function clearGraph(scene: THREE.Scene) {
  while(scene.children.length > 0){ 
    scene.remove(scene.children[0]); 
  }

  mesh = {images: [], index: []}
}


export default {addPoint}