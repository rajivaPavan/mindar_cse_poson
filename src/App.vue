<template>
  <component :is="devicePage" />
</template>

<script>
import LaptopPage from './pages/LaptopPage.vue';
import Router from './pages/Router.vue';

export default {
  name: 'App',
  components: {
    LaptopPage,
    Router
},
  data() {
    return {
      devicePage: null,
    };
  },
  mounted() {
    this.checkDevice();
    window.addEventListener('resize', this.checkDevice);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    checkDevice() {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let isMobile = screenWidth < 768; // Adjust the breakpoint according to your design
      this.devicePage = isMobile ? Router : LaptopPage;
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
