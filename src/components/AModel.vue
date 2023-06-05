<template>
  <a-gltf-model :ref="modelData.id" :id="modelData.id" :animation-mixer="animationMixer" :position="modelData.position"
                :rotation="modelData.rotation" :scale="modelData.scale" :src="modelData.src"></a-gltf-model>
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
    },
  },
  data() {
    return {}
  },
  mounted() {
    // run animations if animation controller is provided
    let animationController = this.modelData.animationController;
    if(animationController != null){
      let model = this.$refs[this.modelData.id];
      model.addEventListener("model-loaded", ()=> {
        animationController(model);
      });
    }
  },
  methods: {
    // add methods here
  },
  computed: {
    animationMixer() {
      return this.modelData.animationClip;
    }
  },
}
</script>

<style scoped>

</style>