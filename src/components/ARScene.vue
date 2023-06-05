<template>
  <a-scene ref="a-scene" :mindar-image="mindArImage()"
           color-space="sRGB"
           device-orientation-permission-ui="enabled: false"
           loading-screen="enabled:false;"
           renderer="colorManagement: true, physicallyCorrectLights"
           vr-mode-ui="enabled: false">
    <a-assets>
      <a-asset-item v-for="asset in assets" :id="asset.id" :src="asset.src"></a-asset-item>
    </a-assets>
    <a-camera look-controls="enabled: false" position="0 0 0"></a-camera>
    <a-entity v-for="(n,i) in getNumberOfTargets()" :mindar-image-target="'targetIndex:'+i">
      <AModel v-for="model in modelsInTargets[i]" :key="model.id" :ref="model.id" :modelData="model"/>
    </a-entity>
  </a-scene>
</template>

<script>
import {AAssetItem, AGltfModelData} from "../assets/aframe-helper.js";
import AModel from "./AModel.vue";
import KingAnimationController from "../assets/animator.js";

export default {
  name: "ARScene",
  components: {
    AModel,
  },
  data() {
    return {
      mindarImage: {
        targetSrc: "./targets/generated.mind",
        filterMinCF: 0.00001,
        filterBeta: 0.001,
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
            scale: 0.5,
            positionY : -0.5
          }),
          new AGltfModelData("mihintale", "#mihintale-glb", {
            rotationY: -180,
            scale: 0.5,
            positionY : -0.5
          }),
          new AGltfModelData("king", "#king-glb", {
            rotationY:-180,
            animationClip: "Breath",
            scale: 0.5,
            animationController: (king) => {
              const controller = new KingAnimationController(king);
              controller.runAnimation();
            },
          })
        ]
      ]
    }
  },
  methods: {
    // mindar-image property
    mindArImage() {
      return "imageTargetSrc: " + this.mindarImage.targetSrc
          + "; maxTrack: " + this.getNumberOfTargets()
          + "; filterMinCF:" + this.mindarImage.filterMinCF
          + "; filterBeta: " + this.mindarImage.filterBeta + ";";
    },
    getNumberOfTargets() {
      return this.modelsInTargets.length;
    },
    // loading-screen property
    loadingScreen(){
      // dotsColor: var(--theme-secondary);
      // backgroundColor: var(--bg-gradient);
      // get dots color from base.css variable
      let dotsColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-secondary');
      // get background color from base.css variable
      let backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-primary');
      return "backgroundColor: " + backgroundColor + "; dotsColor: " + dotsColor + ";";
    }
  },
}
</script>

<style scoped>
.a-loader-title {
  color: var(--text-color);
  font-family: var(--font-primary);
}

</style>