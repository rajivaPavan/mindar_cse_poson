<template>
  <div class="gradient">
    <div id="splash-text" class="zoom-out-animation">
      <img alt="Anubudu Vandana" src="/splash-text.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
};
</script>

<style scoped>
.gradient {
  background: var(--bg-gradient);
  height: 100vh;
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
  0% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
}

.zoom-out-animation {
  animation: zoom-in 5s linear forwards; /* Adjust the duration and timing function as needed */
}

@media only screen and (max-width: 768px) {
  #splash-text img {
    width: 85vw;
    height: 100vh;
    object-fit: contain;
  }
}
</style>
