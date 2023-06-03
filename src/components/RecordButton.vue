<script>
export default {
  name: "RecordButton",
  data() {
    return {
      isRecording: false,
      mediaRecorder: null,
      countdownSeconds: 30,
      countdownInterval: null,
    };
  },
  methods: {
    toggleRecording() {
      this.isRecording = !this.isRecording;
      if (this.isRecording) {
        this.startRecording();
      } else {
        this.stopRecording();
      }
    },
    // This method will be called when the user clicks on the record button to ask for the screen recording permission
    async recordScreen() {
      return await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: { mediaSource: "screen"}
      });
    },
    createRecorder (stream, mimeType) {
      // the stream data is stored in this array
      let recordedChunks = [];

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = function (e) {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      };
      mediaRecorder.onstop = function () {
        this.saveFile(recordedChunks);
        recordedChunks = [];
      };
      mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
      return mediaRecorder;
    },
    saveFile(recordedChunks){

      const blob = new Blob(recordedChunks, {
        type: 'video/webm'
      });
      let filename = window.prompt('Enter file name'),
          downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `＄{filename}.webm`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      URL.revokeObjectURL(blob); // clear from memory
      document.body.removeChild(downloadLink);
    },

    // This method will be called when the user clicks on the record button to start the recording
    // and starts the countdown animation
    async startRecording() {
      this.recordScreen().then((stream) => {
        let mimeType = 'video/webm';
        this.mediaRecorder = this.createRecorder(stream, mimeType);

        // Start the countdown animation
        this.countdownInterval = setInterval(() => {
          this.countdownSeconds--;
          if (this.countdownSeconds <= 0) {
            this.stopRecording();
          }
        }, 1000);
      });

    },
    // This method will be called when the user clicks on the record button to stop the recording
    // and clears the countdown animation
    stopRecording() {
      clearInterval(this.countdownInterval);
      this.mediaRecorder.stop();
    },
  },

}
</script>

<template>
  <div class="record-button-container">
    <div class="record-button" @click="toggleRecording">
      <div class="inner-circle" :class="{ recording: isRecording }">
        <div class="outer-circle" :class="{ countdown: isRecording }"></div>
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
/*  center this */
  position: absolute;
  top: -5px;
  left: -5px;
  transition: border-color 0.3s ease;
}

.outer-circle.countdown {
  animation: countdown-animation 30s linear forwards;
}

@keyframes countdown-animation {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 157; /* 2 * pi * radius = 2 * 3.14 * 25 = 157 */
  }
}
</style>

