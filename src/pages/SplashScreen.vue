<template>
  <div class="gradient">
    <div id="splash-text">
      <img alt="Anubudu Vandana" src="/splash-text.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashScreen.vue"
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(#25052e, #710b5c, #25052e);
  height: 100vh; /* Set the height of the element to cover the viewport */
}

/*disable page scroll*/
body {
  overflow: hidden;
}
#splash-text{
  display: flex;
  justify-content: center;
  align-items: center;
}
#splash-text img{
  height: 95vh;
}
/*in mobile*/
@media only screen and (max-width: 768px) {
  #splash-text img{
    width: 85vw;
    height: 100vh;
    object-fit: contain;
  }
}
</style>