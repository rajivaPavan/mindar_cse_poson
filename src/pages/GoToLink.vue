<template>
  <a class="go-to" :href="link">
    <div class="switch">Switch to</div>
    {{text}}
  </a>
</template>
<script>
export default {
  name: 'GoToLink',
  props:{
    text:{
      type:String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.go-to {
  position: absolute;
  padding-block: 0.5rem;
  background-color: var(--theme-secondary);
  border-radius: 1rem;
  padding-inline: 0.5rem;
  /*  horizontally center*/
  text-decoration: none;
  font-weight: 500;
  top: 1vh;
  right: 1vw;
  z-index: 999;
}
.switch{
  font-size: 0.8em;
  text-align: center;
  font-weight: 500;
}
</style>