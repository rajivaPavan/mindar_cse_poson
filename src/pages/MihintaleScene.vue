<template>
  <ARScenePage>
    <template #scene>
      <MihintaleARScene ref="ar-scene"/>
    </template>
  </ARScenePage>
</template>

<script>
import ARScenePage from './ARScenePage.vue';
import MihintaleARScene from '../components/MihintaleARScene.vue';

export default {
  name: "MihintaleScene",
  components: {
    ARScenePage,
    MihintaleARScene
  }
}
</script>