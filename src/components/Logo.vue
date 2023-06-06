<template>
  <div @click="goToHome" class="logo">
    <img src="/logo-mobile.png" alt="logo">
  </div>
</template>
<script>
export default {
  name: 'Logo',
  methods:{
    goToHome(){
      window.location = "/";
    },
  }
}
</script>
<style scoped>
.logo img {
  height: 9.5vh;
  position: absolute;
  z-index: 999 !important;
  top: 0.5vh;
  left: 0.5vw;
}
</style>