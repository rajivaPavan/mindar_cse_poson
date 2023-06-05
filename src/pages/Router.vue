<script>
import MihintalePage from './ARScenePage.vue'
import SelectionPage from './SelectionPage.vue'

const routes = {
  '/': SelectionPage,
  '/mihintale': MihintalePage,
  '/lanterns': MihintalePage
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