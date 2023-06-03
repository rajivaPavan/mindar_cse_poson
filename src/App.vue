<template>
  <div id="app">
    <transition name="fade">
      <SplashScreen v-if="showSplashScreen" />
      <div v-else>
        <LaptopPage v-if="isLaptop" />
        <MobilePage v-else />
      </div>
    </transition>
  </div>
</template>

<script>
import SplashScreen from './pages/SplashScreen.vue';
import LaptopPage from './pages/LaptopPage.vue';
import MobilePage from './pages/MobilePage.vue';

export default {
  name: 'App',
  components: {
    SplashScreen,
    LaptopPage,
    MobilePage,
  },
  data() {
    return {
      showSplashScreen: true,
      isLaptop: false,
    };
  },
  mounted() {
    this.checkDevice();
    window.addEventListener('resize', this.checkDevice);
    // setTimeout(() => {
    //   this.showSplashScreen = false;
    // }, 3000); // Adjust the delay time as per your requirement
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    checkDevice() {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.isLaptop = screenWidth >= 768; // Adjust the breakpoint according to your design
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
