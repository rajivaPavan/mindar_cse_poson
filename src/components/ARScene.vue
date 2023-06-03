<template>
  <a-scene
      mindar-image="imageTargetSrc: ./targets/generated.mind; filterMinCF:0.0000001; filterBeta: 0.0001;"
      color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false">
    <a-assets>
      <a-asset-item id="avatarModel" src="./3d-models/deer.glb">
      </a-asset-item>
    </a-assets>
    <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
    <a-entity mindar-image-target="targetIndex: 0">
      <a-gltf-model src="#avatarModel" id="xbot-model" rotation="0 0 0"
                    position="0 0 0" scale="0.1 0.1 0.1" animation-mixer></a-gltf-model>
    </a-entity>
  </a-scene>
</template>

<script>
export default {
  name: "ARScene"
}
</script>

<style scoped>

</style>