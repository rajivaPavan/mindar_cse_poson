<script>
import SelectionPage from './SelectionPage.vue';
import MihintaleScene from "./MihintaleScene.vue";
import LanternsScene from "./LanternsScene.vue";

const routes = {
  '/': SelectionPage,
  '/mihintale': MihintaleScene,
  '/lanterns': LanternsScene
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || SelectionPage
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
      this.sceneSelected = true
		})
  }
}
</script>

<template>
  <component :is="currentView" />
</template>