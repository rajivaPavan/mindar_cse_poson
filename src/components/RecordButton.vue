<script>
export default {
  name: "RecordButton",
  data() {
    return {
      isRecording: false,
    };
  },
  methods: {
    toggleRecording() {
      this.isRecording = !this.isRecording;
    },
  },
}
</script>

<template>
  <div class="record-button-container">
    <div class="record-button" @click="toggleRecording">
      <div class="inner-circle" :class="{ recording: isRecording }">
        <div class="outer-circle"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.record-button-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 9999;
}

.record-button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.inner-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.inner-circle.recording {
  background-color: red;
}

.outer-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid white;
}
</style>

