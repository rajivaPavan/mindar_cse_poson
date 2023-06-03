<template>
  <transition name="fade">
    <SplashScreen v-if="showSplashScreen" />
    <div v-else>
      <component :is="devicePage" />
    </div>
  </transition>
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
      devicePage: null,
      showSplashScreen: true,
      isLaptop: false,
      splashScreenTimeout: 3000,
      windowLoaded: false, // Flag variable to track window.onload event
      isTimeoutOver: false, // Flag variable to track if the timeout has occurred
    };
  },
  mounted() {
    this.checkDevice();
    window.addEventListener('resize', this.checkDevice);

    const loadingTimeout = setTimeout(() => {
      this.isTimeoutOver = true; // Set the flag variable to true
      if(this.windowLoaded) { // Check if the window.onload event has already occurred
        this.hideSplashScreen();
      }
    }, this.splashScreenTimeout);

    window.onload = () => {
      this.windowLoaded = true; // Set the flag variable to true
      if(this.isTimeoutOver) { // Check if the timeout has already occurred){
        clearTimeout(loadingTimeout);
        this.hideSplashScreen();
      }
    };

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    checkDevice() {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.isLaptop = screenWidth >= 768; // Adjust the breakpoint according to your design
      this.devicePage = this.isLaptop ? LaptopPage : MobilePage;
    },
    hideSplashScreen() {
      if (this.windowLoaded) { // Check if the window.onload event has occurred
        this.showSplashScreen = false;
      }
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
