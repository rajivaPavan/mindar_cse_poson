<template>
  <ARScenePage>
    <template #scene>
      <ARScene ref="ar-scene" :mindarImage="mindarImage" :modelsInTargets="modelsInTargets" :assets="assets"/>
    </template>
  </ARScenePage>
</template>

<script>
import ARScenePage from './ARScenePage.vue';
import {AAssetItem, AGltfModelData} from "../assets/aframe-helper.js";
import KingAnimationController from "../assets/animator.js";
import ARScene from "../components/ARScene.vue";

export default {
  name: "MihintaleScene",
  components: {
    ARScenePage,
    ARScene
  },
  data() {
    let commonScale = 0.6;
    return {
      mindarImage: {
        targetSrc: "./targets/mihintale_target.mind",
        filterMinCF: 0.00001,
        filterBeta: 0.005,
      },
      // Add any data you need for your AR scene
      assets: [
        new AAssetItem("deer-glb", "./3d-models/Deer.glb"),
        new AAssetItem("mihintale-glb", "./3d-models/Mihintale.glb"),
        new AAssetItem("king-glb", "./3d-models/King.glb"),
      ],
      modelsInTargets: [ // 0 indexed targets in mindar-image
        [
          new AGltfModelData("deer", "#deer-glb", {
            rotationY: -180,
            scale: commonScale,
            positionY : -0.5
          }),
          new AGltfModelData("mihintale", "#mihintale-glb", {
            rotationY: -180,
            scale: commonScale,
            positionY : -0.5
          }),
          new AGltfModelData("king", "#king-glb", {
            rotationY:-180,
            positionY: -0.1,
            animationClip: "Breath",
            scale: commonScale,
            animationController: (king) => {
              const controller = new KingAnimationController(king);
              controller.runAnimation();
            },
          })
        ]
      ]
    }
  },
}
</script>