<script>
import SplashScreen from './SplashScreen.vue';

export default {
  name: "ARScenePage",
  components: {
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
<!--    slot-->
    <slot name="scene"></slot>
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
