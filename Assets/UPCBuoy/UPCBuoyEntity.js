import * as THREE from 'three';
import { GLTFLoader } from '/visortemporal3DMSM/lib/three.js/examples/jsm/loaders/GLTFLoader.js';

class UPCBuoyEntity {

  isLoaded = false;

  constructor(scene, onload){
    // https://www.youtube.com/watch?v=6LA8vEB47Nk&ab_channel=DirkTeucher
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/visortemporal3DMSM/Assets/UPCBuoy/BuoyMSM.glb', (gltf) => {
      // GLTF scene
      const root = gltf.scene;
      // Fix frustrum culling
      root.children[0].frustumCulled = false;
      // Scene direction fix
      const angleFix = 90;

      root.rotation.y = angleFix * Math.PI / 180;

      this.root = root;

      
      
      scene.add(root);
      this.isLoaded = true;

      if (onload)
        onload();
    });
  }
}

export { UPCBuoyEntity }