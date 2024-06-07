import * as THREE from 'three';

let mesh: THREE.Mesh[] = []
const raycaster = new THREE.Raycaster();

function addPoint(scene: THREE.Scene, pathToImage: string, vector: THREE.Vector3, imageScale: number, index: number) {
  const loader = new THREE.TextureLoader()
  const texture = loader.load(pathToImage)

  const geometry = new THREE.PlaneGeometry(.5 * imageScale, 1 * imageScale);

  const material = new THREE.MeshBasicMaterial( { map: texture, transparent: true, side: THREE.DoubleSide } );
  const image = new THREE.Mesh( geometry, material );

  image.name = index.toString()

  image.position.set(vector.x, vector.y, vector.z)

  const pointToFaceAwayFrom = new THREE.Vector3(0, 0, 0);

  // Calculate the direction vector from the image mesh to the point
  const direction = new THREE.Vector3().subVectors(image.position, pointToFaceAwayFrom).normalize();

  // Set the rotation of the image mesh to face away from the point
  image.lookAt(image.position.clone().add(direction));

  scene.add(image)
  mesh.push(image)
}

function clearGraph(scene: THREE.Scene) {
  for (let i = 0; i < mesh.length; i++) {
    scene.remove(mesh[i])
  }
}

function getRayTracerTarget(camera: THREE.Camera): null | THREE.Object3D<THREE.Object3DEventMap>{
  raycaster.setFromCamera(new THREE.Vector2(), camera);

  const intersects = raycaster.intersectObjects(mesh);

  if (intersects.length > 0) {
    const firstIntersection = intersects[0];
    const firstImageMesh = firstIntersection.object;
    return firstImageMesh
  } else {
    // do somth sus
    return null;
  }
}


export default {addPoint, clearGraph, getRayTracerTarget}