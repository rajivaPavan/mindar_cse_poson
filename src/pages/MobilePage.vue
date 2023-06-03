<script>
import RecordButton from '../components/RecordButton.vue';
import ARScene from '../components/ARScene.vue';

export default {
  name: "MobilePage.vue",
  components: {
    RecordButton,
    ARScene,
  }
}
</script>
<template>
  <div class="mobile-page">
    <ARScene/>
    <RecordButton />
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
