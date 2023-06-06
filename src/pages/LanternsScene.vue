<template>
<ARScenePage>
  <template #scene>
    <ARScene ref="ar-scene" :mindarImage="mindarImage" :modelsInTargets="modelsInTargets" :assets="assets"/>
  </template>
</ARScenePage>
</template>

<script>
import ARScenePage from './ARScenePage.vue'
import ARScene from "../components/ARScene.vue";
import {AAssetItem, AGltfModelData} from "../assets/aframe-helper.js";

export default {
  name: "LanternsScene",
  components: {
    ARScenePage,
    ARScene
  },
  data(){
    let commonScale = 1.1;
    return {
      mindarImage:{
        targetSrc: "./targets/lanterns_target.mind",
        filterMinCF: 0.0001,
        filterBeta: 0.0001
      },
      assets:[
        new AAssetItem("lantern-1-glb", "./3d-models/ImageTarget.glb"),
        new AAssetItem("lantern-2-glb", "./3d-models/ImageTarget2.glb"),
        new AAssetItem("lantern-3-glb", "./3d-models/ImageTarget3.glb"),
      ],
      modelsInTargets:[
        [
          new AGltfModelData("lantern-1", "#lantern-1-glb",{
            positionX:-1,
            scale: commonScale
          }),
        ],
        [
          new AGltfModelData("lantern-2", "#lantern-2-glb",{
            scale: commonScale
          }),
        ],
        [
          new AGltfModelData("lantern-3", "#lantern-3-glb",{
            positionX:1.1,
            scale: commonScale
          }),
        ]
      ],

    }
  }
}
</script>