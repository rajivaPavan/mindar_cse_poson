<template>
  <a-scene :mindar-image="mindArImage()"
           color-space="sRGB"
           device-orientation-permission-ui="enabled: false"
           renderer="colorManagement: true, physicallyCorrectLights"
           vr-mode-ui="enabled: false">
    <a-assets>
      <a-asset-item v-for="asset in assets" :id="asset.id" :src="asset.src"></a-asset-item>
    </a-assets>
    <a-camera look-controls="enabled: false" position="0 0 0"></a-camera>
    <a-entity v-for="(n,i) in mindarImage.numberOfTargets" :mindar-image-target="'targetIndex:'+i">
      <AModel v-for="model in modelsInTargets[i]" :key="model.id" :modelData="model"/>
    </a-entity>
  </a-scene>
</template>

<script>
import {AAssetItem, AGltfModelData} from "../assets/aframe-helper.js";
import AModel from "./AModel.vue";

export default {
  name: "ARScene",
  components: {
    AModel,
  },
  data() {
    return {
      mindarImage: {
        numberOfTargets: 2, //TODO: update this to the number of targets in your mindar-image
        targetSrc: "./targets/generated.mind",
        filterMinCF: 0.0000001,
        filterBeta: 0.0001,
      },
      // Add any data you need for your AR scene
      assets: [
        new AAssetItem("deer-glb", "./3d-models/deer.glb"),
        new AAssetItem("mihintale-glb", "./3d-models/mihintale.glb"),
      ],
      modelsInTargets: [ // 0 indexed targets in mindar-image
        [
          new AGltfModelData("deer", "#deer-glb", {
            scale: {x: 0.1, y: 0.1, z: 0.1},
            rotation: {x: 0, y: -90, z: 0},
            position: {x: 0, y: -0.5, z: 0.5},
          }),
            new AGltfModelData("mihintale", "#mihintale-glb", {
            scale: {x: 0.5, y: 0.5, z: 0.5},
            position: {x: 0, y: -0.5, z: 0},
            })
        ]
      ]
    }
  },
  methods: {
    // mindar-image property
    mindArImage() {
      return "imageTargetSrc: " + this.mindarImage.targetSrc
          + "; maxTrack: " + this.mindarImage.numberOfTargets
          + "; filterMinCF:" + this.mindarImage.filterMinCF
          + "; filterBeta: " + this.mindarImage.filterBeta + ";";
    },
  },
}
</script>

<style scoped>

</style>