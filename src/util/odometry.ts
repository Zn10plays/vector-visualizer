import * as THREE from 'three'


function addDirectionalVectors(scene: THREE.Scene, arrowLength: number, arrowHeadLength: number, arrowHeadWidth: number) {
  const xArrow = new THREE.ArrowHelper(
    new THREE.Vector3(1, 0, 0), // Direction
    new THREE.Vector3(0, 0, 0), // Origin
    arrowLength,
    0xff0000,
    arrowHeadLength,
    arrowHeadWidth
  );
  scene.add(xArrow);
  
  // y-axis arrow
  const yArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 1, 0), // Direction
    new THREE.Vector3(0, 0, 0), // Origin
    arrowLength,
    0x00ff00, // Green color
    arrowHeadLength,
    arrowHeadWidth
  );
  scene.add(yArrow);
  
  // z-axis arrow
  const zArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 0, 1), // Direction
    new THREE.Vector3(0, 0, 0), // Origin
    arrowLength,
    0x0000ff, // Blue color
    arrowHeadLength,
    arrowHeadWidth
  );

  scene.add(zArrow);
}

export default { addDirectionalVectors}