<script>
import ARScene from '../components/ARScene.vue';

export default {
  name: "MobilePage.vue",
  components: {
    ARScene,
  }
}
</script>
<template>
  <div class="mobile-page">
    <ARScene/>
  </div>
</template>

<style scoped>
.mobile-page {
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  /* Add any other styles for your mobile page */
}
</style>
