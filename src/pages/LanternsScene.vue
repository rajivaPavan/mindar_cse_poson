<template>
  <Logo/>
  <GoToLink text="AR Mihintale" link="#/mihintale" />
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
import MihintaleLink from "../components/MihintaleLink.vue";
import GoToLink from "./GoToLink.vue";
import Logo from "../components/Logo.vue"

export default {
  name: "LanternsScene",
  components: {
    MihintaleLink,
    ARScenePage,
    ARScene,
    GoToLink,
    Logo
  },
  data(){
    const commonScale = 1.5;
    const commonPositionY = -0.5;
    return {
      mindarImage:{
        targetSrc: "./targets/lanterns_target.mind",
        filterMinCF: 0.00001,
        filterBeta: 0.001
      },
      assets:[
        new AAssetItem("lantern-1-glb", "./3d-models/ImageTarget.glb"),
        new AAssetItem("lantern-2-glb", "./3d-models/ImageTarget2.glb"),
        new AAssetItem("lantern-3-glb", "./3d-models/ImageTarget3.glb"),
      ],
      modelsInTargets:[
        [
          new AGltfModelData("lantern-1", "#lantern-1-glb",{
            positionX:-1.75,
            scale: commonScale,
            positionY:commonPositionY,
          }),
        ],
        [
          new AGltfModelData("lantern-2", "#lantern-2-glb",{
            scale: 1.2,
            positionY:commonPositionY,
          }),
        ],
        [
          new AGltfModelData("lantern-3", "#lantern-3-glb",{
            positionX:2.75,
            positionY:commonPositionY,
            scale: commonScale
          }),
        ]
      ],

    }
  }
}
</script>

<style scoped>
/*pass this to inner component*/
:deep(#mihintale-button-text) {
  margin-top: 0 !important;
}
:deep(.selection-button){

}
</style>