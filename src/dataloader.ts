import tsne_map from './constants/tsne_vectors.json' assert {type: 'json'}
import pca_map from './constants/pca_vectors.json' assert {type: 'json'}
import features from './constants/features.json' assert {type: 'json'}
import * as THREE from 'three'
import mapper from './vectorspace/mapper'

type Features = {
  img_paths: {
    [key: number]: string;
  };
  // other properties...
};

type Vectors = {
  x: {
    [key: number]: number;
  },
  y: {
    [key: number]: number;
  },
  z: {
    [key: number]: number;
  }
}

const fet: Features = features


function loadData(scene: THREE.Scene, type: 'tsne' | 'pca' = 'tsne', sampleMax: number = 1000) {
  if (sampleMax > 5000) {
    sampleMax = 5212
  }


  const vectorSpaceScale = type == 'pca' ? 7 : 1
  const imageScale = type == 'pca' ? .7 : 1

  console.log(vectorSpaceScale, imageScale)


  for(let i: number = 0; i < sampleMax; i++) {
    mapper.addPoint(
      scene,
      fet['img_paths'][i].replace('dataset/', 'crunched/').replace('.jpg', '.webp'),
      get3Vector(i, type, vectorSpaceScale),
      imageScale
    )
  }
}

function get3Vector(index: number, type: 'tsne' | 'pca' = 'tsne', scale: number=.1) {
  const desiredVector: Vectors = (type == 'pca' ? pca_map : tsne_map) as Vectors

  return new THREE.Vector3(desiredVector['x'][index] * scale, desiredVector['y'][index] * scale, desiredVector['z'][index] * scale * 3)
}

export default {
  loadData
}