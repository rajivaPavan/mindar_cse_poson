<template>
  <a id="lantern-button" class="selection-button" href="#/lanterns">
                <span class="button-text">
                    AR Lanterns
                </span>
  </a>
</template>
<script>
export default {
  name: 'LanternsLink'
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
  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-text {
  background-color: rgba(0, 0, 0, 0.567);
  padding: 1rem;
  border-radius: 3rem;
}

#lantern-button {
  background-image: url('/ar-lantern-design.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  justify-content: center;
}
</style>