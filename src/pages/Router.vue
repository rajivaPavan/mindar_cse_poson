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
      // remove all html elements with class name = "mindar-ui-overlay" if they exist
      let elements = document.getElementsByClassName("mindar-ui-overlay");
      while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
      }
		})
  }
}
</script>

<template>
  <component :is="currentView" />
</template>