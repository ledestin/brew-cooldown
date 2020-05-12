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
    <StepImage
      image="beverage-1869716_1230.jpg"
      alt="Kettle pouring hot water on tea leaves in gaiwan" />
  </div>
</template>

<script>
  import webNotification from "./webNotification"
  import StepImage from "./StepImage"

  export default {
    name: 'prepare',
    components: {
      StepImage
    },
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
