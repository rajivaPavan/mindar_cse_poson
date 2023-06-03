<template>
  <a-gltf-model :id="modelData.id" :animation-mixer="animationMixer" :position="position"
                :rotation="rotation" :scale="scale" :src="modelData.src"></a-gltf-model>
</template>

<script>
import {AGltfModelData} from "../assets/aframe-helper.js";

export default {
  name: "AModel",
// initialize data from props
  props: {
    modelData: {
      type: AGltfModelData,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    // add methods here
  },
  computed: {
    // add computed properties here
    rotation() {
      return this.modelData.rotation;
    },
    position() {
      return this.modelData.position;
    },
    scale() {
      return this.modelData.scale;
    },
    animationMixer() {
      return this.modelData.animationClip;
    }
  },
}
</script>

<style scoped>

</style>