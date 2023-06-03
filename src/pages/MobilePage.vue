<script>
import RecordButton from '../components/RecordButton.vue';

export default {
  name: "MobilePage.vue",
  components: {
    RecordButton
  }
}
</script>
<template>
  <div class="mobile-page">
    <!-- Content of your mobile page -->
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
