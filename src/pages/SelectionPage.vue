<template>
    <div class="selection-page">
        <h2 class="selection-header">Select the Model</h2>
        <div class="selection-buttons">
          <MihintaleLink/>
          <LanternsLink/>
        </div>
    </div>
</template>

<script>
import LanternsLink from "../components/LanternsLink.vue";
import MihintaleLink from "../components/MihintaleLink.vue";

export default {
  components: {MihintaleLink, LanternsLink},
  data () {
        return {}
    },
    mounted() {
        const image = new Image();
        image.src = "/poson-web-back-v7-scaled.jpg";
    },
}
</script>

<style scoped>
    .selection-page {
        background: var(--bg-gradient);
        height: 95vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .selection-header {
        text-align: center;
        margin-top: 3rem;
    }
 
    .selection-buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 1rem;
        height: 100%;
    }

</style>