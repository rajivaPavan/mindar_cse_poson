<template>
<ARScenePage>
  <template #scene>
    <LanternARScene ref="ar-scene"/>
  </template>
</ARScenePage>
</template>

<script>
import ARScenePage from './ARScenePage.vue'
import LanternARScene from '../components/LanternARScene.vue'

export default {
  name: "LanternsScene",
  components: {
    ARScenePage,
    LanternARScene
  }
}
</script>