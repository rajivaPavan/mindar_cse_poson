<template>
  <div class="gradient">
    <div id="splash-text" class="zoom-in-animation">
      <img v-if="isImageLoaded" alt="Anubudu Vandana" src="/splash-text.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  data() {
    return {
      isImageLoaded: false,
    };
  },
  mounted() {
    const image = new Image();
    image.src = "/splash-text.png";
    image.onload = () => {
      this.isImageLoaded = true;
    };
  },
};
</script>

<style scoped>
.gradient {
  background: var(--bg-gradient);
  height: 100vh;
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 99999 !important;
}

#splash-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

#splash-text img {
  height: 85vh;
}

@keyframes zoom-in {
  0%, 100% {
    transform: scale(0.85);
  }
  50% {
    transform: scale(0.9);
  }
}

.zoom-in-animation {
  animation: zoom-in 2s ease-in-out infinite;
}

@media only screen and (max-width: 768px) {
  #splash-text img {
    width: 85vw;
    height: 100vh;
    object-fit: contain;
  }
}
</style>
