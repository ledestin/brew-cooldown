<template>
  <div v-bind="$attrs">
    <h2 class="title">
      Pour water on leaves and
      <button
        class="button is-primary"
        @click="startBrewing"
        :disabled="disableProgress"
      >
        Start Brewing
      </button>
    </h2>
    <img
      src="./assets/beverage-1869716_1920.jpg"
      alt="Kettle pouring hot water on tea leaves in gaiwan">
  </div>
</template>

<script>
  import webNotification from "./webNotification"

  export default {
    name: 'prepare',
    props: {
      nextStep: Function,
      disableProgress: Boolean
    },
    methods: {
      startBrewing() {
        webNotification.requestPermission()
        this.nextStep()
      }
    }
  }
</script>
