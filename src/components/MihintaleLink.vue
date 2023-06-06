<template>
  <a id="mihintale-button" class="selection-button" href="#/mihintale">
                <span id="mihintale-button-text" class="button-text">
                    AR Mihintale
                </span>
  </a>
</template>
<script>
export default {
  name: 'MihintaleLink'
}
</script>
<style scoped>

.selection-button {
  height: 100%;
  margin: 1rem;
  text-decoration: none;
  color: white;
  font-size: 2rem;
  background-color: var(--bg-gradient);
  text-align: center;
  border-radius: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
}

.button-text {
  background-color: rgba(0, 0, 0, 0.567);
  padding: 1rem;
  border-radius: 3rem;
}

#mihintale-button-text {
  margin-top: 2rem;
}

#mihintale-button {
  background-image: url('/poson-web-back-v7-scaled.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  justify-content: start;
}

</style>