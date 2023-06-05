<script>
import ARScene from '../components/ARScene.vue';
import SplashScreen from './SplashScreen.vue';

export default {
  name: "MihintalePage.vue",
  components: {
    ARScene,
    SplashScreen,
  },
  data() {
    return {
      showSplashScreen: true,
    }
  },
  computed: {
    splashScreen() {
      return this.showSplashScreen;
    }
  },
  mounted() {
    const ascene = this.$refs["ar-scene"].$refs["a-scene"];
    //terminal output
    console.log(ascene);
    ascene.addEventListener(
        "renderstart",
        (function onAframeRenderStart() {
          let haveRun = false;
          return function () {
            console.warn("RENDER START");
            if (haveRun) return;
            haveRun = true;
            this.showSplashScreen = false;
          }.bind(this);
        }.call(this))
    );
  }
}
</script>
<template>
  <SplashScreen v-if="splashScreen"/>
  <div class="mobile-page">
    <ARScene ref="ar-scene"/>
  </div>
</template>

<style scoped>
.mobile-page {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top:0;
  left:0;
  z-index: 0;
  margin: 0;
  /* Add any other styles for your mobile page */
}
</style>
