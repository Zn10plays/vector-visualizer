import * as THREE from 'three'
import features from '../constants/features.json'

type Features = {
  img_paths: {
    [key: number]: string;
  },
  name: {
    [key: number]: string;
  },
  category: {
    [key: number]: string;
  },
  // other properties...
};

const fet: Features = features

const display = document.getElementById('targetImage') as HTMLImageElement
const title = document.getElementById('novelDisplay')
const position = document.getElementById('novelPosition')
const category = document.getElementById('novelCatogery')


function displayTarget(traget: THREE.Object3D<THREE.Object3DEventMap>) {
  if (!display || !title || !position || !category) return

  const index = parseInt(traget.name)
  
  const imgPath = (fet['img_paths'][index]).replace('dataset/', 'crunched/').replace('.jpg', '.webp');
  display.src = imgPath;
  
  title.innerHTML = 'Name: ' + fet['name'][index]
  position.innerHTML =  "Novel Position (X, Y, Z): " + 
  traget.position.x.toFixed(2) + ", " + 
  traget.position.y.toFixed(2) + ", " +
  traget.position.z.toFixed(2) 

  category.innerHTML = 'Name: ' + fet['category'][index]
}

export default { displayTarget }