import * as THREE from 'three'


function makeGrid(scene: THREE.Scene, gridSize: number, gridDivisions: number, helper: boolean = false) {
  // xy plane grid
  const xyGrid = new THREE.GridHelper(gridSize, gridDivisions);
  scene.add(xyGrid);

  // yz plane grid
  const yzGrid = new THREE.GridHelper(gridSize, gridDivisions);
  yzGrid.rotation.x = Math.PI / 2;
  scene.add(yzGrid);

  // xz plane grid
  const xzGrid = new THREE.GridHelper(gridSize, gridDivisions);
  xzGrid.rotation.z = Math.PI / 2;
  scene.add(xzGrid);

  if (helper) {
    // Create axes helper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
  }
}

export default { makeGrid }