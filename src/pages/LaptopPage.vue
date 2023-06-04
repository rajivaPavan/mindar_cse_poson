<template>
  <transition name="fade">
    <SplashScreen v-if="showSplashScreen" />
    <div v-else class="bg">
      <div class="web-back-img"></div>
      <div class="steps-container">
        <img src="/qrcode_cse-poson-ar.vercel.app.png" alt="QR code to cse-poson-ar.vercel.app">
        <div class="steps">
          <h2>Scan the QR Code using your mobile phone to experience Poson with Augmented Reality</h2>
        </div>
        <img id="cse-logo" src="/logo-2.png" alt="CSE Logo">
      </div>
    </div>
  </transition>

</template>

<script>
import SplashScreen from "./SplashScreen.vue";
export default {
  name: "LaptopPage",
  components: {
    SplashScreen,
  },
  data() {
    return {
      showSplashScreen: true,
      splashScreenTimeout: 3000,
      windowLoaded: false, // Flag variable to track window.onload event
      isTimeoutOver: false, // Flag variable to track if the timeout has occurred
    };
  },
  methods: {
    hideSplashScreen() {
      this.showSplashScreen = false;
    },
  },
  mounted() {

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
}
</script>

<style scoped>
.bg{
  background: var(--bg-gradient);
  height: 100vh;
  width: 100vw;
}
.web-back-img{
  background-image: url('/poson-web-back-v2-scaled.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
  width: 65vw;
  position: absolute;
  top: 5vh;
  left: 5vh;
  z-index: 999;
}
.steps-container{
  position: absolute;
  top: 5vh;
  right: 5vw;
  height: 90vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.steps-container img:first-child{
  aspect-ratio: 1/1;
  width: 25vw;
  object-fit: contain;
  border: 1px solid black;
}
#cse-logo{
  /*positioning*/
  align-self: center;
  margin-top: 5vh;
  /*sizing*/
  width: 60%;
  object-fit: contain;
}
</style>